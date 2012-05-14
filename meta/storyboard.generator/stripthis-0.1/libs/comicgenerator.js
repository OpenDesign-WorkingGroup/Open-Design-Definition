// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---

var comicgenerator={

	// Settings
	_settings:{
		understand:{
			// If separators are placed as first or last character of a word, will be used as
			// "splitters". For example, the sentence "KesieV with scared face" will trigger the
			// "scared face" and then the "scared" and "face" words alone.
			// "KesieV with scared, face" will not work in the same way since the comma is defined
			// as separator: the only matched words will be "scared" and "face" and NOT the composed
			// word "scared face".
			separators:",;:"
		},
		placeholders:{
			// This is the relative path to your StripThis! installation from the HTML page that
			// is showing your comic. If the "cels" directory and your web page are in the same
			// directory, leave this empty. You can change this path from your page setting
			// comicgenerator._settings.placeholders.server when the page loads (or, if you're using
			// the comicbrowser.js module, into a onComicgeneratorConfigure() function placed
			// somewhere in your page.
			server:""
		},
		translator:{
			// This is your Google API key enabled for accessing to Google Translate.
			// Get your own API key here! - https://code.google.com/apis/console/?api=translate
			key:"",
			// You have to specify which languages are supported.
			enabled:["it","en","fr","es","de"],
			// This is the max length of every call to Google Translate. StripThis! Will try
			// to do the lowest number of calls to Google when translating your comic.
			maxurllength:2083
		}
	},
	
	// The main function - You can call this function from your page for converting scripts in
	// comics. Just call that with:
	//
	// comicgenerator.fromScriptToElement("<comic script>",<DOM element reference>,{<modifiers for the renderer>});
	//
	// The modefiers parameter can be omitted and defines some attributes used while rendering.
	// Specify them with {key:value, key:value ... }. The supported rendermods are:
	//
	// notooltips:true      Disables the tooltips on rendered comics
	// donttranslate:true   Disables the translations for the specified comic, despite the
	//                      configured settings.

	fromScriptToElement:function(script,element,rendermods) {
		element.innerHTML="";
		this.render(
			element,
			this.layout(this.understand(
				this.tokenizer(
					script
				),
				puppets
			)
		),rendermods);
	},

	// ---
	// ---
	// Here starts the StripThis! Comic Generator engine.
	// ---
	// ---
	
	// Stencil generator helpers
	
	// Merge the stencils using the ID as modifiers (as like enqueueing words in comic script)
	mergeStencils:function(modifiers) {
		var ret=[];
		for (var i=0;i<modifiers[0].length;i++) {
			var merged=[modifiers[0][i]];
			if (!modifiers[0][i]) {
				console.log("bombed at "+i+" len is "+modifiers[0].length);
				for (var a in modifiers[0]) console.log(a+":"+modifiers[0][a].id+(a==i?"  <----":""));
			}
			for (var y=1;y<modifiers.length;y++)
				for (var x=0;x<modifiers[y].length;x++)
					if (this.findId(merged[0].id,modifiers[y][x].withid)!=-1) merged.push(modifiers[y][x]);
			ret[i]=this.stuffer(merged);
		}
		return ret;
	},
	
	// Merge the words of two stencils set. If a subkey is specified, the modifiers' subkey is used as source of the merge.
	joinStencils:function(modifiers,starting,subkey) {
		var ret=(starting?starting:{});
		var mod;
		for (var i=0;i<modifiers.length;i++) {
			if (subkey) mod=modifiers[i][subkey]; else mod=modifiers[i];
			for (var x in mod) ret[x]=mod[x];
		}
		return ret;
	},
	
	// Append two set of stencils (arrays are merged, objects are pushed)
	appendStencils:function(modifiers) {
		var c=[];
		for (var i=0;i<modifiers.length;i++)
			if (modifiers[i])
				if (modifiers[i] instanceof Array)
					c=c.concat(modifiers[i]);
				else
					c.push(modifiers[i]);
		return c;
	},
	
	// Rendering
	
	renderStencils:function(to,stencils,modifiers,datasource,wholecomic) {
		var ret=[];
		for (var i=0;i<stencils.length;i++) {
			var stencildata=[stencils[i].stencil]
			if (stencils[i].innerHTML&&datasource[stencils[i].innerHTML]) stencildata.push({attributes:{innerHTML:this.htmlentities(datasource[stencils[i].innerHTML])}});
			if (stencils[i].backgroundImage&&datasource[stencils[i].backgroundImage]) stencildata.push({css:{backgroundImage:datasource[stencils[i].backgroundImage]}});
			if (stencils[i].translatable) stencildata.push({attributes:{translatelanguage:(wholecomic.language?wholecomic.language.id:""),translatetext:datasource[stencils[i].innerHTML]}});
			if (modifiers) for (var x=0;x<modifiers.length;x++)
				if (modifiers[x].ref.stencils)
					for (var y=0;y<modifiers[x].ref.stencils.length;y++)
						if (modifiers[x].ref.stencils[y]&&(this.findId(stencils[i].id,modifiers[x].ref.stencils[y].withid)!=-1))
						if (modifiers[x].arg)
							stencildata.push(this.stuffer([modifiers[x].ref.stencils[y].stencil],{placeholders:[modifiers[x].arg,this._settings.placeholders]}));
						else
							stencildata.push(modifiers[x].ref.stencils[y].stencil);
			if (to) {
				var obj=this.stufferHtml(to,stencildata,{placeholders:[this._settings.placeholders]});
				if (obj) ret.push(obj);
			} else ret.push(this.stuffer(stencildata));
		}
		return ret;
	},
	
	render:function(where,data,rendermods) {
		var columndata;
		var language=(data.language?data.language.id:"");
		var strip=this.renderStencils(where,stencils.strip,data.modifiers,null,data)[0];
		var dialogueline;
		
		if (data.title)
			this.renderStencils(strip,stencils.striptitle,this.appendStencils([{ref:{stencils:[{withid:stencils.striptitle[0].id,stencil:{attributes:{translatetext:data.title,translatelanguage:language,innerHTML:this.htmlentities(data.title)}}}]}},data.modifiers]),null,data)[0];
			
		if (data.panels) {
			var panels=this.renderStencils(strip,stencils.panels,data.modifiers,null,data)[0];
			
			for (var i=0;i<data.panels.length;i++) {
				var startorder=0;
				var panel=this.renderStencils(panels,stencils.panel,this.appendStencils([data.panels[i].adjectives,data.modifiers]),null,data)[0];
						
				if (data.panels[i].layout.outfields.length) {
					var column=this.renderStencils(panel,stencils.paneltightcolumn,this.appendStencils([data.panels[i].adjectives,data.modifiers]),null,data)[0];
					var lastballoon;
					for (var n=0;n<data.panels[i].layout.outfields.length;n++)
						for (var ni=0;ni<data.panels[i].layout.outfields[n].dialogue.length;ni++) {
							dialogueline=data.panels[i].layout.outfields[n].dialogue[ni];
							startorder=dialogueline.order+1;
							lastballoon=this.renderStencils(column,data.panels[i].layout.outfields[n].subject.ref.stencils,this.appendStencils([dialogueline.adverb,data.panels[i].adjectives,data.modifiers]),dialogueline,data);
							if (lastballoon.length&&(!rendermods||!rendermods.notooltips)) {
								label="n."+(dialogueline.order+1)+" ";
								if (data.panels[i].layout.outfields[n].subject.ref.name) label+=data.panels[i].layout.outfields[n].subject.ref.name+" ";
								for (var j=0;j<dialogueline.adverb.length;j++)
									if (dialogueline.adverb[j].ref.name) label+=dialogueline.adverb[j].ref.name+" ";
								for (var j=0;j<lastballoon.length;j++) lastballoon[j].title=label.substr(0,label.length-1);
							}
						}
				}
				for (var c=0;c<data.panels[i].layout.columns.length;c++) {
					columndata=data.panels[i].layout.columns[c];
					if (columndata.dialogue) {
						var columnorder=startorder;
						var label;
						var lastballoon;
						var column=this.renderStencils(panel,stencils.panelcolumn,this.appendStencils([{ref:{stencils:[{withid:stencils.panelcolumn[0].id,stencil:{css:{zIndex:1}}}]}},data.panels[i].adjectives,data.modifiers]),null,data)[0];
						for (var b=0;b<columndata.dialogue.length;b++) {
							while (columnorder<columndata.dialogue[b].order) {
								this.renderStencils(column,stencils.balloonseparator,this.appendStencils([data.panels[i].adjectives,data.modifiers]),null,data)[0];
								columnorder++;
							}
							lastballoon=this.renderStencils(column,columndata.dialogue[b].verb.stencils,this.appendStencils([columndata.dialogue[b].adverb,data.panels[i].adjectives,data.modifiers]),columndata.dialogue[b],data);
							columnorder++;
							if (lastballoon.length&&(!rendermods||!rendermods.notooltips)) {
								label="n."+(columndata.dialogue[b].order+1)+" ";
								if (columndata.dialogue[b].subject.ref.name) label+=columndata.dialogue[b].subject.ref.name+" ";
								for (var j=0;j<columndata.dialogue[b].adverb.length;j++)
									if (columndata.dialogue[b].adverb[j].ref.name)
										if (columndata.dialogue[b].adverb[j].ref.name) label+=columndata.dialogue[b].adverb[j].ref.name+" ";
								for (var j=0;j<lastballoon.length;j++) lastballoon[j].title=label.substr(0,label.length-1);
							}
						}
					} else {
						var adj=[];
						if (data.premise)
							for (var x=0;x<data.premise.length;x++)
								if (data.premise[x].subject.ref==columndata.subject.ref) adj=adj.concat(data.premise[x].adjectives);
						adj=adj.concat(columndata.adjectives);
						var column=this.renderStencils(panel,columndata.subject.ref.outerbox,this.appendStencils([adj,data.panels[i].adjectives,data.modifiers]),columndata,data);
						var man=this.renderStencils(column[0],columndata.subject.ref.innerbox,this.appendStencils([adj,data.panels[i].adjectives,data.modifiers]),columndata,data);
						var lastman=this.renderStencils(man[0],columndata.subject.ref.stencils,this.appendStencils([adj,data.panels[i].adjectives,data.modifiers]),columndata,data);
						if (!rendermods||!rendermods.notooltips) {
							var label="";
							if (columndata.subject.ref.name) label=columndata.subject.ref.name+" ";
							for (var j=0;j<adj.length;j++)
								if (adj[j].ref.name) label+=adj[j].ref.name+" ";
							if (label.length>0) column[0].title=label.substr(0,label.length-1);
						}
					}
				}
			}
		}
		if (data.credits)
			this.renderStencils(strip,stencils.stripcredits,this.appendStencils([{ref:{stencils:[{withid:stencils.stripcredits[0].id,stencil:{attributes:{translatetext:data.credits,translatelanguage:language,innerHTML:this.htmlentities(data.credits)}}}]}},data.modifiers]),null,data)[0];
			
		var translatorbox=null;
		var translatorenabled=this._settings.translator.enabled&&this._settings.translator.key.length&&(!rendermods||!rendermods.donttranslate);
		if (data.language||translatorenabled) {
			if (!translatorbox) translatorbox=this.renderStencils(strip,stencils.translatorbox,data.modifiers,null,data)[0];
			var orglnk=this.renderStencils(translatorbox,stencils.originaltranslator,this.appendStencils([{ref:{stencils:[{withid:stencils.originaltranslator[0].id,stencil:{attributes:{innerHTML:"ORIGINAL "+(data.language?"IN "+data.language.name:"TEXT")}}}]}},data.modifiers]),null,data)[0]
			if (translatorenabled) {
				orglnk.relatedcomic=strip;
				this.attachEvent(orglnk,"click",this._translatestrip);
			}
		}
		if (translatorenabled) {
			if (!translatorbox) translatorbox=this.renderStencils(strip,stencils.translatorbox,data.modifiers,null,data)[0];
			for (var i=0;i<this._settings.translator.enabled.length;i++)
				if (!data.language||(this._settings.translator.enabled[i]!=data.language.id)) {
					var lnk=this.renderStencils(translatorbox,stencils.translator,data.modifiers,null,data)[0];
					lnk.setAttribute("translateto",this._settings.translator.enabled[i]);
					lnk.relatedcomic=strip;
					lnk.innerHTML=this._settings.translator.enabled[i];
					this.attachEvent(lnk,"click",this._translatestrip);
				}
		}
		this.renderStencils(where,stencils.comiccloser,data.modifiers,null,data);
	},
	
	// Actions APIs
	getObjectFromPositions:function(location,fathers) {
		if (!fathers) fathers=0;
		if (fathers>location.length-1) return null;
		var ret=location[0]
		for (var i=1;i<location.length-fathers;i++)
			ret=ret[location[i]];
		return ret;
	},

	getPositionFromPositions:function(location,fathers) {
		if (!fathers) fathers=0;
		if (fathers>location.length-1) return null; else return location[location.length-fathers-1];
	},
	
	deleteNode:function(nd) {
		nd.id=null;
		nd.ref={};
		nd.arg=null;
	},
	
	// Tokenizing and understanding
	
	tokenizer:function(txt) {
		var out=[];
		var row=[];
		var token="";
		var addtoken=false;
		var addrow=false;
		var quote=false;
		var quoted=false;
		var first;
		var last;
		for (var i=0;i<txt.length+1;i++) {
			if (i<txt.length) {
				var ch=txt.charAt(i);
				addtoken=false;
				addrow=false;
				if (quoted) { token+=ch; quoted=false; } else
				if (!quoted&&(ch=="\\")) quoted=true; else
				if (ch=="\"") quote=!quote; else
				if (quote) { token+=ch; } else
				if ((ch.charCodeAt(0)==13)||(ch.charCodeAt(0)==10)) {addtoken=true;addrow=true} else
				if ((ch.charCodeAt(0)==32)||(ch.charCodeAt(0)==9)) addtoken=true; else
				token+=ch;
			} else {
				addtoken=true;
				addrow=true;
			}
			if (addtoken&&(token.length>0)) {
				var last=null;
				var first=null;
				if (token.length>1) {
					var tfirst=token.charAt(0);
					var tlast=token.charAt(token.length-1);
					if (this._settings.understand.separators.indexOf(tfirst)!=-1) {
						first=tfirst;
						token=token.substr(1);
					}
					if (this._settings.understand.separators.indexOf(tlast)!=-1) {
						last=tlast;
						token=token.substr(0,token.length-1);
					}
				}
				if (first) row.push(first);
				if (token.length>0) row.push(token);
				if (last) row.push(last);
				token="";
				quoted=false;
				quote=false;
			}
			if (addrow&&(row.length>0)) {
				out.push(row);
				row=[];
				quoted=false;
				quote=false;
			}
		}
		return out;
	},
	matchList:function(list,match,groups,lower) {
		var i=0;
		var word;
		var ret=[];
		var grsize=match;
		while (i<list.length) {
			word="";
			if (i+grsize>list.length) grsize=list.length-i;
			for (var a=0;a<grsize;a++)
				word+=list[i+a]+" "; 
			if (word.length) {
				word=word.substr(0,word.length-1);
				if (lower) word=word.toLowerCase();
				if (groups[word]) {
					var arg=null;
					if (groups[word].argument) {
						arg={};
						var carg;
						var prm;
						for (var j=0;j<groups[word].argument.length;j++) {
							carg=groups[word].argument[j];
							prm=list[i+a+j];
							if (carg.map)
								arg[carg.key]=(carg.map[prm]?carg.map[prm]:carg.map[carg.defaultvalue]);
							else
								arg[carg.key]=(prm?prm:carg.defaultvalue);
						}
						i+=groups[word].argument.length;
					}
					ret.push({id:word,arg:arg,ref:groups[word]});
					i+=a;
					grsize=match;
				} else if (grsize<=1) {
					i++;
					grsize=match;
				} else grsize--;
			}
		}
		return ret;
	},
	understand:function(data,know) {
		var strip={};
		var panel=null;
		var premise=true;
		var crow;
		var tkn;
		var panel;
		for (var row=0;row<data.length;row++) {
			crow=data[row];
			if (row==0) {
				strip.title=crow[0];
				crow.splice(0,1);
				strip.modifiers=this.matchList(crow,2,stencils.comic,true);
				var stripdata=this.renderStencils(null,[{id:"comic-metadata"}],strip.modifiers,null,strip)[0];
				for (var a in stripdata) strip[a]=stripdata[a];
			} else if ((crow[crow.length-1].toLowerCase()=="panel")||(crow[0].toLowerCase()=="panel")) {
				premise=false;
				if (crow[crow.length-1].toLowerCase()=="panel") crow.splice(crow.length-1,1);
				if (crow.length&&(crow[0].toLowerCase()=="panel")) crow.splice(0,1);
				var adjectives=comicgenerator.matchList(crow,2,know.panel.attributes,true);
				panel={adjectives:adjectives,story:[]};
				if (!strip.panels) strip.panels=[];
				strip.panels.push(panel);
				for (var i=0;i<adjectives.length;i++)
					if (adjectives[i].ref.action)
						adjectives[i].ref.action([strip,"panels",strip.panels.length-1,"adjectives",i,"ref"]);
			} else if (crow[0].toLowerCase()=="credits") {
				strip.credits=crow[crow.length-1];
			} else if (panel) {
				var subject=null;
				var verb=null;
				var tmpadverb=[];
				var tmpadjectives=[];
				var phrase="";
				var processed;
				for (var i=0;i<crow.length;i++) {
					tkn=crow[i].toLowerCase();
					processed=false;
					if (!verb) {
						if ((subject==null)&&know.persons[tkn]) {
							subject={id:tkn,ref:know.persons[tkn]};
							tmpadjectives.push("*");
						} else
						if ((subject!=null)&&know.verbs[tkn]) verb=know.verbs[tkn];
						else tmpadjectives.push(tkn);
					} else if (i==crow.length-1) phrase=crow[i];
					else tmpadverb.push(tkn);
				}
				if (subject) {
					var adjectives;
					var adverb=[];
					if (subject.ref.attributes) adjectives=comicgenerator.matchList(tmpadjectives,2,subject.ref.attributes); else adjectives=[];
					if (verb&&verb.attributes) adverb=comicgenerator.matchList(tmpadverb,2,verb.attributes); else adverb=[];
					panel.story.push({subject:subject,adjectives:adjectives,verb:verb,adverb:adverb,phrase:phrase});
					for (var i=0;i<adjectives.length;i++)
						if (adjectives[i].ref.action)
							adjectives[i].ref.action([strip,"panels",strip.panels.length-1,"story",panel.story.length-1,"adjectives",i,"ref"]);
					for (var i=0;i<adverb.length;i++)
						if (adverb[i].ref.action)
							adverb[i].ref.action([strip,"panels",strip.panels.length-1,"story",panel.story.length-1,"adverb",i,"ref"]);

				}
			} else if (premise) {
				if (!strip.premise) strip.premise=[];
				var subject=null;
				var tmpadjectives=[];
				for (var i=0;i<crow.length;i++) {
					tkn=crow[i].toLowerCase();
					if ((subject==null)&&know.persons[tkn]) {
						subject={id:tkn,ref:know.persons[tkn]};
						tmpadjectives.push("*");
					} else tmpadjectives.push(tkn);
				}
				if (subject) {
					var adjectives=comicgenerator.matchList(tmpadjectives,2,subject.ref.attributes);				
					var added=false;
					for (var x=0;x<strip.premise.length;x++)
						if (strip.premise[x].subject==subject) {
							strip.premise[x].adjectives.splice(strip.premise[x].adjectives.length,strip.premise[x].adjectives.length,adjectives);
							added=true;
							break;
						}
					if (!added) strip.premise.push({subject:subject,adjectives:adjectives});
					for (var i=0;i<adjectives.length;i++)
						if (adjectives[i].ref.action)
							adjectives[i].ref.action([strip,"premise",strip.premise.length-1,"adjectives",i,"ref"]);
				}
			}
		}
		return strip;
	},
	layout:function(data) {
		var csto;
		var subjp;
		if (data.panels) {
			for (var a=0;a<data.panels.length;a++) {
				var panel={outfields:[],columns:[]};
				for (var p=0;p<data.panels[a].story.length;p++) {
					csto=data.panels[a].story[p];
					var phrase={verb:csto.verb,adverb:csto.adverb,phrase:csto.phrase,order:p,subject:csto.subject};
					if (csto.subject.ref.position=="outfield") {
						var added=false;
						for (var s=0;s<panel.outfields.length;s++)
							if (panel.outfields[s].subject==csto.subject) {
								panel.outfields[s].dialogue.push(phrase);
								added=true;
								break;
							}
						if (!added) panel.outfields.push({subject:csto.subject,dialogue:[phrase]});							
					} else {
						var subjp=-1;
						for (var s=0;s<panel.columns.length;s++)
							if (panel.columns[s].subject&&(panel.columns[s].subject.ref==csto.subject.ref)) { subjp=s; break; }
						if (subjp==-1) {
							panel.columns.push({subject:csto.subject,adjectives:csto.adjectives});
							subjp=panel.columns.length-1;
						}
						if (csto.verb)
							switch (csto.verb.side) {
								case "right":{
									var addto=subjp+1;
									if (!panel.columns[addto]) panel.columns.push({dialogue:[phrase]}); else
									if (!panel.columns[addto].dialogue) panel.columns.splice(addto,0,{dialogue:[phrase]}); else
									panel.columns[addto].dialogue.push(phrase);
									break;
								}
								case "left":{
									var addto=subjp-1;
									if (addto<0) panel.columns.splice(0,0,{dialogue:[phrase]}); else
									if (!panel.columns[addto].dialogue) panel.columns.splice(addto+1,0,{dialogue:[phrase]}); else
									panel.columns[addto].dialogue.push(phrase);
									break;
								}
								default:{
									if (!panel.columns[addto].dialogue) panel.columns[addto].dialogue=[];
									panel.columns[addto].dialogue.push(phrase);
									break;
								}
							}
					}
				}
				data.panels[a].layout=panel;
			}
		}
		return data;
	},	
	
	// Placeholders
	solvePlaceholders:function(str,ph) {
		if (typeof str == "string")
			for (var i=0;i<ph.length;i++)
				if (ph[i]) for (var a in ph[i])
					str=str.replace(new RegExp("%"+a+"%", "g"),ph[i][a]);
		return str;
	},

	getUrlParameter:function(name) {
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( window.location.href );
	  if( results == null )
		return "";
	  else
		return results[1];
	},
	
	// Array search
	findId:function(hay,ned) {
		if (typeof hay == "object") {
			for (var i in hay) if (hay[i]==ned) return i;
			return -1;
		} if (hay==ned) return true; else return -1;
	},
	
	// HTML Entities
	htmlentities:function(s) {
		var translate_re = /(&|"|<|>)/g;
        var translate = {
			"&" : "&amp;", // Char &
			"\"": "&quot;", // Char "
			"<"  : "&lt;", // Char <
			">"  : "&gt;" // Char >
		};
		return (s.replace(translate_re, function(match,entity) { return translate[entity];}) );
	},
	
	// Trim
	trim:function(str){
        return str.replace(/^\s+|\s+$/g,"");
    },

	// Stuffer! :)
	stuffer:function(arg,attrs,psv) {
		var dt;
		var ret;
		var sk;
		var value;
		if (!attrs) attrs={};
		if (arg instanceof Array) dt=arg; else dt=[arg];
		if (psv) ret=psv;
		if (!ret) ret={};
		for (var i=0;i<dt.length;i++) {
			if (attrs.subkey) sk=dt[i][attrs.subkey]; else sk=dt[i];
			for (var a in sk) {
				if (attrs.placeholders)
					value=this.solvePlaceholders(sk[a],attrs.placeholders);
				else
					value=sk[a];
				if (value===null)
					if (attrs.copynulls) ret[a]=null;
					else delete ret[a];
				else if (typeof value == "object") ret[a]=this.stuffer([value],{copynulls:attrs.copynulls,placeholders:attrs.placeholders},ret[a]);
				else {
					if ((typeof value == "string")&&(value.substr(0,5)=="math:")) {
						var regex = new RegExp( "([\\-+,.0-9]*)(.*)" );						
						var oldnumber=regex.exec( ret[a] );
						if (oldnumber != null) {
							var oldvalue=parseFloat(oldnumber[1]);
							var delta=parseFloat(value.substr(6));
							switch (value.charAt(5)) {
								case "+": { oldvalue+=delta; break }
								case "-": { oldvalue-=delta; break }
								case "*": { oldvalue*=delta; break }
								case "/": { oldvalue/=delta; break }
							}
							ret[a]=oldvalue+""+oldnumber[2];
						}
					} else ret[a]=value;
				}
			}
		}
		return ret;
			
	},
	stufferHtml:function(to,data,attrs) {
		var ret=this.stuffer(data,attrs);
		if (ret.element&&!ret.skip) {
			var ht=document.createElement(ret.element);
			if (ret.id) ht.id=ret.id;
			if (ret.css) for (var a in ret.css) if (ret.css[a]!==null) ht.style[a]=ret.css[a];
			if (ret.attributes) for (var a in ret.attributes) if (ret.attributes[a]!==null) ht[a]=ret.attributes[a];
			if (to) to.appendChild(ht);
			return ht;
		} else return null;
	},
	
	// Translator
	_translatorqueue:{working:false,processing:[],queue:[]},
	
	
	_translatedtext:function(t,o) {
		if (t) {
			o.obj.setAttribute("translationto-"+o.trto,t.translatedText);
			o.obj.innerHTML=t.translatedText;
		}
	},
	_translatestrip:function() {
		var trto=this.getAttribute("translateto");
		var elem = this.relatedcomic.getElementsByTagName('*');
		var trfrom;
		for (var i = 0; i < elem.length; i++)
			if (elem[i].translatetext) {
				trfrom=elem[i].translatelanguage;
				if ((!trto)||(trfrom==trto))
					elem[i].innerHTML=comicgenerator.htmlentities(elem[i].translatetext);	
				else {
					var oldtrans=elem[i].getAttribute("translationto-"+trto);
					if (oldtrans)
						elem[i].innerHTML=oldtrans;					
					else {
						elem[i].innerHTML="...";
						comicgenerator.translate(elem[i].translatetext,(trfrom?trfrom:null),trto,comicgenerator._translatedtext,{obj:elem[i],trto:trto});
					}
				}
			}
		comicgenerator.commitTranslations();
	},
	
	// Translator (core)
	_translateNext:function(data,first) {
		comicgenerator._translatorqueue.working=true;
		if (!first) {
			var valid=data&&data.data&&data.data.translations&&data.data.translations.length;
			for (var i=0;i<comicgenerator._translatorqueue.processing[0].data.length;i++) 
				comicgenerator._translatorqueue.processing[0].data[i].callback((valid?data.data.translations[i]:null),comicgenerator._translatorqueue.processing[0].data[i].parm);
			comicgenerator._translatorqueue.processing=comicgenerator._translatorqueue.processing.splice(1);
		}
		if (comicgenerator._translatorqueue.processing.length) {
			var cur=comicgenerator._translatorqueue.processing[0];
			var scr=document.createElement("script");
			scr.type = 'text/javascript';
			scr.src=cur.url;
			document.getElementsByTagName('head')[0].appendChild(scr);
		} else {
			comicgenerator._translatorqueue.working=false;
			comicgenerator.commitTranslations();
		}
	},
	translate:function(text,from,target,callback,parm) {
		this._translatorqueue.queue.push({text:text,from:from,target:(target?target:""),callback:callback,parm:parm});
	},
	commitTranslations:function() {
		if (!this._translatorqueue.working&&this._translatorqueue.queue.length) {
			var org={};
			var trn;
			var chnk;
			var j;
			for (var i=0;i<this._translatorqueue.queue.length;i++) {
				trn=this._translatorqueue.queue[i];
				chnk="&q="+encodeURIComponent(trn.text);
				var data={callback:trn.callback,parm:trn.parm};
				if (!org[trn.from]) org[trn.from]={};
				if (!org[trn.from][trn.target]) org[trn.from][trn.target]=[];
				j=0;
				while (true) {
					if (!org[trn.from][trn.target][j]) {
						org[trn.from][trn.target][j]={
							url:"https://www.googleapis.com/language/translate/v2?callback=comicgenerator._translateNext&key="+this._settings.translator.key+(trn.from?"&source="+trn.from:"")+"&target="+trn.target+chnk,
							data:[data]
						};
						break;
					} else if (org[trn.from][trn.target][j].url.length+chnk.length<=this._settings.translator.maxurllength) {
						org[trn.from][trn.target][j].url+=chnk;
						org[trn.from][trn.target][j].data.push(data);
						break;
					} else j++;
				}
			}
			for (var dst in org)
				for (var src in org[dst])
					for (var i=0;i<org[dst][src].length;i++)
						this._translatorqueue.processing.push(org[dst][src][i]);
			this._translatorqueue.queue=[];
			this._translateNext(null,true);
		}
	},
	
	// Events
	attachEvent:function(obj,evt,code) {
		if (obj.addEventListener)
		  obj.addEventListener(evt, code, false);
		else if (obj.attachEvent)
		  obj.attachEvent('on'+evt,code);
	}
}

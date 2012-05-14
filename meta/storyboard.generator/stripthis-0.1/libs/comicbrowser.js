// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---

//
// Make your comic comic site (semi)automatically!
// Include this JS file together with comicgenerator.js and stencils and
// make your page giving these classnames to his elements:
//
// INFOS:
// comicbrowser-comic: current comic container. (innerHTML)
// comicbrowser-comicid: current comic ID (innerHTML)
// comicbrowser-comicurl: current comic URL (innerHTML)
// comicbrowser-comicurlhref: current comic URL (href value - for creating links)
// comicbrowser-opencomicstudiourlhref: current studio URL to this comic (href value - for creating links)
// comicbrowser-comicstudiourlhref: current empty studio URL (href value - for creating links)
// comicbrowser-comicreadcount: current comic reads (innerHTML)
// comicbrowser-comicdate: current comic data (innerHTML)
// comicbrowser-comictextvalue: current comic text (value)
// comicbrowser-comictext: current comic text (innerHTML)
//
// NAVIGATION:
// comicbrowser-firstcomichref: link to the first comic (href).
// comicbrowser-previouscomichref: link to the previous comic (href).
// comicbrowser-nextcomichref: link to the next comic (href).
// comicbrowser-lastcomichref: link to the last comic (href).
//
// RENDERING:
// comicbrowser-render: the innertHTML text is replaced with the rendered comic.
//
var comicbrowser={

	// Settings
	_settings:{
		server:{
			// Your url to the server.php script. Remember to specify the correct seriesid that
			// matches your settings.php.
			url:"server/server.php?seriesid=stripthis"
		},
		studio:{
			// Your studio URL. Is used for linking your page to the Comic Studio installation.
			// If you're going to make it private, remember to leave this field empty and keep
			// your Comic Studio link in a safe place :)
			url:"comic-studio.html"
		},
		startup:{
			// This method is called when the page is loaded, so you can change the
			// comicbrowser (and comicgenerator) config at startup.
			configurationmethod:"onComicgeneratorConfigure"
		},		
		format:{
			// The date format used for showing creation date
			date:"d/m/y h:i"
		},
		generator:{
			// Default values for every fromScriptToElement call done by comicbrowser. Refer to
			// comicbrowser.js for its syntax.
			rendermods:{}
		}
	},
	
	// When you're using comicbrowser.js you can change Comic Generator and Comic Browser default
	// settings into a "onComicgeneratorConfigure" function wrote somewhere on the including page.
	// Change the browser settings with "comicbrowser._settings.<key>.<subkey>=value" command and
	// generator settings with "comicgenerator._settings.<key>.<subkey>=value".
	
	// ---
	// ---
	// Here starts the StripThis! Comic Browser engine.
	// ---
	// ---
	
	// Local cache
	_current:{
		current:null,
		count:null,
		cache:{}
	},

	// Server integration
	fromcomicIdToElement:function(comicid,element,browsing) {
		var xmlhttp=comicbrowser.makeXmlHttp();	
		if (element&&xmlhttp) {
			var ___goingto={element:element,comicid:comicid,browsing:browsing};
			if (browsing&&(comicbrowser._current.count===null)) {
				xmlhttp.onreadystatechange = function() { comicbrowser._comiccount(xmlhttp,___goingto); }
				xmlhttp.open('GET', comicbrowser._settings.server.url+"&a=last", true);
				xmlhttp.send();			
			} else {
				if (browsing) {
					if ((___goingto.comicid==-1)||(___goingto.comicid>this._current.count)) ___goingto.comicid=this._current.count;
					if (___goingto.comicid==comicbrowser._current.current) return;
				}
				if (comicbrowser._current.cache[___goingto.comicid])
					comicbrowser.__fromcomicIdToElement(comicbrowser._current.cache[___goingto.comicid],___goingto); 
				else {
					xmlhttp.onreadystatechange = function(){comicbrowser._fromcomicIdToElement(xmlhttp,___goingto); }
					xmlhttp.open('GET', comicbrowser._settings.server.url+"&a=get&comicid="+encodeURIComponent(___goingto.comicid), true);
					xmlhttp.send();
				}
			}
		}
	},
	
	// Server answers
	_comiccount:function(xmlhttp,___goingto) {
		if (xmlhttp.readyState != 4) return;
		if (xmlhttp.status != 200 && xmlhttp.status != 304) {
			___goingto.element.innerHTML="<span style='display:none'>Sorry! HTTP error: " + xmlhttp.status+"</span>";
			return;
		}
		if (xmlhttp.responseText.substr(0,3)=="OK:") {
			var data=xmlhttp.responseText.substr(3);
			comicbrowser._current.count=data*1;
			comicbrowser.fromcomicIdToElement(___goingto.comicid,___goingto.element,true);
		} else
			___goingto.element.innerHTML="<span style='display:none'>Sorry! SERVER error: " + xmlhttp.responseText.substr(this.responseText.indexOf(":")+1)+"</span>";
	},
	_fromcomicIdToElement:function(xmlhttp,___goingto) {
		if (xmlhttp.readyState != 4) return;
		if (xmlhttp.status != 200 && xmlhttp.status != 304) {
			___goingto.element.innerHTML="<span style='display:none'>Sorry! HTTP error: " + xmlhttp.status+"</span>";
			return;
		}
		comicbrowser._current.cache[___goingto.comicid]=xmlhttp.responseText;
		comicbrowser.__fromcomicIdToElement(xmlhttp.responseText,___goingto);
	},
	__fromcomicIdToElement:function(data,goingto) {
		if (data.substr(0,3)=="OK:") {
			var data=data.substr(3);

			var comic_id=data.substr(0,data.indexOf("*"))*1;
			var comic_studiourl=comicbrowser._settings.studio.url+"#C-"+comic_id;
			var comic_url=comicbrowser.makeHash("C-"+comic_id);
			data=data.substr(data.indexOf("*")+1);
			var comic_date=data.substr(0,data.indexOf("*"));
			var comic_dateformatted=comicbrowser._settings.format.date;
			comic_dateformatted=comic_dateformatted.replace(/y/,comic_date.substr(0,4));
			comic_dateformatted=comic_dateformatted.replace(/m/,comic_date.substr(4,2));
			comic_dateformatted=comic_dateformatted.replace(/d/,comic_date.substr(6,2));
			comic_dateformatted=comic_dateformatted.replace(/h/,comic_date.substr(8,2));
			comic_dateformatted=comic_dateformatted.replace(/i/,comic_date.substr(10,2));
			comic_dateformatted=comic_dateformatted.replace(/s/,comic_date.substr(12,2));
			data=data.substr(data.indexOf("*")+1);
			var comic_readcount=data.substr(0,data.indexOf("*"));
			data=data.substr(data.indexOf("*")+1);

			if (goingto.browsing) {
			
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comicid");
				for (var i=0;i<objs.length;i++) objs[i].innerHTML=comic_id;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comiccount");
				for (var i=0;i<objs.length;i++) objs[i].innerHTML=comicbrowser._current.count;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comicurl");
				for (var i=0;i<objs.length;i++) objs[i].innerHTML=comic_url;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comicurlhref");
				for (var i=0;i<objs.length;i++) objs[i].href=comic_url;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-opencomicstudiourlhref");
				for (var i=0;i<objs.length;i++) objs[i].href=comic_studiourl;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comicreadcount");
				for (var i=0;i<objs.length;i++) objs[i].innerHTML=comic_readcount;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comicdate");
				for (var i=0;i<objs.length;i++) objs[i].innerHTML=comic_dateformatted;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comictextvalue");
				for (var i=0;i<objs.length;i++) objs[i].value=data;
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comictext");
				for (var i=0;i<objs.length;i++) objs[i].innerHTML=comicgenerator.htmlentities(data).replace(/\n/g,"<br>");
				
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-firstcomichref");				
				for (var i=0;i<objs.length;i++)
					if (comic_id>1) {
						objs[i].style.display="inline";
						objs[i].href=comicbrowser.makeHash("C-1");
					} else
						objs[i].style.display="none";
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-previouscomichref");
				for (var i=0;i<objs.length;i++)
					if (comic_id>1) {
						objs[i].style.display="inline";
						objs[i].href=comicbrowser.makeHash("C-"+(comic_id-1));
					} else
						objs[i].style.display="none";
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-nextcomichref");
				for (var i=0;i<objs.length;i++)
					if (comic_id<comicbrowser._current.count) {
						objs[i].style.display="inline";
						objs[i].href=comicbrowser.makeHash("C-"+(comic_id+1));
					} else
						objs[i].style.display="none";
				var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-lastcomichref");
				for (var i=0;i<objs.length;i++)
					if (comic_id<comicbrowser._current.count) {
						objs[i].style.display="inline";
						objs[i].href=comicbrowser.makeHash("C-"+comicbrowser._current.count);
					} else
						objs[i].style.display="none";
				
				comicbrowser._current.current=comic_id;
				
			}
			
			comicgenerator.fromScriptToElement(data,goingto.element,comicbrowser._settings.generator.rendermods);
		} else
			goingto.element.innerHTML="<span style='display:none'>Sorry! SERVER error: " + this.responseText.substr(this.responseText.indexOf(":")+1)+"</span>";
	},
	
	// Server integration
	
	makeXmlHttp:function() {
		
		var xmlhttp=false;
		/*@cc_on @*/
		/*@if (@_jscript_version >= 5)
		// JScript gives us Conditional compilation, we can cope with old IE versions.
		// and security blocked creation of the objects.
		try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
		try {
		 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
		 xmlhttp = false;
		}
		}
		@end @*/
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		  xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	
	},
	
	// DOM Parsing
	getElementsByClassName:function(from,cl) {
		var retnode = [];
		var myclass = new RegExp('\\b'+cl+'\\b');
		var elem = from.getElementsByTagName('*');
		for (var i = 0; i < elem.length; i++) {
		var classes = elem[i].className;
		if (myclass.test(classes)) retnode.push(elem[i]);
		}
		return retnode;
	},
	// Button handling
	makeHash:function(hsh) {
		var pos=document.location.href.indexOf("#");
		if (pos==-1)
			return document.location.href+"#"+hsh;
		else
			return document.location.href.substr(0,pos)+"#"+hsh;	
	},
	gotoHash:function(hsh) {
		document.location.href=this.makeHash(hsh);
	},
	
	// Onload event
	_onload:function() {
		if (window[comicbrowser._settings.startup.configurationmethod])
			window[comicbrowser._settings.startup.configurationmethod]();
		var cont=comicbrowser.getElementsByClassName(document.body,"comicbrowser-render");
		var text;
		for (var i=0;i<cont.length;i++) {
			text=cont[i].value;
			var spn=document.createElement("span");
			comicgenerator.fromScriptToElement(text.replace(/\r/g,""),spn,comicbrowser._settings.generator.rendermods);
			cont[i].parentNode.replaceChild(spn,cont[i]);
		}
		var objs=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comicstudiourlhref");
		for (var i=0;i<objs.length;i++) objs[i].href=comicbrowser._settings.studio.url;
		comicbrowser._hashchange();
	},
	_hashchange:function() {
		var cont=comicbrowser.getElementsByClassName(document.body,"comicbrowser-comic");
		if (cont.length>0) {
			var hash=comicgenerator.trim(window.location.hash).toLowerCase();
			var id=null;
			if (comicbrowser._current.current===null) id=-1;
			if (hash.substr(0,3)=="#c-") id=parseInt(hash.substr(3));
			if (id!=null) comicbrowser.fromcomicIdToElement(id,cont[0],true);
		}
	},
	attachEvent:function(obj,evt,code) {
		if (obj.addEventListener)
		  obj.addEventListener(evt, code, false);
		else if (obj.attachEvent)
		  obj.attachEvent('on'+evt,code);
	}
}

comicbrowser.attachEvent(window,'load',comicbrowser._onload);
comicbrowser.attachEvent(window,'hashchange',comicbrowser._hashchange);
  
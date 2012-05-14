// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---

/*
 * About stencils attributes:
 *
 * element: specify the HTML element to be generated
 * id: (string/array) one or multiple ID to the element. With multiple IDs you can group more elements together.
 * css: specify CSS attributes
 * attributes: specify the HTML tag attribute
 *
 * Special value types:
 * math:[/+-*]number: modifiy the related valuewhen merged with the stencil with same ID
 *
 */
// Generate stencils

var stencils={};

// System stencils

stencils.strip=[
	{id:"container-strip",stencil:{element:"div",css:{border:"1px solid #000000",backgroundColor:"#ffffff",cssFloat:"left",clear:"both",textAlign:"left",padding:"5px",cursor:"default"}}}
];
stencils.striptitle=[
	{id:"container-title",stencil:{element:"div",css:{fontFamily:"ActionManBold",fontSize:"20px",lineHeight:"20px",margin:"5px"}}}
];
stencils.panel=[
	{id:"container-panel",stencil:{element:"div",css:{minHeight:"180px",minWidth:"90px",backgroundColor:"#ffffff",color:"#000000",borderWidth:"2px",borderStyle:"solid",borderColor:"#000000",cssFloat:"left",padding:"0px 40px 0px 0px",margin:"5px",backgroundRepeat:"repeat-x",backgroundImage:"url('%server%cels/panels/default-background.png')",overflow:"hidden"}}}
];
stencils.panels=[
	{id:"container-panels",stencil:{element:"div",css:{cssFloat:"left"}}}
];
stencils.panelcolumn=[
	{id:"container-panelcolumn",stencil:{element:"div",css:{width:"85px",height:"160px",marginTop:"20px",textAlign:"center",position:"relative",cssFloat:"left"}}}
];
stencils.paneltightcolumn=[
	{id:"container-panelcolumn",stencil:{element:"div",css:{width:"60px",height:"180px",position:"relative",cssFloat:"left",zIndex:1}}}
];
stencils.balloonseparator=[
	{id:"container-balloonseparator",stencil:{element:"div",css:{height:"20px"}}}
];
stencils.stripcredits=[
	{id:"container-stripcredits",stencil:{element:"div",css:{fontFamily:"ActionManRegular",fontSize:"10px",margin:"5px",lineHeight:"10px",cssFloat:"left",clear:"both"}}}
];
stencils.translatorbox=[
	{id:"container-translatorbox",stencil:{element:"div",css:{clear:"both",marginLeft:"5px"}}}
];
stencils.translator=[
	{id:"container-translator",stencil:{element:"span",css:{cursor:"pointer",borderRadius:"5px",borderWidth:"1px",borderStyle:"solid",borderColor:"#ffffff",MozBorderRadius:"5px",WebkitBorderRadius:"5px",OBorderRadius:"5px",marginRight:"5px",color:"#ffffff",backgroundColor:"#000000",fontFamily:"ActionManRegular",fontSize:"12px",cssFloat:"left",textDecoration:"none",padding:"3px",cursor:"pointer"}}}
];
stencils.originaltranslator=[
	{id:"container-originaltranslator",stencil:{element:"span",css:{cursor:"pointer",borderRadius:"5px",borderWidth:"1px",borderStyle:"solid",borderColor:"#ffffff",MozBorderRadius:"5px",WebkitBorderRadius:"5px",OBorderRadius:"5px",marginRight:"5px",color:"#ffffff",backgroundColor:"#999999",fontFamily:"ActionManRegular",fontSize:"12px",cssFloat:"left",textDecoration:"none",padding:"3px",cursor:"pointer"}}}
];
stencils.defaultouterbox=[
	{id:"container-outerbox",stencil:{element:"div",css:{width:"85px",height:"160px",marginTop:"20px",textAlign:"center",position:"relative",cssFloat:"left"}}}
];
stencils.defaultinnerbox=[
	{id:"container-innerbox",stencil:{element:"div",css:{width:"100px",height:"140px",position:"absolute",bottom:"0px",left:"10px"}}}
];
stencils.comiccloser=[
	{id:"container-comiccloser",stencil:{element:"div",css:{clear:"both"}}}
];

// Comic modifiers

stencils.comic={
	// Colors
	"black":{
		category:"Color",
		name:"Black",
		stencils:[
			{withid:"container-strip",stencil:{css:{backgroundColor:"#000000",color:"#ffffff"}}}
		]
	},
	// Styles
	"4-koma":{
		category:"Style",
		name:"4-Koma",
		stencils:[
			{withid:"container-strip",stencil:{css:{width:null,position:"relative"}}},
			{withid:"container-title",stencil:{css:{width:"300px",position:"relative"}}},
			{withid:"container-panel",stencil:{css:{cssFloat:null,minWidth:"256px"}}},
		]
	},	
	// Languages
	"afrikaans":{
		category:"Language",
		name:"in afrikaans",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"afrikaans",id:"af"}}}
		]
	},
	"albanian":{
		category:"Language",
		name:"in albanian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"albanian",id:"sq"}}}
		]
	},
	"arabic":{
		category:"Language",
		name:"in arabic",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"arabic",id:"ar"}}}
		]
	},
	"belarusian":{
		category:"Language",
		name:"in belarusian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"belarusian",id:"be"}}}
		]
	},
	"bulgarian":{
		category:"Language",
		name:"in bulgarian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"bulgarian",id:"bg"}}}
		]
	},
	"catalan":{
		category:"Language",
		name:"in catalan",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"catalan",id:"ca"}}}
		]
	},
	"chinese-simplified":{
		category:"Language",
		name:"in chinese-simplified",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"chinese-simplified",id:"zh-CN"}}}
		]
	},
	"chinese-traditional":{
		category:"Language",
		name:"in chinese-traditional",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"chinese-traditional",id:"zh-TW"}}}
		]
	},
	"croatian":{
		category:"Language",
		name:"in croatian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"croatian",id:"hr"}}}
		]
	},
	"czech":{
		category:"Language",
		name:"in czech",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"czech",id:"cs"}}}
		]
	},
	"danish":{
		category:"Language",
		name:"in danish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"danish",id:"da"}}}
		]
	},
	"dutch":{
		category:"Language",
		name:"in dutch",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"dutch",id:"nl"}}}
		]
	},
	"english":{
		category:"Language",
		name:"in english",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"english",id:"en"}}}
		]
	},
	"estonian":{
		category:"Language",
		name:"in estonian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"estonian",id:"et"}}}
		]
	},
	"filipino":{
		category:"Language",
		name:"in filipino",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"filipino",id:"tl"}}}
		]
	},
	"finnish":{
		category:"Language",
		name:"in finnish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"finnish",id:"fi"}}}
		]
	},
	"french":{
		category:"Language",
		name:"in french",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"french",id:"fr"}}}
		]
	},
	"galician":{
		category:"Language",
		name:"in galician",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"galician",id:"gl"}}}
		]
	},
	"german":{
		category:"Language",
		name:"in german",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"german",id:"de"}}}
		]
	},
	"greek":{
		category:"Language",
		name:"in greek",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"greek",id:"el"}}}
		]
	},
	"haitian-creole":{
		category:"Language",
		name:"in haitian-creole",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"haitian-creole",id:"ht"}}}
		]
	},
	"hebrew":{
		category:"Language",
		name:"in hebrew",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"hebrew",id:"iw"}}}
		]
	},
	"hindi":{
		category:"Language",
		name:"in hindi",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"hindi",id:"hi"}}}
		]
	},
	"hungarian":{
		category:"Language",
		name:"in hungarian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"hungarian",id:"hu"}}}
		]
	},
	"icelandic":{
		category:"Language",
		name:"in icelandic",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"icelandic",id:"is"}}}
		]
	},
	"indonesian":{
		category:"Language",
		name:"in indonesian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"indonesian",id:"id"}}}
		]
	},
	"irish":{
		category:"Language",
		name:"in irish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"irish",id:"ga"}}}
		]
	},
	"italian":{
		category:"Language",
		name:"in italian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"italian",id:"it"}}}
		]
	},
	"japanese":{
		category:"Language",
		name:"in japanese",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"japanese",id:"ja"}}}
		]
	},
	"latvian":{
		category:"Language",
		name:"in latvian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"latvian",id:"lv"}}}
		]
	},
	"lithuanian":{
		category:"Language",
		name:"in lithuanian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"lithuanian",id:"lt"}}}
		]
	},
	"macedonian":{
		category:"Language",
		name:"in macedonian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"macedonian",id:"mk"}}}
		]
	},
	"malay":{
		category:"Language",
		name:"in malay",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"malay",id:"ms"}}}
		]
	},
	"maltese":{
		category:"Language",
		name:"in maltese",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"maltese",id:"mt"}}}
		]
	},
	"norwegian":{
		category:"Language",
		name:"in norwegian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"norwegian",id:"no"}}}
		]
	},
	"persian":{
		category:"Language",
		name:"in persian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"persian",id:"fa"}}}
		]
	},
	"polish":{
		category:"Language",
		name:"in polish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"polish",id:"pl"}}}
		]
	},
	"portuguese":{
		category:"Language",
		name:"in portuguese",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"portuguese",id:"pt"}}}
		]
	},
	"romanian":{
		category:"Language",
		name:"in romanian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"romanian",id:"ro"}}}
		]
	},
	"russian":{
		category:"Language",
		name:"in russian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"russian",id:"ru"}}}
		]
	},
	"serbian":{
		category:"Language",
		name:"in serbian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"serbian",id:"sr"}}}
		]
	},
	"slovak":{
		category:"Language",
		name:"in slovak",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"slovak",id:"sk"}}}
		]
	},
	"slovenian":{
		category:"Language",
		name:"in slovenian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"slovenian",id:"sl"}}}
		]
	},
	"spanish":{
		category:"Language",
		name:"in spanish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"spanish",id:"es"}}}
		]
	},
	"swahili":{
		category:"Language",
		name:"in swahili",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"swahili",id:"sw"}}}
		]
	},
	"swedish":{
		category:"Language",
		name:"in swedish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"swedish",id:"sv"}}}
		]
	},
	"thai":{
		category:"Language",
		name:"in thai",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"thai",id:"th"}}}
		]
	},
	"turkish":{
		category:"Language",
		name:"in turkish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"turkish",id:"tr"}}}
		]
	},
	"ukrainian":{
		category:"Language",
		name:"in ukrainian",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"ukrainian",id:"uk"}}}
		]
	},
	"vietnamese":{
		category:"Language",
		name:"in vietnamese",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"vietnamese",id:"vi"}}}
		]
	},
	"welsh":{
		category:"Language",
		name:"in welsh",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"welsh",id:"cy"}}}
		]
	},
	"yiddish":{
		category:"Language",
		name:"in yiddish",
		stencils:[
			{withid:"comic-metadata",stencil:{language:{name:"yiddish",id:"yi"}}}
		]
	}
}

// Balloon attributes
stencils.balloonattributes={
	"whispering":{
		category:"Volume",
		name:"Whispering",
		stencils:[
			{withid:"balloon-text",stencil:{css:{borderWidth:"1px",borderStyle:"dashed"}}}
		]
	},
	"loudly":{
		category:"Volume",
		name:"Loudly",
		stencils:[
			{withid:"balloon-text",stencil:{css:{borderWidth:"math:+2",fontSize:"math:+8",lineHeight:"math:+8",fontFamily:"ActionManBold"}}}
		]
	},
	"sound":{
		category:"Special",
		name:"Sound",
		stencils:[
			{withid:"balloon-text",stencil:{element:"div",css:{position:"absolute",left:"0px",top:"auto",bottom:"40px",fontFamily:"ActionManExtendedBoldItalic",borderWidth:"0px",backgroundColor:null,marginLeft:"0px",padding:"0px",fontSize:"20px",lineHeight:"20px",letterSpacing:"-3px",textAlign:"center",textColor:"white",WebkitTransform:"rotate(-20deg)",MozTransform:"rotate(-20deg)",OTransform:"rotate(-20deg)",transform:"rotate(-20deg)",textShadow:"#ffffff 2px 2px 0px"}}},
			{withid:"arrow",stencil:{skip:true}}
		]
	},
	"literally":{
		category:"Translation",
		name:"Literally",
		notes:"Leave the related text untranslated.",
		stencils:[
			{withid:"balloon-text",stencil:{attributes:{translatetext:null}}}
		]
	},
	"same way":{
		category:"Special",
		name:"Same way",
		notes:"Uses the same way of talking of the previous sentence.",
		action:function(positions) {
			// Same as the "like" adjective. "Says" and "Replies" have the same adjectives but
			// with different layout, so we bust add the same adjectives of the source of the copy
			// but taken from the current verb.
			var aid;
			var mynode=comicgenerator.getObjectFromPositions(positions,1);
			var me=comicgenerator.getObjectFromPositions(positions,3);
			var scene=comicgenerator.getObjectFromPositions(positions,4);
			var myposition=comicgenerator.getPositionFromPositions(positions,3);
			if (myposition>0) {
				if (scene[myposition-1].adverb)
					for (var i=0;i<scene[myposition-1].adverb.length;i++) {
						aid=scene[myposition-1].adverb[i].id;
						if (me.verb.attributes[aid]) me.adverb.push({id:aid,ref:me.verb.attributes[aid],arg:scene[myposition-1].adverb[i].arg});
					}
			}
			comicgenerator.deleteNode(mynode);
		}
	}
}

// Hairs
stencils.basicmanhairs={
	spiky:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}
	],
	tail:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/tail-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}
	],
	spikyshaved:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spikyshaved-hairfront.png"}}}
	],
	punky:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/punky-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}
	],
	longcurlybehind:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curlylong-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}	
	],
	verycurly:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/verycurly-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/verycurly-hairfront.png"}}}	
	],
	curlyshort:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curlyshort-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curly-hairfront.png"}}}	
	],
	curlylong:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curlylong-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curly-hairfront.png"}}}	
	],
	moved:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/moved-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curly-hairfront.png"}}}	
	],
	longhairs:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/long-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/long-hairfront.png"}}}	
	],
	shorthairs:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/short-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}	
	],
	longtied:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/longtied-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}	
	],
	random:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/random-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curly-hairfront.png"}}}	
	],
	flat:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/flat-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/fringe-hairfront.png"}}}	
	],
	longcurl:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/long-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curl-hairfront.png"}}}	
	],
	shortcurl:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/flat-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curl-hairfront.png"}}}	
	],
	bubble:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curlyshort-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/bubble-hairfront.png"}}}	
	],
	fountain:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/fountain-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spikedown-hairfront.png"}}}	
	],
	rounded:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/rounded-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spikedown-hairfront.png"}}}	
	],
	longflat:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/longflat-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/side-hairfront.png"}}}	
	],
	hightail:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/hightail-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/side-hairfront.png"}}}	
	],
	shaved:[
		{withid:"hairback",stencil:{skip:true}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/shaved-hairfront.png"}}}	
	],
	few:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/flat-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spikyshaved-hairfront.png"}}}	
	],
	rebel:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/rebel-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curvesides-hairfront.png"}}}	
	],
	rebelshort:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/rebelshort-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/curvesides-hairfront.png"}}}	
	],
	shorteye:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/flatshort-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/longeye-hairfront.png"}}}	
	],
	shortwave:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/fountain-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/wave-hairfront.png"}}}	
	],
	diagonal:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/diagonal-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/spiky-hairfront.png"}}}	
	],
	movedwave:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/moved-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/wave-hairfront.png"}}}	
	],
	classic:[
		{withid:"hairback",stencil:{skip:false,attributes:{src:"%server%cels/hairs/classic-hairback.png"}}},
		{withid:"hairfront",stencil:{skip:false,attributes:{src:"%server%cels/hairs/behind-hairfront.png"}}}	
	]
};

stencils.basicmaneyes={
	brightlong:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/brightlong-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/brightlong-righteye.png"}}}	
	],
	good:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/good-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/good-righteye.png"}}}	
	],
	girllong:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/girllong-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/girllong-righteye.png"}}}	
	],
	small:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/small-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/small-righteye.png"}}}	
	],
	tiny:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/tiny-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/tiny-righteye.png"}}}	
	],
	foxy:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/foxy-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/foxy-righteye.png"}}}	
	],
	curvy:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/curvy-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/curvy-righteye.png"}}}	
	],
	goodgirl:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/goodgirl-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/goodgirl-righteye.png"}}}	
	],
	goodlight:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/goodlight-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/goodlight-righteye.png"}}}	
	],
	reverted:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/reverted-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/reverted-righteye.png"}}}	
	],
	closed:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/closed-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/closed-righteye.png"}}}	
	],
	suregirl:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/suregirl-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/suregirl-righteye.png"}}}	
	],
	goodboy:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/goodboy-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/goodboy-righteye.png"}}}	
	],
	adult:[
		{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/adult-lefteye.png"}}},
		{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/eyes/adult-righteye.png"}}}	
	]
}


stencils.basicmanfaceextras={
	mole:[
		{withid:"faceextras",stencil:{skip:false,attributes:{src:"%server%cels/extras/faceextras-mole.png"}}}	
	],
	line:[
		{withid:"faceextras",stencil:{skip:false,attributes:{src:"%server%cels/extras/faceextras-line.png"}}}	
	]
};	

stencils.basicmanfaceactions={
	smoking:[
		{withid:"faceaction",stencil:{skip:false,attributes:{src:"%server%cels/faceactions/faceaction-smoking.png"}}}	
	]
};	

stencils.basicmanbeard={
	goateemustaches:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-goateemustaches.png"}}}	
	],
	wild:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-wild.png"}}}	
	],	
	fulllight:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-fulllight.png"}}}	
	],
	shaved:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-shaved.png"}}}	
	],
	jazzy:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-jazzy.png"}}}	
	],
	perfect:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-perfect.png"}}}	
	],
	markedgoatee:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-markedgoatee.png"}}}	
	],
	markedgoateemustaches:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-markedgoateemustaches.png"}}}	
	],
	fearless:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-fearless.png"}}}	
	],
	dotted:[
		{withid:"beard",stencil:{skip:false,attributes:{src:"%server%cels/beard/beard-dotted.png"}}}	
	]
};

stencils.basicmanfaces={
	slim:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/slim-face.png"}}}	
	],
	pointy:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/pointy-face.png"}}}	
	],
	longface:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/long-face.png"}}}	
	],
	round:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/round-face.png"}}}	
	],
	squared:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/squared-face.png"}}}	
	],
	chin:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/chin-face.png"}}}	
	],
	shortface:[
		{withid:"face",stencil:{skip:false,attributes:{src:"%server%cels/faces/short-face.png"}}}	
	]
};

stencils.basicmannoses={
	longnose:[
		{withid:"nose",stencil:{skip:false,attributes:{src:"%server%cels/noses/long-nose.png"}}}	
	],
	pointy:[
		{withid:"nose",stencil:{skip:false,attributes:{src:"%server%cels/noses/pointy-nose.png"}}}	
	],
	longpoint:[
		{withid:"nose",stencil:{skip:false,attributes:{src:"%server%cels/noses/longpoint-nose.png"}}}	
	]
};

// Mood

stencils.basicmanmoodeyes={
	"evil eyes":{
		name:"Evil eyes",
		category:"Mood (eyes)",
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/raging-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/raging-righteye.png"}}}		
		]
	},
	"happy eyes":{
		name:"Happy eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/happy-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/happy-righteye.png"}}}
		]
	},
	"sadic eyes":{
		name:"Sadic eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/sadic-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/sadic-righteye.png"}}}
		]
	},
	"rolling eyes":{
		name:"Rolling eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/rolling-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/rolling-righteye.png"}}}
		]
	},
	"shocked eyes":{
		name:"Shocked eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/shocked-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/shocked-righteye.png"}}}
		]
	},
	"frustrated eyes":{
		name:"Frustrated eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/frustrated-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/frustrated-righteye.png"}}}
		]
	},
	"busted eyes":{
		name:"Busted eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/busted-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/busted-righteye.png"}}}
		]
	},
	"shiny eyes":{
		name:"Shiny eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/shiny-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/shiny-righteye.png"}}}
		]
	},
	"dollar eyes":{
		name:"Dollar eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/dollar-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/dollar-righteye.png"}}}
		]
	},	
	"heart eyes":{
		name:"Heart eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/heart-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/heart-righteye.png"}}}
		]
	},
	"star eyes":{
		name:"Star eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/star-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/star-righteye.png"}}}
		]
	},
	"depressed eyes":{
		name:"Depressed eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/depressed-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/depressed-righteye.png"}}}
		]
	},
	"absent eyes":{
		name:"Absent eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/absent-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/absent-righteye.png"}}}
		]
	},
	"stray eyes":{
		name:"Stray eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/stray-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/stray-righteye.png"}}}
		]
	},
	"closed eyes":{
		name:"Closed eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/closed-lefteye.png"}}},
			{withid:"righteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/closed-righteye.png"}}}
		]
	},
	"winking":{
		name:"Winking",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:false,attributes:{src:"%server%cels/moods/closed-lefteye.png"}}}
		]
	},
	"no eyes":{
		name:"No eyes",
		category:"Mood (eyes)",			
		stencils:[
			{withid:"lefteye",stencil:{skip:true}},
			{withid:"righteye",stencil:{skip:true}}
		]
	}
}

stencils.basicmanmoodmouth={
	"spiky smile":{
		name:"Raging smile",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/raging-mouth.png"}}}
		]
	},
	"smiling":{
		name:"Smiling",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/happy-mouth.png"}}}
		]
	},
	"sadic smile":{
		name:"Sadic smile",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/sadic-mouth.png"}}}
		]
	},
	"unsure mouth":{
		name:"Unsure mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/unsure-mouth.png"}}}
		]
	},
	"shocked mouth":{
		name:"Shocked mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/shocked-mouth.png"}}}
		]
	},
	"snobbish mouth":{
		name:"Snobbish mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/snobbish-mouth.png"}}}
		]
	},
	"busted mouth":{
		name:"Busted mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/busted-mouth.png"}}}
		]
	},
	"squezed mouth":{
		name:"Snobbish mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/squezed-mouth.png"}}}
		]
	},
	"feline mouth":{
		name:"Feline mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/feline-mouth.png"}}}
		]
	},
	"vampire mouth":{
		name:"Vampire mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/vampire-mouth.png"}}}
		]
	},
	"surprised mouth":{
		name:"Surprised mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/surprised-mouth.png"}}}
		]
	},
	"evil smile":{
		name:"Evil smile",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/evil-mouth.png"}}}
		]
	},
	"starving mouth":{
		name:"Starving smile",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/starving-mouth.png"}}}
		]
	},
	"little smile":{
		name:"Little smile",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/littlesmile-mouth.png"}}}
		]
	},
	"serious mouth":{
		name:"Serious mouth",
		category:"Mood (mouth)",
		stencils:[
			{withid:"mouth",stencil:{skip:false,attributes:{src:"%server%cels/moods/serious-mouth.png"}}}
		]
	}
}

stencils.basicmanmoodextras={
	"angry head":{
		name:"Angry head",
		category:"Mood (extras)",
		stencils:[
			{withid:"headmood",stencil:{skip:false,attributes:{src:"%server%cels/moods/angry-mood.png"}}}
		]
	},
	"blushing face":{
		name:"Blushing face",
		category:"Mood (extras)",
		stencils:[
			{withid:"facemood",stencil:{skip:false,attributes:{src:"%server%cels/moods/blush-mood.png"}}}
		]
	},
	"scared face":{
		name:"Scared face",
		category:"Mood (extras)",
		stencils:[
			{withid:"facemood",stencil:{skip:false,attributes:{src:"%server%cels/moods/scared-mood.png"}}}
		]
	},
	"ghostly head":{
		name:"Ghostly head",
		category:"Mood (extras)",
		stencils:[
			{withid:"headmood",stencil:{skip:false,attributes:{src:"%server%cels/moods/ghostly-mood.png"}}}
		]
	},
	"hurt head":{
		name:"Hurt head",
		category:"Mood (extras)",
		stencils:[
			{withid:"headmood",stencil:{skip:false,attributes:{src:"%server%cels/moods/hurt-mood.png"}}}
		]
	},
	"cheeky face":{
		name:"Cheeky face",
		category:"Mood (extras)",
		stencils:[
			{withid:"facemood",stencil:{skip:false,attributes:{src:"%server%cels/moods/cheeks-mood.png"}}}
		]
	},
	"crying":{
		name:"Crying",
		category:"Mood (extras)",
		stencils:[
			{withid:"facemood",stencil:{skip:false,attributes:{src:"%server%cels/moods/crying-mood.png"}}}
		]
	},
	"sweating":{
		name:"Sweating",
		category:"Mood (extras)",
		stencils:[
			{withid:"headmood",stencil:{skip:false,attributes:{src:"%server%cels/moods/sweating-mood.png"}}}
		]
	},
	"embarassed head":{
		name:"Embarassed head",
		category:"Mood (extras)",
		stencils:[
			{withid:"headmood",stencil:{skip:false,attributes:{src:"%server%cels/moods/embarassed-mood.png"}}}
		]
	}
};

stencils.basicmanmood={
	"raging":{
		name:"Raging",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["spiky smile"].stencils,
			stencils.basicmanmoodeyes["evil eyes"].stencils,
			stencils.basicmanmoodextras["angry head"].stencils,
		])
	},
	"happy":{
		name:"Happy",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["smiling"].stencils,
			stencils.basicmanmoodeyes["happy eyes"].stencils
		])
	},
	"sadic":{
		name:"Sadic",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["sadic smile"].stencils,
			stencils.basicmanmoodeyes["sadic eyes"].stencils
		])
	},
	"panic":{
		name:"Panic",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["unsure mouth"].stencils,
			stencils.basicmanmoodeyes["rolling eyes"].stencils
		])
	},
	"stunned":{
		name:"Stunned",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["sadic smile"].stencils,
			stencils.basicmanmoodeyes["rolling eyes"].stencils
		])
	},
	"shocked":{
		name:"Shocked",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["shocked mouth"].stencils,
			stencils.basicmanmoodeyes["shocked eyes"].stencils
		])
	},
	"poker face":{
		name:"Poker face",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["sadic smile"].stencils,
			stencils.basicmanmoodeyes["shocked eyes"].stencils
		])
	},
	"frustrated":{
		name:"Frustrated",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["snobbish mouth"].stencils,
			stencils.basicmanmoodeyes["frustrated eyes"].stencils
		])
	},
	"busted":{
		name:"Busted",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["busted mouth"].stencils,
			stencils.basicmanmoodeyes["busted eyes"].stencils
		])
	},
	"lovely":{
		name:"Lovely",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["feline mouth"].stencils,
			stencils.basicmanmoodeyes["shiny eyes"].stencils,
			stencils.basicmanmoodextras["cheeky face"].stencils,
		])
	},
	"avaricious":{
		name:"Avaricious",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["feline mouth"].stencils,
			stencils.basicmanmoodeyes["dollar eyes"].stencils
		])
	},
	"evil plan":{
		name:"Challenged",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["evil smile"].stencils,
			stencils.basicmanmoodeyes["star eyes"].stencils
		])
	},
	"depressed":{
		name:"Depressed",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["busted mouth"].stencils,
			stencils.basicmanmoodeyes["depressed eyes"].stencils
		])
	},
	"surprised":{
		name:"Depressed",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["surprised mouth"].stencils,
			stencils.basicmanmoodeyes["absent eyes"].stencils
		])
	},
	"starving":{
		name:"Starving",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["starving mouth"].stencils,
			stencils.basicmanmoodeyes["depressed eyes"].stencils
		])
	},
	"excited":{
		name:"Excited",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["starving mouth"].stencils,
			stencils.basicmanmoodeyes["sadic eyes"].stencils,
			stencils.basicmanmoodextras["blushing face"].stencils
		])
	},
	"in love":{
		name:"In love",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["little smile"].stencils,
			stencils.basicmanmoodeyes["heart eyes"].stencils,
			stencils.basicmanmoodextras["blushing face"].stencils
		])
	},
	"proud":{
		name:"Proud",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["little smile"].stencils,
			stencils.basicmanmoodeyes["sadic eyes"].stencils
		])
	},
	"very proud":{
		name:"Proud",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["shocked mouth"].stencils,
			stencils.basicmanmoodeyes["sadic eyes"].stencils
		])
	},
	"stray":{
		name:"Stray",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["surprised mouth"].stencils,
			stencils.basicmanmoodeyes["stray eyes"].stencils
		])
	},
	"scary":{
		name:"Scary",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["surprised mouth"].stencils,
			stencils.basicmanmoodeyes["no eyes"].stencils,
			stencils.basicmanmoodextras["scared face"].stencils,
		])
	},
	"possessed":{
		name:"Possessed",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["serious mouth"].stencils,
			stencils.basicmanmoodeyes["absent eyes"].stencils,
			stencils.basicmanmoodextras["scared face"].stencils,
			stencils.basicmanmoodextras["ghostly head"].stencils,
		])
	},
	"serious":{
		name:"Serious",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["serious mouth"].stencils,
			stencils.basicmanmoodeyes["closed eyes"].stencils
		])
	},
	"hurt":{
		name:"Hurt",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["surprised mouth"].stencils,
			stencils.basicmanmoodeyes["sadic eyes"].stencils,
			stencils.basicmanmoodextras["crying"].stencils,
			stencils.basicmanmoodextras["hurt head"].stencils
		])
	},
	"worried":{
		name:"Worried",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["unsure mouth"].stencils,
			stencils.basicmanmoodeyes["closed eyes"].stencils,
			stencils.basicmanmoodextras["sweating"].stencils
		])
	},
	"embarassed":{
		name:"Embarassed",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["little smile"].stencils,
			stencils.basicmanmoodeyes["happy eyes"].stencils,
			stencils.basicmanmoodextras["embarassed head"].stencils
		])
	},
	"very embarassed":{
		name:"Embarassed",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["little smile"].stencils,
			stencils.basicmanmoodeyes["happy eyes"].stencils,
			stencils.basicmanmoodextras["embarassed head"].stencils,
			stencils.basicmanmoodextras["blushing face"].stencils,
			stencils.basicmanmoodextras["sweating"].stencils,
		])
	},
	"sad":{
		name:"Sad",
		category:"Mood",
		stencils:comicgenerator.appendStencils([
			stencils.basicmanmoodmouth["serious mouth"].stencils,
			stencils.basicmanmoodeyes["depressed eyes"].stencils,
			stencils.basicmanmoodextras["blushing face"].stencils,
		])
	}
}

// Puppets

// GLOBAL balloon
stencils.balloon={element:"div",css:{overflow:"hidden",borderRadius:"5px",MozBorderRadius:"5px",WebkitBorderRadius:"5px",OBorderRadius:"5px",fontFamily:"ActionManRegular",width:"100px",borderWidth:"1px",borderStyle:"solid",borderColor:"#000000",backgroundColor:"#ffffff",padding:"3px",marginLeft:"10px",marginRight:"0px",marginTop:"0px",marginBottom:"0px",fontSize:"12px",lineHeight:"11px",color:"#000000"},attributes:{innerHTML:"..."}};


var puppets={
	panel:{
		attributes:{
			// --- SPECIAL
			"image aligned":{
				category:"Special",
				notes:"Uses an external image as background.",
				argument:[
					{
						description:"Background alignment",
						key:"custombackgroundalignment",
						defaultvalue:"center",
						map:{
							"left":"left center",
							"right":"right center",
							"top":"center top",
							"center":"center center",
							"bottom":"center bottom",
							"left-top":"left top",
							"left-bottom":"left bottom",
							"right-top":"right top",
							"right-bottom":"right bottom"
						}
					},
					{
						description:"Background repeat",
						key:"custombackgroundrepeat",
						defaultvalue:"single",
						map:{
							"tiled":"repeat",
							"tiled-horizontally":"repeat-x",
							"tiled-vertically":"repeat-y",
							"single":"no-repeat"
						}
					},
					{
						description:"URL of the background",
						key:"custombackgroundimage",
						defaultvalue:"#"
					},
				],
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundRepeat:"%custombackgroundrepeat%",backgroundPosition:"%custombackgroundalignment%",backgroundImage:"url('%custombackgroundimage%')"}}}
				]
			},
			// Default size
			"very thin":{
				category:"Default size",
				name:"Very thin",
				stencils:[
					{withid:"container-panel",stencil:{css:{minWidth:"10px"}}}
				]
			},
			"thin":{
				category:"Default size",
				name:"Thin",
				stencils:[
					{withid:"container-panel",stencil:{css:{minWidth:"30px"}}}
				]
			},
			"large":{
				category:"Default size",
				name:"Large",
				stencils:[
					{withid:"container-panel",stencil:{css:{minWidth:"156px"}}}
				]
			},
			"very large":{
				category:"Default size",
				name:"Very large",
				stencils:[
					{withid:"container-panel",stencil:{css:{minWidth:"256px"}}}
				]
			},
			// --- EFFECTS
			"dark":{
				category:"Effects",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundColor:"#999999"}}}
				]
			},
			// --- SETTINGS
			"office":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/office-background.png')"}}}
				]
			},
			"seaside":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/seaside-background.png')"}}}
				]
			},
			"mountain":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/mountain-background.png')"}}}
				]
			},
			"city":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/city-background.png')"}}}
				]
			},
			"night":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/night-background.png')"}}}
				]
			},
			"corridor":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/corridor-background.png')"}}}
				]
			},
			"desert":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/desert-background.png')"}}}
				]
			},
			"bar":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/bar-background.png')"}}}
				]
			},
			"crowded":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/crowded-background.png')"}}}
				]
			},
			"metro":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/metro-background.png')"}}}
				]
			},
			"train":{
				category:"Setting",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/train-background.png')"}}}
				]
			},
			// -- Moods
			"panic":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/panic-background.png')",backgroundPosition:"center"}}}
				]
			},
			"despair":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/despair-background.png')"}}}
				]
			},
			"confusion":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/confusion-background.png')"}}}
				]
			},
			"lovely":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/lovely-background.png')"}}}
				]
			},
			"passion":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/passion-background.png')"}}}
				]
			},
			"hypnotic":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/hypnotic-background.png')",backgroundPosition:"center"}}}
				]
			},
			"surprised":{
				category:"Mood",
				stencils:[
					{withid:"container-panel",stencil:{css:{backgroundImage:"url('%server%cels/panels/surprised-background.png')",backgroundPosition:"center"}}}
				]
			},
			// --- SPECIAL
			"another":{
				category:"Special",
				notes:"Uses the same attributes of the previous panel.",
				action:function(positions) {
					var mynode=comicgenerator.getObjectFromPositions(positions,1);
					var panels=comicgenerator.getObjectFromPositions(positions,4);
					var mypanel=comicgenerator.getPositionFromPositions(positions,3);
					var me=comicgenerator.getObjectFromPositions(positions,3);
					if (mypanel>0)
						for (var i=0;i<panels[mypanel-1].adjectives.length;i++)
							me.adjectives.push(panels[mypanel-1].adjectives[i]);
					comicgenerator.deleteNode(mynode);
				}
			}
		}
	},
	verbs:{
		says:{
			category:"Talking",
			name:"Says",
			side:"right",
			point:"left",
			stencils:[
				{id:"balloon-text",translatable:true,innerHTML:"phrase",stencil:stencils.balloon},
				{id:"arrow",stencil:{element:"div",css:{fontSize:"0px",lineHeight:"0%",width:"0px",borderTop:"10px solid #000000",borderRight:"10px solid rgba(0,0,0,0)",margin:"0px 0px 5px 15px"}}}
			],
			attributes:comicgenerator.joinStencils([
				stencils.balloonattributes,
				{
					"to self":{
						category:"Volume",
						name:"To self",
						stencils:[
							{withid:"balloon-text",stencil:{css:{width:"math:*0.6",WebkitTransform:"rotate(-20deg)",MozTransform:"rotate(-20deg)",OTransform:"rotate(-20deg)",transform:"rotate(-20deg)",fontSize:"math:-1",borderWidth:null,borderColor:null,borderStyle:null,textAlign:"left",marginLeft:"15px",marginBottom:"10px"}}},
							{withid:"arrow",stencil:{skip:true}}
						]
					}
				}
			])
		},
		replies:{
			category:"Talking",
			name:"Replies",
			side:"left",
			stencils:[
				{id:"balloon-text",translatable:true,innerHTML:"phrase",stencil:stencils.balloon},
				{id:"arrow",stencil:{element:"div",css:{fontSize:"0px",lineHeight:"0%",width:"0px",borderTop:"10px solid #000000",borderLeft:"10px solid rgba(0,0,0,0)",margin:"0px 0px 5px 95px"}}}
			],
			attributes:comicgenerator.joinStencils([
				stencils.balloonattributes,
				{
					"to self":{
						category:"Volume",
						name:"To self",
						stencils:[
							{withid:"balloon-text",stencil:{css:{width:"math:*0.6",WebkitTransform:"rotate(20deg)",MozTransform:"rotate(20deg)",OTransform:"rotate(20deg)",transform:"rotate(20deg)",fontSize:"math:-1",borderWidth:"0px",borderColor:null,borderStyle:null,textAlign:"right",marginBottom:"10px",marginLeft:"42px"}}},
							{withid:"arrow",stencil:{skip:true}}
						]
					}
				}
			])
		}
	},
	persons:{}
};

// Neck accessories

stencils.basicmanunisexneckaccessories={
	"tie":{
		name:"With a tie",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-tie.png"}}}
		]
	},
	"dark tie":{
		name:"With a dark tie",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-darktie.png"}}}
		]
	},
	"papillon":{
		name:"With a papillon",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-papillon.png"}}}
		]
	},
	"dark papillon":{
		name:"With a dark papillon",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-darkpapillon.png"}}}
		]
	},
	"necklace":{
		name:"With a necklace",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-necklace.png"}}}
		]
	},
	"long necklace":{
		name:"With a long necklace",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-longnecklace.png"}}}
		]
	},
	"rapper necklace":{
		name:"With a rapper necklace",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-rappernecklace.png"}}}
		]
	},
	"scarf":{
		name:"With a scarf",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-scarf.png"}}}
		]
	},
	"dark scarf":{
		name:"With a dark scarf",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-darkscarf.png"}}}
		]
	},
	"crucifix":{
		name:"With a crucifix",
		category:"Neck",
		stencils:[
			{withid:"neck",stencil:{skip:false,attributes:{src:"%server%cels/accessories/neckaccessories-crucifix.png"}}}
		]
	}
}

// Dresses
stencils.basicmanunisexdresses={
	"shirt":{
		name:"With a shirt",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-shirt.png"}}}
		]
	},
	"t-shirt":{
		name:"With a t-shirt",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-tshirt.png"}}}
		]
	},
	"sweater":{
		name:"With a sweater",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-sweater.png"}}}
		]
	},
	"jacket":{
		name:"With a jacket",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-jacket.png"}}}
		]
	},
	"white jacket":{
		name:"With a white jacket",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-whitejacket.png"}}}
		]
	},
	"salopette":{
		name:"With a salopette",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-salopette.png"}}}
		]
	},
	"white salopette":{
		name:"With a white salopette",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-whitesalopette.png"}}}
		]
	}
};

// Eye accessories	
	
stencils.basicmanunisexeyeaccessories={
	"glasses":{
		name:"With glasses",
		category:"Eyes",
		stencils:[
			{withid:"eyesaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/eyesaccessories-glasses.png"}}}	
		]
	},
	"filled glasses":{
		name:"With filled glasses",
		category:"Eyes",
		stencils:[
			{withid:"eyesaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/eyesaccessories-filledglasses.png"}}}	
		]
	},
	"sunglasses":{
		name:"With sunglasses",
		category:"Eyes",
		stencils:[
			{withid:"eyesaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/eyesaccessories-sunglasses.png"}}}	
		]
	}
};

// Mouth accessories

stencils.basicmanunisexmouthaccessories={	
	"cigarette":{
		name:"With cigarette",
		category:"Mouth",
		stencils:[
			{withid:"mouthaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/mouthaccessories-cigarette.png"}}}	
		]
	}
};

// Head accessories
stencils.basicmanunisexheadaccessories={	
	"winter hat":{
		name:"Witn a winter hat",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-winterhat.png"}}},
			{withid:"hairback",stencil:{css:{top:"math:+20"}}}	
		]
	},
	"top hat":{
		name:"With a top hat",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-tophat.png"}}},
			{withid:"hairback",stencil:{css:{top:"math:+13"}}}	
		]
	},
	"bandana":{
		name:"With a bandana",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-bandana.png"}}}	
		]
	},
	"dark bandana":{
		name:"With a dark bandana",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-darkbandana.png"}}}	
		]
	},
	"dotted bandana":{
		name:"With a dotted bandana",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-dottedbandana.png"}}}	
		]
	},
	"belt":{
		name:"With a belt",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-belt.png"}}}	
		]
	},
	"japanese belt":{
		name:"With a japanese belt",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-japanesebelt.png"}}}	
		]
	},
	"dark belt":{
		name:"With a dark belt",
		category:"Head",
		stencils:[
			{withid:"headaccessory",stencil:{skip:false,attributes:{src:"%server%cels/accessories/headaccessories-darkbelt.png"}}}	
		]
	}

};

// Male dresses

stencils.basicmanmaledresses={
	"underwear":{
		name:"In underwear",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-boyunderwear.png"}}}
		]
	},
	"dark underwear":{
		name:"In dark underwear",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-boydarkunderwear.png"}}}
		]
	}
};

// Female dresses

stencils.basicmanfemaledresses={
	"collar dressed":{
		name:"Collar dressed",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girlcollar.png"}}}
		]
	},
	"simple dressed":{
		name:"Simple dressed",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girlsimple.png"}}}
		]
	},
	"simple dressed":{
		name:"Simple dressed",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girlsimple.png"}}}
		]
	},
	"wide-collar dressed":{
		name:"Wide-collar dressed",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girlwidecollar.png"}}}
		]
	},
	"very-collar dressed":{
		name:"Very-collar dressed",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girlverycollar.png"}}}
		]
	},
	"underwear":{
		name:"In underwear",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girlunderwear.png"}}}
		]
	},
	"dark underwear":{
		name:"In dark underwear",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-girldarkunderwear.png"}}}
		]
	},
	"blouse":{
		name:"With a blouse",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-blouse.png"}}}
		]
	},
	"dark blouse":{
		name:"With a dark blouse",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-darkblouse.png"}}}
		]
	},
	"striped blouse":{
		name:"With a striped blouse",
		category:"Dress",
		stencils:[
			{withid:"body",stencil:{skip:false,attributes:{src:"%server%cels/dresses/dress-stripedblouse.png"}}}
		]
	}
};

// SPECIALS

stencils.basicmanspecials={
	"looking up":{
		name:"Looking up",
		category:"Position",			
		stencils:[
			{withid:"head",stencil:{css:{top:"math:-5"}}},
			{withid:"inface",stencil:{css:{top:"math:-5"}}},
			{withid:"mouth",stencil:{css:{top:"math:-1"}}},
			{withid:"beard",stencil:{css:{top:"math:-4"}}},
			{withid:"headaccessory",stencil:{css:{top:"math:-4"}}}
		]
	},
	"looking down":{
		name:"Looking down",
		category:"Position",			
		stencils:[
			{withid:"head",stencil:{css:{top:"math:+2"}}},
			{withid:"inface",stencil:{css:{top:"math:+5"}}},
			{withid:"hairback",stencil:{css:{top:"math:-2"}}},
			{withid:"mouth",stencil:{css:{top:"math:-2"}}},
			{withid:"beard",stencil:{css:{width:"65px",height:"50px",left:"math:+2",top:"math:+18px"}}},
			{withid:"headaccessory",stencil:{css:{top:"math:+4"}}}
		]
	},
	"looking right":{
		name:"Looking right",
		category:"Position",			
		stencils:[
			{withid:"inface",stencil:{css:{left:"math:+5"}}},
			{withid:"hairback",stencil:{css:{left:"math:-2"}}},
			{withid:"mouth",stencil:{css:{left:"math:-3"}}},
			{withid:"righteye",stencil:{css:{width:"25px",height:"50px",left:"math:+3"}}},
			{withid:"nose",stencil:{css:{left:"math:+3"}}}
		]
	},
	"looking left":{
		name:"Looking left",
		category:"Position",			
		stencils:[
			{withid:"inface",stencil:{css:{left:"math:-5"}}},
			{withid:"hairback",stencil:{css:{left:"math:+2"}}},
			{withid:"mouth",stencil:{css:{left:"math:+2"}}},
			{withid:"lefteye",stencil:{css:{width:"25px",height:"50px",left:"math:+7"}}},
			{withid:"nose",stencil:{css:{left:"math:-3"}}}
		]
	},
	"far":{
		name:"Far",
		category:"Position",			
		stencils:[
			{withid:"container-innerbox",stencil:{css:{MozTransform:"scale(0.5,0.5)",WebkitTransform:"scale(0.5,0.5)",OTransform:"scale(0.5,0.5)",transform:"scale(0.5,0.5)",bottom:"math:+1"}}},
			{withid:"container-outerbox",stencil:{css:{width:"math:*0.8"}}}
		]
	},
	"shrug":{
		name:"Shrug",
		category:"Position",			
		stencils:[
			{withid:"head",stencil:{css:{top:"math:+8"}}},
		]
	},
	"vanishing":{
		name:"Vanishing",
		category:"Special",			
		stencils:[
			{withid:"container-innerbox",stencil:{css:{opacity:"0.5",MozOpacity:"0.5",WebkitOpacity:"0.5",OOpacity:"0.5"}}},
		]
	},
	"invisible":{
		name:"Invisible",
		category:"Special",			
		stencils:[
			{withid:"all",stencil:{skip:true}},
		]
	},
	"outfield":{
		name:"Outfield",
		category:"Special",			
		stencils:[
			{withid:"container-innerbox",stencil:{css:{MozTransform:"scale(0.7,0.7) rotate(10deg)",WebkitTransform:"scale(0.7,0.7) rotate(10deg)",OTransform:"scale(0.7,0.7) rotate(10deg)",transform:"scale(0.7,0.7) rotate(10deg)",bottom:null,top:"-30px",left:"5px",width:"math:*0.5"}}},
			{withid:"container-outerbox",stencil:{css:{width:"math:*0.7"}}},		
			{withid:"backstencil",stencil:{skip:false,css:{backgroundColor:"#888888",borderRadius:"45px",MozBorderRadius:"45px",WebkitBorderRadius:"45px",OBorderRadius:"45px",width:"90px",height:"90px",left:"2px",top:"21px",borderWidth:"1px",borderStyle:"solid",borderColor:"#000000"}}},		
			{withid:"trunk",stencil:{skip:true}}
		]
	},
	"same":{
		name:"Same",
		category:"Special",
		notes:"Uses the same attributes of the previous time the character has been shown.",
		action:function(positions) {
			var mynode=comicgenerator.getObjectFromPositions(positions,1);
			var me=comicgenerator.getObjectFromPositions(positions,3);
			var panels=comicgenerator.getObjectFromPositions(positions,6);
			var found=false;
			for (var i=panels.length-2;i>=0;i--) {
				for (var j=0;j<panels[i].story.length;j++) {
					if (panels[i].story[j].subject.ref==me.subject.ref) {
						for (var t=0;t<panels[i].story[j].adjectives.length;t++)
							me.adjectives.push(panels[i].story[j].adjectives[t]);
						found=true;
						break;
					}
					if (found) break;
				}
				if (found) break;
			}
			comicgenerator.deleteNode(mynode);
		}
	},
	"like":{
		name:"Like",
		category:"Special",
		notes:"Uses the same attributes of another character",
		argument:[
			{
				key:"other",
				description:"The other character",
				defaultvalue:"none"
			}
		],
		action:function(positions) {
			// Note that we're copying from different characters, so we must link the subject related
			// attribute instead of relinking the attributes of the source of the copy, since if
			// "A" is in underwear and female and "B" is "like A", his "underwear" is a little different :)
			var copyfrom;
			var mynode=comicgenerator.getObjectFromPositions(positions,1);
			if (positions[1]=="premise") { // In the premise phase, copies the elements into premise
				var premise=comicgenerator.getObjectFromPositions(positions,4);
				for (var i=0;i<premise.length;i++)
					if (premise[i].subject.id===mynode.arg.other) {
						copyfrom=premise[i].adjectives;
						break;
					}
			} else { // Single phrases parses the panels
				var panels=comicgenerator.getObjectFromPositions(positions,6);
				for (var i=panels.length-1;i>=0;i--) {
					for (var j=0;j<panels[i].story.length;j++) {
						if (panels[i].story[j].subject.id==mynode.arg.other) {
							copyfrom=panels[i].story[j].adjectives;
							break;
						}
					}
					if (copyfrom) break;
				}
			}
			if (copyfrom) {
				var me=comicgenerator.getObjectFromPositions(positions,3);
				var aid;
				for (var t=0;t<copyfrom.length;t++) {
					aid=copyfrom[t].id;
					if (me.subject.ref.attributes[aid])
						me.adjectives.push({id:aid,ref:me.subject.ref.attributes[aid],arg:copyfrom[t].arg});
				}
			}
			comicgenerator.deleteNode(mynode);
		}
	}
};

// HANDS
stencils.basicmanhands={
	"having lunch":{
		name:"Having lunch",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-havinglunch.png"}}}
		]
	},
	"playing wii":{
		name:"Playing wii",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-playingwii.png"}}}
		]
	},
	"using pc":{
		name:"Using PC",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-usingpc.png"}}}
		]
	},
	"using mac":{
		name:"Using Mac",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-usingmac.png"}}}
		]
	},
	"playing videogames":{
		name:"Playing videogames",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-playingvideogames.png"}}}
		]
	},
	"with mug":{
		name:"With mug",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-withmug.png"}}}
		]
	},
	"with glass":{
		name:"With glass",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-withglass.png"}}}
		]
	},
	"with blocknotes":{
		name:"With blocknotes",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-withblocknotes.png"}}}
		]
	},
	"using tablet":{
		name:"Using tablet",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-usingtablet.png"}}}
		]
	},
	"using phone":{
		name:"Using phone",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-usingphone.png"}}}
		]
	},
	"punching":{
		name:"Punching",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-punching.png"}}}
		]
	},
	"claw hands":{
		name:"With claw hands",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-claw.png"}}}
		]
	},
	"joined hands":{
		name:"With joined hands",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-joined.png"}}}
		]
	},
	"middle finger":{
		name:"With middle finger",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-middlefinger.png"}}}
		]
	},
	"thumbs up":{
		name:"With thumbs up",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-thumbsup.png"}}}
		]
	},
	"thumb up":{
		name:"With thumb up",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-thumbup.png"}}}
		]
	},
	"palms":{
		name:"With palms",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-palms.png"}}}
		]
	},
	"punches":{
		name:"With punches",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-punches.png"}}}
		]
	},
	"forefinger":{
		name:"With forefinger",
		category:"Hands",
		stencils:[
			{withid:"hands",stencil:{skip:false,attributes:{src:"%server%cels/hands/hands-forefinger.png"}}}
		]
	}
};

// Basic man
stencils.basicman={
	name:"Basic Unisex Man",
	stencils:[
		// backstencil
		{id:["all","stencils","backstencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Hair (back) 100x140
		{id:["all","head","hairback"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Body 100x140
		{id:["all","trunk","body"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/normal-body.png"}}},
		// Neck (front) 100x140
		{id:["all","trunk","neck"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// face 70x70
		{id:["all","head","face"],stencil:{element:"img",css:{position:"absolute",top:"35px",left:"15px"},attributes:{src:"%server%cels/normal-face.png"}}},
		// Beard 70x70
		{id:["all","head","beard"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Face mood 100x140
		{id:["all","head","inface","facemood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Left eye 35x50
		{id:["all","head","inface","lefteye"],stencil:{element:"img",css:{position:"absolute",top:"35px",left:"15px"},attributes:{src:"%server%cels/normal-lefteye.png"}}},
		// Right eye 35x50
		{id:["all","head","inface","righteye"],stencil:{element:"img",css:{position:"absolute",top:"35px",left:"50px"},attributes:{src:"%server%cels/normal-righteye.png"}}},
		// Mouth 70x35
		{id:["all","head","inface","mouth"],stencil:{element:"img",css:{position:"absolute",top:"70px",left:"15px"},attributes:{src:"%server%cels/normal-mouth.png"}}},
		// Nose 35x35
		{id:["all","head","inface","nose"],stencil:{element:"img",css:{position:"absolute",top:"60px",left:"32px"},attributes:{src:"%server%cels/normal-nose.png"}}},
		// face extras 70x70
		{id:["all","head","inface","faceextras"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Hair (front) 70x70
		{id:["all","head","hairfront"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Head accessory 100x140
		{id:["all","head","headaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// eyes accessory 70x70
		{id:["all","head","inface","eyesaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// mouth accessory 70x70
		{id:["all","head","inface","mouthaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// face action 70x70
		{id:["all","head","inface","faceaction"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Face mood 100x140
		{id:["all","head","inface","headmood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Hands 100x140
		{id:["all","trunk","hands"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/normal-hands.png"}}},
		// forestencils
		{id:["all","stencils","forestencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},		
	],
	attributes:comicgenerator.joinStencils([
		stencils.basicmanmoodeyes,
		stencils.basicmanmoodmouth,
		stencils.basicmanmoodextras,
		stencils.basicmanmood,
		stencils.basicmanspecials,
		stencils.basicmanhands
	]),
	outerbox:stencils.defaultouterbox,
	innerbox:stencils.defaultinnerbox	
};


// Persons

// Basic woman
puppets.persons.man={
	category:"General",
	name:"Man",
	stencils:stencils.basicman.stencils,
	attributes:comicgenerator.joinStencils([
		stencils.basicman.attributes,
		stencils.basicmanunisexdresses,
		stencils.basicmanunisexneckaccessories,
		stencils.basicmanunisexeyeaccessories,
		stencils.basicmanunisexmouthaccessories,
		stencils.basicmanunisexheadaccessories,
		stencils.basicmanmaledresses		
	]),
	outerbox:stencils.basicman.outerbox,
	innerbox:stencils.basicman.innerbox
}

puppets.persons.woman={
	category:"General",
	name:"Woman",
	stencils:stencils.basicman.stencils,
	attributes:comicgenerator.joinStencils([
		stencils.basicman.attributes,
		stencils.basicmanunisexdresses,
		stencils.basicmanunisexneckaccessories,
		stencils.basicmanunisexeyeaccessories,
		stencils.basicmanunisexmouthaccessories,
		stencils.basicmanunisexheadaccessories,
		stencils.basicmanfemaledresses		
	]),
	outerbox:stencils.basicman.outerbox,
	innerbox:stencils.basicman.innerbox
}

// Narrator
puppets.persons.narrator={
	category:"Classic",
	name:"Narrator",
	position:"outfield",
	stencils:[
		{id:"balloon-text",translatable:true,innerHTML:"phrase",stencil:{element:"div",css:{position:"absolute",left:"0px",top:"0px",fontFamily:"ActionManItalic",width:"90px",borderWidth:"0px 1px 1px 0px",borderColor:"#000000",borderStyle:"solid",backgroundColor:"#ffffff",padding:"3px",fontSize:"12px",lineHeight:"11px"}}}
	]
};

// "Someone" (with no body - usually for someone outside from the scene)
puppets.persons.somebody={
	category:"Classic",
	name:"Someone",
	stencils:[],
	attributes:{},
	outerbox:[{id:"container-outerbox",stencil:{element:"div",css:{width:"5px",height:"180px",position:"relative",cssFloat:"left"}}}],
	innerbox:[]
}
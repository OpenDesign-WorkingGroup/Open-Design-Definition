// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---

stencils.consoleextras={
	"unanimated":{
		name:"Unanimated",
		category:"Special",			
		stencils:[
			{withid:"consolebody",stencil:{skip:true}}
		]
	}
};

puppets.persons.xbox360={
	category:"Console war",
	name:"XBox 360",
	stencils:[
		// backstencil
		{id:["all","stencils","backstencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Body 100x140
		{id:["all","console"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/cw/cw-x360.png"}}},
		// Neck (front) 100x140
		{id:["all","consolebody","console","neck"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-13px",left:"8px"}}},		
		// Body 100x140
		{id:["all","consolebody","console","consoleface"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/cw/cw-x360face.png"}}},
		// Face mood 100x140
		{id:["all","consolebody","head","inface","facemood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-20px",left:"5px"}}},
		// Left eye 35x50
		{id:["all","consolebody","head","inface","lefteye"],stencil:{element:"img",css:{position:"absolute",top:"15px",left:"20px"},attributes:{src:"%server%cels/normal-lefteye.png"}}},
		// Right eye 35x50
		{id:["all","consolebody","head","inface","righteye"],stencil:{element:"img",css:{position:"absolute",top:"15px",left:"55px"},attributes:{src:"%server%cels/normal-righteye.png"}}},
		// Mouth 70x35
		{id:["all","consolebody","head","inface","mouth"],stencil:{element:"img",css:{position:"absolute",top:"50px",left:"20px"},attributes:{src:"%server%cels/normal-mouth.png"}}},
		// face extras 70x70
		{id:["all","consolebody","head","inface","faceextras"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"10px"}}},
		// Head accessory 100x140
		{id:["all","consolebody","head","headaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-20px",left:"5px"}}},
		// eyes accessory 70x70
		{id:["all","consolebody","head","inface","eyesaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"15px",left:"25px"}}},
		// mouth accessory 70x70
		{id:["all","consolebody","head","inface","mouthaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"15px",left:"20px"}}},
		// face action 70x70
		{id:["all","consolebody","head","inface","faceaction"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Face mood 100x140
		{id:["all","consolebody","head","inface","headmood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-17px",left:"2px"}}},
		// Hands 100x140
		{id:["all","consolebody","console","consolebody","hands"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"8px"},attributes:{src:"%server%cels/normal-hands.png"}}},
		// forestencils
		{id:["all","stencils","forestencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},		
	],
	attributes:comicgenerator.joinStencils([
		stencils.basicmanmoodeyes,
		stencils.basicmanmoodmouth,
		stencils.basicmanmoodextras,
		stencils.basicmanmood,
		stencils.basicmanspecials,
		stencils.basicmanhands,
		stencils.basicmanunisexneckaccessories,
		stencils.basicmanunisexeyeaccessories,
		stencils.basicmanunisexmouthaccessories,
		stencils.basicmanunisexheadaccessories,		
		stencils.consoleextras
		
	]),
	outerbox:stencils.defaultouterbox,
	innerbox:stencils.defaultinnerbox	
};

puppets.persons.ps3={
	category:"Console war",
	name:"Playstation 3",
	stencils:[
		// backstencil
		{id:["all","stencils","backstencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Body 100x140
		{id:["all","console"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/cw/cw-ps3.png"}}},
		// Neck (front) 100x140
		{id:["all","consolebody","console","neck"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-10px",left:"10px"}}},
		// Body 100x140
		{id:["all","consolebody","console","consoleface"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/cw/cw-ps3face.png"}}},
		// Face mood 100x140
		{id:["all","consolebody","head","inface","facemood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-20px",left:"10px"}}},
		// Left eye 35x50
		{id:["all","consolebody","head","inface","lefteye"],stencil:{element:"img",css:{position:"absolute",top:"15px",left:"25px"},attributes:{src:"%server%cels/normal-lefteye.png"}}},
		// Right eye 35x50
		{id:["all","consolebody","head","inface","righteye"],stencil:{element:"img",css:{position:"absolute",top:"15px",left:"60px"},attributes:{src:"%server%cels/normal-righteye.png"}}},
		// Mouth 70x35
		{id:["all","consolebody","head","inface","mouth"],stencil:{element:"img",css:{position:"absolute",top:"50px",left:"25px"},attributes:{src:"%server%cels/normal-mouth.png"}}},
		// face extras 70x70
		{id:["all","consolebody","head","inface","faceextras"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Head accessory 100x140
		{id:["all","consolebody","head","headaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",width:"80px",height:"112px",top:"-13px",left:"18px"}}},
		// eyes accessory 70x70
		{id:["all","consolebody","head","inface","eyesaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"15px",left:"25px"}}},
		// mouth accessory 70x70
		{id:["all","consolebody","head","inface","mouthaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"15px",left:"25px"}}},
		// face action 70x70
		{id:["all","consolebody","head","inface","faceaction"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Face mood 100x140
		{id:["all","consolebody","head","inface","headmood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"-17px",left:"7px"}}},
		// Hands 100x140
		{id:["all","consolebody","console","consolebody","hands"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"15px"},attributes:{src:"%server%cels/normal-hands.png"}}},
		// forestencils
		{id:["all","stencils","forestencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},		
	],
	attributes:comicgenerator.joinStencils([
		stencils.basicmanmoodeyes,
		stencils.basicmanmoodmouth,
		stencils.basicmanmoodextras,
		stencils.basicmanmood,
		stencils.basicmanspecials,
		stencils.basicmanhands,
		stencils.basicmanunisexneckaccessories,
		stencils.basicmanunisexeyeaccessories,
		stencils.basicmanunisexmouthaccessories,		
		stencils.basicmanunisexheadaccessories,		
		stencils.consoleextras
	]),
	outerbox:stencils.defaultouterbox,
	innerbox:stencils.defaultinnerbox	
};


puppets.persons.wii={
	category:"Console war",
	name:"Wii",
	stencils:[
		// backstencil
		{id:["all","stencils","backstencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Body 100x140
		{id:["all","console"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/cw/cw-wii.png"}}},
		// Neck (front) 100x140
		{id:["all","consolebody","console","neck"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"10px",left:"0px"}}},
		// Body 100x140
		{id:["all","consolebody","console","consoleface"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/cw/cw-wiiface.png"}}},
		// Face mood 100x140
		{id:["all","consolebody","head","inface","facemood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"5px",left:"0px"}}},
		// Left eye 35x50
		{id:["all","consolebody","head","inface","lefteye"],stencil:{element:"img",css:{position:"absolute",top:"40px",left:"15px"},attributes:{src:"%server%cels/normal-lefteye.png"}}},
		// Right eye 35x50
		{id:["all","consolebody","head","inface","righteye"],stencil:{element:"img",css:{position:"absolute",top:"40px",left:"50px"},attributes:{src:"%server%cels/normal-righteye.png"}}},
		// Mouth 70x35
		{id:["all","consolebody","head","inface","mouth"],stencil:{element:"img",css:{position:"absolute",top:"70px",left:"15px"},attributes:{src:"%server%cels/normal-mouth.png"}}},
		// face extras 70x70
		{id:["all","consolebody","head","inface","faceextras"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Head accessory 100x140
		{id:["all","consolebody","head","headaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",width:"80px",height:"112px",top:"15px",left:"8px"}}},
		// eyes accessory 70x70
		{id:["all","consolebody","head","inface","eyesaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"40px",left:"15px"}}},
		// mouth accessory 70x70
		{id:["all","consolebody","head","inface","mouthaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// face action 70x70
		{id:["all","consolebody","head","inface","faceaction"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// Face mood 100x140
		{id:["all","consolebody","head","inface","headmood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"10px",left:"-5px"}}},
		// Hands 100x140
		{id:["all","consolebody","hands"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/normal-hands.png"}}},
		// forestencils
		{id:["all","stencils","forestencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},		
	],
	attributes:comicgenerator.joinStencils([
		stencils.basicmanmoodeyes,
		stencils.basicmanmoodmouth,
		stencils.basicmanmoodextras,
		stencils.basicmanmood,
		stencils.basicmanspecials,
		stencils.basicmanhands,
		stencils.basicmanunisexneckaccessories,
		stencils.basicmanunisexeyeaccessories,
		stencils.basicmanunisexmouthaccessories,
		stencils.basicmanunisexheadaccessories,		
		stencils.consoleextras
	]),
	outerbox:stencils.defaultouterbox,
	innerbox:stencils.defaultinnerbox	
};
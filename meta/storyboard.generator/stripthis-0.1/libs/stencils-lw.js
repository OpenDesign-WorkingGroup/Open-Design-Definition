// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---

stencils.basiclogo={
	stencils:[
		// backstencil
		{id:["all","stencils","backstencil"],stencil:{skip:true,element:"div",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Body 100x140
		{id:["all","logo"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"#"}}},
		// Neck (front) 100x140
		{id:["all","logobody","logo","neck"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"2px"}}},		
		// face 70x70
		{id:["all","logobody","head","logoface"],stencil:{element:"img",css:{position:"absolute",top:"40px",left:"15px"},attributes:{src:"%server%cels/lw/lw-face.png"}}},		
		// Face mood 100x140
		{id:["all","logobody","head","inface","facemood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// Left eye 35x50
		{id:["all","logobody","head","inface","lefteye"],stencil:{element:"img",css:{position:"absolute",top:"35px",left:"15px"},attributes:{src:"%server%cels/normal-lefteye.png"}}},
		// Right eye 35x50
		{id:["all","logobody","head","inface","righteye"],stencil:{element:"img",css:{position:"absolute",top:"35px",left:"50px"},attributes:{src:"%server%cels/normal-righteye.png"}}},
		// Mouth 70x35
		{id:["all","logobody","head","inface","mouth"],stencil:{element:"img",css:{position:"absolute",top:"64px",left:"15px"},attributes:{src:"%server%cels/normal-mouth.png"}}},
		// face extras 70x70
		{id:["all","logobody","head","inface","faceextras"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"55px",left:"5px"}}},
		// Head accessory 100x140
		{id:["all","logobody","head","headaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"0px",left:"0px"}}},
		// eyes accessory 70x70
		{id:["all","logobody","head","inface","eyesaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"35px",left:"15px"}}},
		// mouth accessory 70x70
		{id:["all","logobody","head","inface","mouthaccessory"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"30px",left:"15px"}}},
		// face action 70x70
		{id:["all","logobody","head","inface","faceaction"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"45px",left:"5px"}}},
		// Face mood 100x140
		{id:["all","logobody","head","inface","headmood"],stencil:{skip:true,element:"img",css:{position:"absolute",top:"4px",left:"5px"}}},
		// Hands 100x140
		{id:["all","logobody","hands"],stencil:{element:"img",css:{position:"absolute",top:"0px",left:"0px"},attributes:{src:"%server%cels/normal-hands.png"}}},
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
		{
			"unanimated":{
				name:"Unanimated",
				category:"Special",			
				stencils:[
					{withid:"logobody",stencil:{skip:true}}
				]
			}
		}
	]),
	outerbox:stencils.defaultouterbox,
	innerbox:stencils.defaultinnerbox	
};


puppets.persons.html5={
	category:"Logo Wars",
	name:"HTML5",
	stencils:comicgenerator.mergeStencils([
		stencils.basiclogo.stencils,
		[{withid:"logo",stencil:{attributes:{src:"%server%cels/lw/lw-html5.png"}}}]
	]),
	attributes:stencils.basiclogo.attributes,
	outerbox:stencils.basiclogo.outerbox,
	innerbox:stencils.basiclogo.innerbox	
};

puppets.persons.flash={
	category:"Logo Wars",
	name:"Flash",
	stencils:comicgenerator.mergeStencils([
		stencils.basiclogo.stencils,
		[{withid:"logo",stencil:{attributes:{src:"%server%cels/lw/lw-flash.png"}}}]
	]),
	attributes:stencils.basiclogo.attributes,
	outerbox:stencils.basiclogo.outerbox,
	innerbox:stencils.basiclogo.innerbox
};
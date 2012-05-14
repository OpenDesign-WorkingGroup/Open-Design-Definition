// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---

puppets.persons.kesiev={
	category:"KesieV",
	name:"KesieV",
	stencils:comicgenerator.mergeStencils([
		puppets.persons.man.stencils,
		stencils.basicmanhairs.longtied,
		puppets.persons.man.attributes["filled glasses"].stencils,
		stencils.basicmanbeard.goateemustaches
	]),
	attributes:puppets.persons.man.attributes,
	outerbox:puppets.persons.man.outerbox,
	innerbox:puppets.persons.man.innerbox	
};

puppets.persons.bianca={
	category:"KesieV",
	name:"Bianca",
	stencils:comicgenerator.mergeStencils([
		puppets.persons.woman.stencils,
		stencils.basicmanhairs.longhairs,
		puppets.persons.woman.attributes["glasses"].stencils
	]),
	attributes:puppets.persons.woman.attributes,
	outerbox:puppets.persons.woman.outerbox,
	innerbox:puppets.persons.woman.innerbox
};

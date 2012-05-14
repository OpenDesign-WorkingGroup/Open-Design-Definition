// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---


puppets.persons.kat={
	category:"Community",
	name:"Kat",
	stencils:comicgenerator.mergeStencils([
		puppets.persons.woman.stencils,
		stencils.basicmanfaces.round,		
		stencils.basicmannoses.longnose,
		stencils.basicmanhairs.longflat,
		stencils.basicmaneyes.goodgirl		
	]),
	attributes:puppets.persons.woman.attributes,
	outerbox:puppets.persons.woman.outerbox,
	innerbox:puppets.persons.woman.innerbox
};

puppets.persons.massimo={
	category:"Community",
	name:"Massimo",
stencils:comicgenerator.mergeStencils([
		puppets.persons.man.stencils,		
		stencils.basicmannoses.longnose,
		stencils.basicmanhairs.moved,
		puppets.persons.woman.attributes["glasses"].stencils,
		stencils.basicmaneyes.tiny,
		stencils.basicmanbeard.wild		
	]),
	attributes:puppets.persons.man.attributes,
	outerbox:puppets.persons.man.outerbox,
	innerbox:puppets.persons.man.innerbox};

class PieceView{

	constructor(width, height, color){
		this.width = width;
		this.height = height;
		this.color = color;
	}

	//Display the form of the piece
	//	Param: 
		//	-x, y are the center of the piece

	show(x, y){
		fill(this.color[COLOR.R], this.color[COLOR.G], this.color[COLOR.B]);
		rectMode(CENTER);
		rect(x, y, this.width, this.height);
		point(x, y);
	}
}


var COLOR = {
	R : 0,
	G : 1,
	B : 2,
}

class PieceView{

	constructor(color){
		
		this.color = color;
		this.highLightMode = ADHMODE.NONE;
	}

	//Display the form of the piece
	//	Param: 
		//	-x, y are the center of the piece

	show(x, y, width, height){
		fill(this.color[COLOR.R], this.color[COLOR.G], this.color[COLOR.B]);
		//rectMode(CENTER);
		rect(x, y, width, height);
		point(x, y);
		fill(0);
	}

	setHighlight(mode){
		this.highLightMode = mode;
	}
}
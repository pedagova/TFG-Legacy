class Piece{
	constructor(height, width, x, y){
		this.height = height;
		this.width = width;
		this.x = x;
		this.y = y;
	}	

	show(){
		fill(255, 0, 0);
		rect(this.x, this.y, this.height, this.width);
	}

	mouseOn(){
		return mouseX > this.x && mouseX < this.x + this.height && 
		mouseY > this.y && mouseY < this.y + this.width;
	}

	modifyPos(x, y){
		this.x -= x;
		this.y -= y;
	}

	getCenter(){
		return [this.x + this.height / 2, this.y + this.width / 2];
	}

	grip(piece){

		if(this == piece) return false;

		let Dx = piece.getCenter()[0] - this.getCenter()[0];
		let Dy = piece.getCenter()[1] - this.getCenter()[1];

		Dx = abs(Dx);
		Dy = abs(Dy);

		return Dx < GLOBALDISTHORIZONTAL && Dy < ACEPTATIONHORIZONTAL || Dx < ACEPTATIONVERTICAL && Dy < GLOBALDISTVERTICAL;
	}

	gripWith(piece){
		if(this == piece) return false;

		let Dx = piece.getCenter()[0] - this.getCenter()[0];
		let Dy = piece.getCenter()[1] - this.getCenter()[1];

		Dx = abs(Dx);
		Dy = abs(Dy);

		if(Dx < GLOBALDISTHORIZONTAL && Dy < ACEPTATIONHORIZONTAL){
			this.x = this.x + (piece.x - this.x - this.width);
			this.y = piece.y;
		}			
		else{
			this.x = piece.x;
			this.y = this.y + (piece.y - this.y - this.height);
		}

	}
}
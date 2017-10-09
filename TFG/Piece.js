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
}
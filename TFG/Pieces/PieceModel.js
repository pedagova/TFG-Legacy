class PieceModel{

	constructor(x, y){
		this.x = x;
		this.y = y;
		this.next = null;
	}

	//add the next piece to this one
	//Param:
		//nextPiece: the next one;
	addNext(nextPiece){
		this.next = nextPiece;
	}

	//remove the nextPiece
	//Param:
		//nextPiece: the piece which gonna be the next one
	remove(){
		
	}

	isSelected(x, y, _width, _height){
		return this.x - _width/2 < x && this.x + _width/2 > x &&
			   this.y - _height/2 < y && this.y + _height/2 > y;
	}

	modifyPos(x, y){
		this.x += x;
		this.y += y;
		
		if(this.next == null) return;
		this.next.modifyPos(x, y);
	}

	exec(param){
		console.log("this class is only for teasting, remember delete it later");
		return this.next;
	}


}
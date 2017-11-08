class PieceModel{

	constructor(x, y, name){
		this.x = x;
		this.y = y;
		this.name = name;
		this.next = null;
		this.prev = null;
	}

	//add the next piece to this one
	//Param:
		//nextPiece: the next one;
	add(nextPiece){
		let piece = nextPiece.model;
		if(this.next == null){
			this.next = nextPiece;
			piece.prev = this;
			return;
		}

			let next = this.next;

			this.next = nextPiece;

			piece.next = next;
			piece.prev = this;

			piece.prev = nextPiece;
	}

	//remove the nextPiece
	//Param:
		//nextPiece: the piece which gonna be the next one
	rm(){
		let prev = this.prev;
		let next = this.next;

		if(prev != null)
			prev.next = next;
		if(next != null)
			next.prev = prev;
	}

	unlock(){
		if(this.prev == null) return;
			
		this.prev.next = null;
		this.prev = null;
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

	canAdh(piece, _width, _height){

	
		let p1 = {
			x : this.x,
			y : this.y - _height / 2,
		}

		let p2 = {
			x : piece.getX(),
			y : piece.getY() + piece.getHeight() / 2,
		}

		let yDif = p1.y - p2.y;
		let xDif = p1.x - p2.x;


		return yDif > 0 && yDif < VERTICALHEIGTH &&
				abs(xDif) < VERTICALWIDTH;
	}

	exec(param){
		console.log("Soy la pieza: ", this.name);
		return this.next;
	}


}
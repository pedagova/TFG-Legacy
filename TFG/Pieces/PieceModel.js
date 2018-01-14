class PieceModel{

	constructor(x, y, width, height,name){
		this.x = x;
		this.y = y;
		this.name = name;
		this.next = null;
		this.prev = null;
		this.width = width;
		this.height = height;
		this.ref = null;
	}

	****
	//add the next piece to this one
	//Param:
		//nextPiece: the next one;
	add(nextPiece){
		//update the next reference of this piece
		this._add(nextPiece);

		//update the ref value for the block
		let last = this.getLast(nextPiece);
		last.setRef(this.ref);
		if(this.ref != null)
			this.ref.grow(getBlockSize(nextPiece));
		this.ref = null;
	}

	_add(nextPiece){
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

	getLast(pieces){
		let last = null;
		if(pieces == null)
			return;
		let p = pieces;
		while(true){
			if(p.model.next == null)
				return p;
			p = p.model.next;
		}
		
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

	isSelected(x, y){
		return this.x < x && this.x + this.width > x &&
			   this.y < y && this.y + this.height > y;
	}

	modifyPos(x, y){
		this.x += x;
		this.y += y;
		
		if(this.next == null) return;
		this.next.modifyPos(x, y);
	}

	canAdh(piece){

	
		let p1 = {
			x : this.x,
			y : this.y - this.height / 2,
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
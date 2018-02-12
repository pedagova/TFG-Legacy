class Piece{

	constructor(width, height, x, y, color, name){
		
		this.name = name;
		this.view = new PieceView(color);
		this.model = new PieceModel(x, y, width, height, name);
	}


	updateRef(newRef){
		this.model.updateRef(newRef);
	}

	add(next){
		if(next == this) return;
		
		this.model.add(next);
		//this.grow(getBlockSize(next));
	}

	rm(){
		this.model.rm();
	}

	unlock(){
		let ref = this.model.ref;
		if(ref != null)
			ref.goodBye(getBlockSize(this));
		this.model.unlock();
	}

	show(){
		this.view.show(this.model.x, this.model.y, this.model.width, this.model.height);
		/*if(this.model.next != null)
			this.model.next.show();*/

	}

	getRef(){
		return this.model.ref;
	}

	setRef(ref){
		this.model.ref = ref;
	}

	isSelected(x, y){
		return this.model.isSelected(x, y);
	}

	modifyPos(x, y){
		this.model.modifyPos(x, y);
	}

	canAdh(piece){
		if(piece == this) return;
		return this.model.canAdh(piece);
	}

	exec(param){
		return this.model.exec(param);
	}

	getX(){
		return this.model.x;
	}
		
	getY(){
		return this.model.y;
	}

	getWidth(){
		return this.model.width;
	}

	getHeight(){
		return this.model.height;
	}

	gripWith(piece){
		let xMod = this.model.x - piece.getX();
		let yMod = this.model.y - piece.getY();

		if(yMod > 0){
			this.modifyPos(-xMod, -yMod + this.model.height);
			piece.add(this);
		}else{
			this.modifyPos(-xMod, -yMod - this.model.height);
			this.add(piece);
		}
	}

	highlight(mode){
		this.view.setHighlight(mode);
	}
}
class Piece {

	constructor(width, height, x, y, color, name){
		this.name = name;
		this.view = new PieceView(width, height, color);
		this.model = new PieceModel(x, y, name);
	}

	add(next){
		if(next == this) return;
		
		this.model.add(next);
	}

	rm(){
		this.model.rm();
	}

	unlock(){
		this.model.unlock();
	}

	show(){
		this.view.show(this.model.x, this.model.y);
		/*if(this.model.next != null)
			this.model.next.show();*/

	}

	isSelected(x, y){
		return this.model.isSelected(x, y, this.view.width, this.view.height);
	}

	modifyPos(x, y){
		this.model.modifyPos(x, y);
	}

	canAdh(piece){
		if(piece == this) return;
		return this.model.canAdh(piece, this.view.width, this.view.height);
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
		return this.view.width;
	}

	getHeight(){
		return this.view.height;
	}

	gripWith(piece){
		let xMod = this.model.x - piece.getX();
		let yMod = this.model.y - piece.getY();

		if(yMod > 0){
			this.modifyPos(-xMod, -yMod + this.view.height);
			piece.add(this);
		}else{
			this.modifyPos(-xMod, -yMod - this.view.height);
			this.add(piece);
		}
	}

	highlight(mode){
		this.view.setHighlight(mode);
	}
}
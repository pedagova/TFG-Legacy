class Piece {

	constructor(width, height, x, y, color, name){
		this.name = name;
		this.view = new PieceView(width, height, color);
		this.model = new PieceModel(x, y, name);
	}

	addNext(next){
		if(next == this) return;
		
		this.model.addNext(next);
	}

	rmNext(next){
		this.model.remove(next);
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
}
class Piece {

	constructor(width, height, x, y, color){
		this.view = new PieceView(width, height, color);
		this.model = new PieceModel(x, y);
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
	}

	isSelected(x, y){
		return this.model.isSelected(x, y, this.view.width, this.view.height);
	}

	modifyPos(x, y){
		this.model.modifyPos(x, y);
	}

	exec(param){
		return this.model.exec(param);
	}


	
}
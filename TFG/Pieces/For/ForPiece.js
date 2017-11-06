class ForPiece extends Piece{

	constructor(width, height, x, y, color, name){
		super(width, height, x, y, color, name);
		this.model = new ForPieceModel(x, y); 
		this.view = new ForPieceView(width, height, color);
	}

	addOne(piece){
		this.model.addOne(piece);
	}

	show(){
		this.view.show(this.model.x, this.model.y);
		/*if(this.model.first != null)
			this.model.first.show();
		if(this.model.next != null)
			this.model.next.show();*/
	}
}
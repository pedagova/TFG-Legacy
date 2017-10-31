class ForPiece extends Piece{

	constructor(x, y, width, height, color){
		super();
		this.model = new ForPieceModel(width, height); 
		this.view = new ForPieceView(x, y, color);
	}

	addOne(piece){
		this.model.addOne(piece);
	}
}
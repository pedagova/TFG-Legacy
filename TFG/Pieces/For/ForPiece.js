
//Observer que mira a las piezas
class ForPiece extends Piece{

	constructor(width, height, x, y, color, name){
		super(width, height, x, y, color, name);
		this.model = new ForPieceModel(x, y, width, height); 
		this.view = new ForPieceView(color);			
	}

	addOne(piece){
		this.grow(getBlockSize(piece));
		this.model.addOne(piece);
		piece.model.prev = this;
		piece.model.ref = this;
	}

	grow(n){
		this.model.grow(n);
	}
	check(x, y){
		return this.model.check(x, y);
	}
}
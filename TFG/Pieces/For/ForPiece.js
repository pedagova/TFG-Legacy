
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

	shrink(n){
		this.model.shrink(n);
	}

	goodBye(size){
		this.model.shrink(size);
		if(this.model.ref != null)
			this.model.ref.goodBye(size);
	}
}
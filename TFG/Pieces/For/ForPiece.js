
//Observer que mira a las piezas
class ForPiece extends Piece{

	constructor(width, height, x, y, color, name){
		super(width, height, x, y, color, name);
		this.model = new ForPieceModel(x, y, width, height); 
		this.view = new ForPieceView(color);			
	}

	addOne(piece){
		this.model.addOne(piece);
		this.grow(getBlockSize(piece));
		piece.model.prev = this;
		piece.model.ref = this;
	}

	grow(n){
		this.model.grow(n);

		if(this.next != null)
			this.next.modifyPos(0, n);
		let last = this.model.getLast(this);
		if(last.model.ref != null)
			last.model.ref.grow(n);
	}
}
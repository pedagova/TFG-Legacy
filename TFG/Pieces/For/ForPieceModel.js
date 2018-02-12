class ForPieceModel extends PieceModel{

	constructor(x, y, width, height){
		super(x, y, width, height);;
		this.first = null;
		this.cont = 0;
	}

	addOne(piece){
		if(this.first != null)
			return;

		this.first = piece;
		piece.updateRef(this);
	}

	modifyPos(x, y){

		super.modifyPos(x, y);
		if(this.first != null)
			this.first.modifyPos(x, y);

	}

	grow(n){
		if(this.first == null) 
	     	this.height += n - FORMIDPIECE_HEIGHT + FORBOTTOMPIECE_HEIGHT;
	    else 
	      	this.height += n; 
	}

	shrink(n){
		let newHeight = this.height - n;
		let constHeight = FORBOTTOMPIECE_HEIGHT + FORTOPPIECE_HEIGHT;
		if(newHeight == constHeight)
			this.height = constHeight + FORMIDPIECE_HEIGHT
		else
			this.height -= n;

	}

	exec(param){
		if(this.first == null) return this.next;
		let p = this.first;

		console.log("ini for ---------------------");
		
		for(let i = 0; i < 5; i++){
			console.log("iteration " + i);
			while((p = p.exec(param)) != null){}
			p = this.first;	
		}
		

		console.log("fin for ---------------------");
		return this.next;
	}


	isSelected(x, y){
		let auxX = this.x;
		let auxY = this.y;

		let topPiece = auxX < x && auxX + FORTOPPIECE_WIDTH > x &&
			   auxY < y && auxY + FORTOPPIECE_HEIGHT > y;
		auxY += FORTOPPIECE_HEIGHT;


		let h = this.height - FORTOPPIECE_HEIGHT - FORBOTTOMPIECE_HEIGHT;

		let midPiece = auxX < x && auxX + FORMIDPIECE_WIDTH > x &&
			   auxY < y && auxY + h > y;
		auxY += FORMIDPIECE_HEIGHT;

		

		let bottomPiece = auxX < x && auxX + FORBOTTOMPIECE_WIDTH > x &&
			   auxY < y && auxY + FORBOTTOMPIECE_HEIGHT > y;

			
	
		return topPiece || midPiece || bottomPiece;
	}

}
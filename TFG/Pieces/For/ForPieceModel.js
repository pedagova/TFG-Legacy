class ForPieceModel extends PieceModel{

	constructor(x, y, width, height){
		super(x, y, width, height);;
		this.first = null;
		this.cont = 0;
	}

	addOne(piece){
		
		//this.grow(getBlockSize(piece));
		this.first = piece;	
		this.first.model.x = this.x + FORMIDPIECE_WIDTH;
		this.first.model.y = this.y + FORTOPPIECE_HEIGHT;
		this.cont++;
		
	}

	modifyPos(x, y){

		super.modifyPos(x, y);
		if(this.first != null)
			this.first.modifyPos(x, y);

	}

	grow(n){	
		if(this.first == null)
			this.height = n + FORTOPPIECE_HEIGHT + FORBOTTOMPIECE_HEIGHT;
		else
			this.height += n;
		console.log("I have grown: ", n)
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

	check(x, y){

		let p = this.first;
		while(p != null){
			if(p.isSelected(x, y)){
				if(p instanceof ForPiece){
					return p.check();			
				}
				return p;
			}
		}
		return null;

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
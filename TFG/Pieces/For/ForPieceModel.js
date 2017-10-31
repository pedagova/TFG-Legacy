class ForPieceModel extends PieceModel{

	constructor(x, y){
		super(x, y);;
		this.first = null;
		this.cont = 0;
	}

	addOne(piece){
		if(this.first == null){
			this.first = piece;	
		}
		cont++;
		return piece;
	}

	modifyPos(x, y){

		super.modifyPos(x, y);
		this.first.modifyPos(x, y);

	}

	exec(param){
		let p = this.first;

		for(let i = 0; i < 5; i++){
			while((p = p.exec(param)) != null){}
			p = this.first;	
			console.log("iteration " + i);
		}
		
		return this.next;
	}

}
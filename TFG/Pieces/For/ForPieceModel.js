class ForPieceModel extends PieceModel{

	constructor(x, y, width, height){
		super(x, y, width, height);;
		this.first = null;
		this.cont = 0;
	}

	addOne(piece){
		
		this.first = piece;	
		this.grow(getBlockSize(piece));
		this.cont++;
		
	}

	modifyPos(x, y){

		super.modifyPos(x, y);
		if(this.first != null)
			this.first.modifyPos(x, y);

	}

	grow(n){	
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

}
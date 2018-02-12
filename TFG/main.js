let pieces = [];
let myPiece;
let gripedPiece;
let mainPiece;

function setup(){
	createCanvas(600, 600);
	//temp();
	test();
}

function temp(){
	pieces.push(new ForPiece(100, 30, 0, 60, [255, 0, 0], "RED"));
	//pieces.push(new Piece(100, 30, 10, 65, [150, 0, 150], "PURPLE"));
	//pieces[2].addOne(pieces[3]);
	mainPiece = pieces[0];
}

function test(){
	pieces.push(new ForPiece(100, 30, 0, 60, [255, 0, 0], "RED"));
	mainPiece = pieces[0];
}

function draw(){
	translate(width / 2, height / 2);
	background(255, 255, 190);
	for(let p of pieces){
		p.show();
		p.isSelected(0,0);
	}
	if(gripedPiece != null){
		//gripedPiece.highLight(myPiece);
	}

	if(myPiece != null){
		//myPiece.highLight();
	}

}

function launch(){
	/*let p = mainPiece;
	while((p = p.exec()) != null);*/

	//console.log(getBlockSize(pieces[0]));}
	let t = pieces[pieces.length - 1].model;
	
	if(pieces.length == 1){
		pieces.push(new Piece(100, 30, t.x, t.y + 35, [0, 0, 0], "BLACK"));
		pieces[pieces.length - 2].addOne(pieces[pieces.length - 1]);
		
	}
	else{
		pieces.push(new Piece(100, 30, t.x, t.y + 30, [0, 0, 0], "BLACK"));
		pieces[pieces.length - 2].add(pieces[pieces.length - 1]);
	}
}
function getBlockSize(piece){
	if(piece.model.next == null)
		return piece.model.height;
	return piece.model.height + getBlockSize(piece.model.next);
}


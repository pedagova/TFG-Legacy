let pieces = [];
let myPiece;
let gripedPiece;
let mainPiece;

function setup(){
	createCanvas(600, 600);
	temp();
}

function temp(){
	pieces.push(new Piece(100, 30, 0, 0, [0, 0, 255], "BLUE"));
	pieces.push(new Piece(100, 30, 0, 30, [0, 255, 0], "GREEN"));
	pieces.push(new ForPiece(100, 30, 0, 60, [255, 0, 0], "RED"));
	pieces.push(new Piece(100, 30, 0, 200, [150, 0, 150], "PURPLE"));
	pieces[2].addOne(pieces[3]);
	mainPiece = pieces[2];
}

function draw(){
	translate(width / 2, height / 2);
	background(255, 255, 190);
	for(let p of pieces)
		p.show();
	if(gripedPiece != null){
		//gripedPiece.highLight(myPiece);
	}

	if(myPiece != null){
		//myPiece.highLight();
	}

}

function launch(){
	let p = mainPiece;
	while((p = p.exec()) != null);
}


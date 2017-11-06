let pieces = [];
let mainPiece;
function setup(){
	createCanvas(600, 600);
	temp();
}

function temp(){
	pieces.push(new Piece(100, 30, 0, 0, [0, 0, 255], "BLUE"));
	pieces.push(new Piece(100, 30, 0, 30, [0, 255, 0], "GREEN"));
	pieces.push(new ForPiece(100, 30, 0, 60, [255, 0, 0], "RED"));
	pieces.push(new Piece(100, 30, 0, 90, [150, 0, 150], "PURPLE"));
	pieces[2].addOne(pieces[0]);
	pieces[0].addNext(pieces[1]);
	pieces[2].addNext(pieces[3]);
	mainPiece = pieces[2];
}

function draw(){
	translate(width / 2, height / 2);
	background(255, 255, 190);
	for(let p of pieces)
		p.show();
}

function launch(){
	let p = mainPiece;
	while((p = p.exec()) != null){};
}


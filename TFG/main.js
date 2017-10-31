let pieces = [];
function setup(){
	createCanvas(600, 600);
	temp();
}

function temp(){
	pieces.push(new Piece(100, 30, 0, 0, [0, 0, 255]));
	pieces.push(new Piece(100, 30, 0, 30, [0, 255, 0]));
	pieces.push(new ForPiece(100, 30, 0, 60, [255, 0, 0]));
	pieces[0].addNext(pieces[1]);
	pieces[2].addOne(pieces[0]);
}

function draw(){
	translate(width / 2, height / 2);
	background(255, 255, 190);
	for(let p of pieces){
		p.show();
	}
}

function launch(){
	pieces[2].exec();
}


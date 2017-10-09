
let pieces = [];
let piece1 = new Piece(100, 45, 300, 300);
let piece2 = new Piece(100, 45, 100, 200);
let myPiece = null;
let lastMouseX = 0.0, lastMouseY = 0.0;

function setup(){
	createCanvas(600,600);
	pieces.push(piece1);
	pieces.push(piece2);
}

function draw(){
	background(0,255,0);

	for (let i = 0; i < pieces.length ; i++) {
		pieces[i].show();
	}

	if(myPiece != null){
		myPiece.modifyPos(lastMouseX - mouseX, lastMouseY - mouseY);
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	}
}	

function mousePressed(){
	for (let i = 0; i < pieces.length ; i++) {
		let p = pieces[i];
		if(p.mouseOn()){
			myPiece = p;
			break;	
		}
	}

	if(myPiece == null)	
		return;
	
	lastMouseX = mouseX;
	lastMouseY = mouseY;
}

function mouseReleased(){
	myPiece = null;1
}
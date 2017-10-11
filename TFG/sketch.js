
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
		let c = pieces[i].getCenter();
		pieces[i].show();
		fill(0);
		ellipse(c[0], c[1], 20, 20);
	}

	if(myPiece != null){
		myPiece.modifyPos(lastMouseX - mouseX, lastMouseY - mouseY);
		lastMouseX = mouseX;
		lastMouseY = mouseY;
	}

	let temp = offSetGrip(piece1, piece2);
	let point1 = temp[0];
	let point2 = temp[1];
	let p1 = piece1.getCenter(), p2 = piece2.getCenter();
	let module1 = sqrt(pow(point1[0] - p1[0], 2) + pow(point2[0] - p2[0], 2));
	let module2 = sqrt(pow(point1[1] - p1[1], 2) + pow(point2[1] - p2[1], 2));
	let module = module2;
	if(module2 < module1)
		module = module1;
	if( module < D){ 
		console.log(module);
		background(255, 0, 0);
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
	myPiece = null;
}

let pieces = [];
let piece1 = new Piece(100, 45, 300, 300, 255, 0, 0, [DIR.RIGHT, DIR.TOP]);
let piece2 = new PrintPiece(100, 45, 100, 100, 0, 255, 0, [DIR.LEFT]);
let myPiece = null;
let gripedPiece = null;
let lastMouseX = 0.0, lastMouseY = 0.0;
let x = 0;

function setup(){
	createCanvas(600,600);
	pieces.push(piece1);
	pieces.push(piece2);
	piece2.exec("Hola");
}

function draw(){
	background(0,255,0);

	drawPieces();

	myPieceInteraction();

	//fixData();
	
	//console.log(piece1.dirs);
}	

/*function fixData(){
	for(let i = 0; i < pieces.length; i++){
		for(let j = 0; j < pieces.length; j++){
			if(pieces[i] == pieces[j]) continue;
			let griped = false;
			for(let d of pieces[i].dirs){
				if(d != 1 || d != null){
					griped = true;
					break;
				}
			}

			if(!pieces[i].grip(pieces[j])){
				pieces[i].unGrip(pieces[j]);

			}
		}
	}
}*/

function myPieceInteraction(){

	let offX = lastMouseX - mouseX;
	let offY = lastMouseY - mouseY;

	if(myPiece != null){

		myPiece.modifyPos(offX, offY);

		//pieces collision
		for(let i = 0; i < pieces.length; i++){
			
			if(myPiece.onBounds(pieces[i])){
				myPiece.modifyPos(-offX, -offY);
				return;
			}
		}
		
		lastMouseX = mouseX;
		lastMouseY = mouseY;

		for (let i = 0; i < pieces.length ; i++) {
			if(myPiece.grip(pieces[i])){
				gripedPiece = pieces[i];
				
				myPiece.gripWith(pieces[i]);

				break;
			}
		}
	}
}

function drawPieces(){
	for (let i = 0; i < pieces.length ; i++) {
		let c = pieces[i].getCenter();
		pieces[i].show();
		fill(0);
		ellipse(c[0], c[1], 20, 20);
	}
	
}

//Mouse control

function mousePressed(){
	for (let i = 0; i < pieces.length ; i++) {
		let p = pieces[i];
		if(p.mouseOn()){
			myPiece = p;
			myPiece.clickX = mouseX - myPiece.x;
			myPiece.clickY = mouseY - myPiece.y;
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
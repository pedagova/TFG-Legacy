let myPiece;
let px, py;
function findPiece(pieces){
	for(let p of pieces)
		if(p.isSelected(mouseX - width / 2, mouseY - height / 2))
			return p;
	return null;
}

function mousePressed(){
	myPiece = findPiece(pieces);
	console.log(myPiece);
	console.log("mouseX: ", mouseX - width / 2, " mouseY: ",  mouseY - height / 2);
	px = mouseX;
	py = mouseY;
}

function mouseDragged(){
	
	if(myPiece == null) return;
	console.log("mouseX: ", mouseX, " mouseY: ", mouseY);
	console.log("pmouseX: ", pmouseX, " pmouseY: ", pmouseY);
	myPiece.modifyPos(mouseX - px, mouseY - py);
	px = mouseX;
	py = mouseY;
}

function mouseReleased(){
	myPiece = null;
}


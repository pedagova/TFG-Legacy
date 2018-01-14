
let px, py;
function findPiece(pieces){
	let values = [];
	for(let p of pieces)
		if(p.isSelected(mouseX - width / 2, mouseY - height / 2)){
			return p;
		}
	return null;
}

function mousePressed(){
	myPiece = findPiece(pieces);
	if(myPiece != null){
		myPiece.unlock();
	}
	px = mouseX;
	py = mouseY;
}

function mouseDragged(){

	if(myPiece == null) return;
	myPiece.modifyPos(mouseX - px, mouseY - py);
	savePrevMouse();
	let adh = canAdherence();
	gripedPiece = adh.piece;
	if(adh != ADHMODE.ERRORADH){
		//gripedPiece.highlight(adh.mode);
	}
}

function mouseReleased(){
	if(gripedPiece != null)
		myPiece.gripWith(gripedPiece);
	myPiece = null;
	gripedPiece = null;

}

function savePrevMouse(){
	px = mouseX;
	py = mouseY;
}

function canAdherence(){
	for(let p of pieces)
		if(myPiece.canAdh(p))
			return {piece : p, mode : ADHMODE.TOP};
		
		else if(p.canAdh(myPiece))
			return {piece : p, mode : ADHMODE.BOTTOM};
		
	return {piece : null, mode : ADHMODE.ERRORADH};
}

function gripPieces(piece){
	myPiece.gripWith(piece);
}

 
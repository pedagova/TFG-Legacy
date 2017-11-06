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
	px = mouseX;
	py = mouseY;
}

function mouseDragged(){
	let adh;
	if(myPiece == null) return;
	myPiece.modifyPos(mouseX - px, mouseY - py);
	savePrevMouse();
	adh = calculateAdherence();
	
}

function mouseReleased(){
	myPiece = null;
}

function savePrevMouse(){
	px = mouseX;
	py = mouseY;
}

function calculateAdherence(){
	for(let p of pieces)
		if(myPiece.canAdh(p) )
			return {piece: p, mode: ADHMODE.DOWN,};
		
		else if(p.canAdh(myPiece))
			return {piece: p, mode: ADHMODE.UP,};
		
	
	return {piece: null, mode: ADHMODE.ERRORADH,};
}

var ADHMODE = {
	ERRORADH : -1,
	UP		 : 0,
	DOWN	 : 1,
}
 
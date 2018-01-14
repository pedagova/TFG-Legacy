class ForPieceView extends PieceView{
	
	constructor(width, height, color){
		super(width, height, color);
	}

	show(x, y, width, height){
		fill(this.color[COLOR.R], this.color[COLOR.G], this.color[COLOR.B]);
		noStroke();
		let w = width;
		let h = height ;
		const PilarSize = height/2;
		beginShape();
		
			vertex(x ,y);
			vertex(x, y + h);
			vertex(x + w, y + h);
			vertex(x + w, y + h - FORBOTTOMPIECE_HEIGHT);

			vertex(x + FORMIDPIECE_WIDTH, y + h - FORBOTTOMPIECE_HEIGHT);
			vertex(x + FORMIDPIECE_WIDTH, y + FORTOPPIECE_HEIGHT);
			vertex(x + w , y + FORTOPPIECE_HEIGHT);
			vertex(x + w, y);

		endShape(CLOSE);
	}
}
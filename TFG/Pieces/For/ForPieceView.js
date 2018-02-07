class ForPieceView extends PieceView{
	
	constructor(width, height, color){
		super(width, height, color);
	}

	show(x, y, width, height){
		fill(this.color[COLOR.R], this.color[COLOR.G], this.color[COLOR.B]);

		let w = width;
		let h = height ;
		const PilarSize = height/2;
		beginShape();
		
			vertex(x ,y);
			vertex(x, y + h);
			vertex(x + w, y + h);
			vertex(x + w, y + h - PilarSize);

			vertex(x + PilarSize, y + h - PilarSize);
			vertex(x + PilarSize, y + PilarSize);
			vertex(x + w , y + PilarSize);
			vertex(x + w, y);

		endShape(CLOSE);
	}

}
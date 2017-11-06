class ForPieceView extends PieceView{
	
	constructor(width, height, color){
		super(width, height, color);
	}

	show(x, y){
		fill(this.color[COLOR.R], this.color[COLOR.G], this.color[COLOR.B]);

		let w = this.width / 2;
		let h = this.height / 2;
		beginShape();
		
			vertex(x + w, y - h);
			vertex(x - w, y - h);
			vertex(x - w, y + h);
			vertex(x + w, y + h);

			vertex(x + w, y + h - 10);
			vertex(x - w + 10, y + h - 10);
			vertex(x - w  + 10, y - h + 10);
			vertex(x + w, y - h + 10);

		endShape(CLOSE);
	}

}
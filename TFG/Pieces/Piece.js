class Piece{
	//create a piece 
		//Param: - widhth, height: size of the Piece
		//		 - x, y: position of the up left corner

	constructor(width, height , x, y, r, g, b, dirs){
		this.height = height;
		this.width = width;
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = g;
		this.b = b;
		this.dirs = [null, null, null, null];
		for(let dir of dirs){
			this.dirs[dir] = GRIPEDGE;
		}
		this.clickX;
		this.clickY;
	}	

	

	//Display de image of the Piece
	show(){
		
		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.width, this.height);
		for(let dir of this.dirs){
			if(dir == null) continue;
			this.showNotch();
		}
		for(let i = 0; i < 4; i++){
			if(this.dirs[i] == null) continue;
			this.showNotch(i);
		}
	}

	showNotch(dir){
		let px, py;
		let h = getTriangleH();
		let s = TRIANGLE_SIZE;
		switch(dir){
			case DIR.LEFT:
				px = this.x;
				py = this.y;
				triangle(px, py, px, py + s, px - h, py + s / 2);
				break;
			case DIR.RIGHT:
				px = this.x + this.width;
				py = this.y;
				triangle(px, py, px, py + s, px + h, py + s / 2);
				break;
			case DIR.TOP:
				px = this.x ;
				py = this.y;
				triangle(px, py, px + s, py, px + s / 2, py - h);
				break;
			case DIR.BOTTOM:
				px = this.x;
				py = this.y + this.height;
				triangle(px, py, px + s, py, px + s / 2, py + h);
				line(this.x, this.y + this.height, this.x + this.width, this.y + this.height);
				break;
		}
	}

	//it indicates if the mouse is over this piece
	//return: True if it is over the piece
	//		  False otherwise
	mouseOn(){
		return mouseX > this.x && mouseX < this.x + this.width && 
		mouseY > this.y && mouseY < this.y + this.height;
	}

	//Change the x, y position from the piece.
		//Param: x, y, each one indicates the value of the displacement
	modifyPos(x, y){
		this.x -= x;
		this.y -= y;
	}

	//Return: [] 1º position is x, 2º position is y
	getCenter(){
		return [this.x + this.width / 2, this.y + this.height / 2];
	}

	//check if the piece can grip with other
		//Param: piece, the piece with one u wanna grip
		//return: True if they grip
		//		  False otherwise
	grip(piece){

		if(this == piece) return false;

		let dx = abs(piece.x - this.x);
		let dy = abs(piece.y - this.y);

		//Horizontal
		if(dx < DISTH && dy < DISTACCEPTH){
			this.y = piece.y;
			//LEFT
			if(this.x < piece.x){
				return piece.dirs[DIR.LEFT] == GRIPEDGE && this.dirs[DIR.RIGHT] == GRIPEDGE;		
			}
			//RIGHT
			else{
				return piece.dirs[DIR.RIGHT] == GRIPEDGE  && this.dirs[DIR.LEFT] == GRIPEDGE;	
			}
		}
		//Vertical
		else if(dx < DISTACCEPTV && dy < DISTV){
			this.x = piece.x;
			//TOP
			if(this.y < piece.y){
				return piece.dirs[DIR.BOTTOM] == GRIPEDGE && this.dirs[DIR.TOP] == GRIPEDGE;
			}
			//BOTTOM
			else{
				return piece.dirs[DIR.TOP] == GRIPEDGE && this.dirs[DIR.BOTTOM] == GRIPEDGE;
			}
		}

		
	}

	canUnGrip(){
		return 
	}


	//Modify the position of this piece to make it grip with other one
		//Param: piece, the one which mark ur position

	gripWith(piece){
		if(this == piece) return;
		let dx = abs(piece.x - this.x);
		let dy = abs(piece.y - this.y);

		//Horizontal
		if(dx < DISTH && dy < DISTACCEPTH){
			this.y = piece.y;
			//LEFT
			if(this.x < piece.x){
				this.dirs[DIR.RIGHT] = piece;
				piece.dirs[DIR.LEFT] = this;piece; 
				this.modifyPos(-(dx - this.width), 0);
				
			}
			//LEFT
			else{
				this.dirs[DIR.LEFT] = piece;
				piece.dirs[DIR.RIGHT] = this;piece; 
				this.modifyPos(dx - this.width, 0);
			}
		}


		//Vertical
		else if(dx < DISTACCEPTV && dy < DISTV){
			this.x = piece.x;
			//Bottom
			if(this.y < piece.y){
				this.dirs[DIR.BOTTOM] = piece;
				piece.dirs[DIR.TOP] = this;
				this.modifyPos(0, -(dy - this.height));
			}
			//UP
			else{
				this.dirs[DIR.TOP] = piece;
				piece.dirs[DIR.BOTTOM] = this;
				this.modifyPos(0, dy - this.height);
			}

			mouseX = this.x + this.clickX;
			mouseY = this.y + this.clickY;
		}
		

		/*let Dx = abs(piece.x - this.x);
		let Dy = abs(piece.y - this.y);

		if(Dx < GLOBALDISTHORIZONTAL && Dy < ACEPTATIONHORIZONTAL){
			this.x = this.x + (piece.x - this.x - offSet(piece.x - this.x) * (this.width / 2) + (this.width / 2));
			this.y = piece.y;
		}			
		else{
			this.x = piece.x;
			this.y = this.y + (piece.y - this.y - offSet(piece.y - this.y) * (this.height / 2) + (this.height / 2));
		}*/



	}




	//check the colision between the piece and the a piece
		//param: piece: the piece to check if its colides	 
	onBounds(piece){
		
		if(this == piece) return;

		let px = piece.x;
		let py = piece.y;
		let left = px - this.width;
		let right = px + piece.width;
		let top = py - this.height;
		let bottom = py + piece.height;



        return this.x > left && this.x < right
        	&& this.y > top && this.y < bottom;
	}	

	exec(){};
}

function offSet(distance){
		return distance / abs(distance);
}

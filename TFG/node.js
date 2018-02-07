class Node{

	constructor(name){
		this.next = null;
		this.prev = null;
		this.name = name;
		//add a new node after this one
		
	}

	add(node){
			if(this.next == null){
				this.next = node;
				node.prev = this;
				return;
			}

			let next = this.next;

			this.next = node;

			node.next = next;
			node.prev = this;

			next.prev = node;


		}

		rm(){
			let prev = this.prev;
			let next = this.next;

			if(prev != null)
				prev.next = next;
			if(next != null)
				next.prev = prev;

		}
}

/*test

let n1 = new Node("n1");
	let n2 = new Node("n2");
	let n3 = new Node("n3");
	let n4 = new Node("n4");

	n1.add(n2);
	n2.add(n3);
	n1.add(n4);

	let i = 0;
	translate(20, 300);
	let n = n1;
	do{
		ellipse(i * 30, 0, 20, 20);
		text(n.name, i * 30 - 10, 0);

		console.log("node :", n.name);
		if(n.next != null)
			console.log("  next: ", n.next.name);
		else
			console.log("  next: null");
		if(n.prev != null)
			console.log("  prev: ", n.prev.name);
		else
			console.log("  prev: null");

		i++;
	}while((n = n.next) != null);

	n1.rm();
	console.log("------------------");
	n = n4;
	do{

		console.log("node :", n.name);
		if(n.next != null)
			console.log("  next: ", n.next.name);
		if(n.prev != null)
			console.log("  prev: ", n.prev.name);

		i++;
	}while((n = n.next) != null);*/
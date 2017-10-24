const D = 75;

const DISTH = 100 + 15;
const DISTACCEPTH = 10;
const DISTV = 45 + 15;
const DISTACCEPTV = 10;


function pointVector(point, vector, module){
	return [point[0] - module * vector[0], point[1] - module * vector[1]];
}

function pointAngle(point, angle, module){
	angle += (PI / 2);
	return [point[0] - module * cos(angle), point[1] - module * sin(angle)];
}

function offSetGrip(piece1, piece2){
	if(piece2 == piece1) return D + 1;

	let center1 = piece1.getCenter();
	let center2 = piece2.getCenter();

	let point1 = [center2[0], center1[1]];
	let point2 = [center1[0], center2[1]];

	return [point1, point2];

}
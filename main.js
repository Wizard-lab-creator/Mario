function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCavas(1240, 336);
	canvas.parent('canvas')
	
	instializeInSetup(mario);
}

function draw() {
	game();
}







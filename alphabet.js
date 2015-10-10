var vertSpeed = 0.8
var horzSpeed = 0.1
var upDuration = 1000
var downDuration = 1100
var horzDuration = 1600
var stopDuration = 1000
function drawM(client){
	client.after(100,function(){
		this.animateLeds('green', 30, 20);
	}).after(1000,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.right(horzSpeed);
	}).after(horzDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.up(vertSpeed)
	}).after(upDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.right(horzSpeed);
	}).after(horzDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
		this.animateLeds('blank', 1, 20);
	});
}

function drawL(client){
	client.after(100,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.animateLeds('green', 30, 20);
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.right(horzSpeed);
	}).after(horzDuration,function(){
		this.stop();
	}).after(stopDuration,function() {
		this.animateLeds('blank', 1, 20);
	});

}

function drawH(client){
	client.after(100,function(){
		this.animateLeds('green', 30, 20);
	}).after(1000,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.right(horzSpeed);
	}).after(horzDuration,function(){
		this.stop();
	}).after(stopDuration,function() {
		this.up(vertSpeed)
	}).after(upDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
		this.animateLeds('blank', 1, 20);
		
	});
}

function init(client){
	client.after(50, function(){
		this.animateLeds('blank', 1, 20);
	}).after(7000, function(){
	});
}

function nextLetter(client){
	client.after(100,function(){
		//this.animateLeds('blank', 1, 20);
		this.right(horzSpeed);
	}).after(1500,function(){
		this.stop();
	}).after(stopDuration,function(){
	});
}
module.exports.drawL = drawL;
module.exports.drawH = drawH;
module.exports.drawM = drawM;
module.exports.init = init;
module.exports.nextLetter = nextLetter;

var vertSpeed = 0.8
var horzSpeed = 0.1
var upDuration = 1000
var downDuration = 1050
var horzDuration = 1700
var stopDuration = 2000
var lightFreq = 360
var lightDur = 60

function drawM(client){
	client.after(100,function(){
		this.animateLeds('green', lightFreq, lightDur);
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
		this.animateLeds('blank', 1, lightDur);
	});
}

function drawL(client){
	client.after(100,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.animateLeds('green', lightFreq, lightDur);
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
		this.animateLeds('blank', 1, lightDur);
	});

}

function drawI(client){
	client.after(100,function(){
		this.animateLeds('green', lightFreq, lightDur);
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
	}).after(stopDuration,function() {
		this.animateLeds('blank', 1, lightDur);
	});

}

function drawU(client){
	client.after(100,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.animateLeds('green', lightFreq, lightDur);
		this.stop();
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.right(horzSpeed);
	}).after(horzDuration,function(){
		this.stop();
	}).after(stopDuration,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.animateLeds('blank', 1, lightDur);
		this.stop();
	}).after(stopDuration,function() {
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
	}).after(stopDuration,function(){
	});

}

function drawH(client){
	client.after(100,function(){
		this.animateLeds('green', lightFreq, lightDur);
	}).after(1000,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.stop();
		this.animateLeds('blank', 1, lightDur);
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration,function(){
		this.stop();
		this.animateLeds('green', lightFreq, lightDur);
	}).after(stopDuration,function(){
		this.right(horzSpeed);
	}).after(horzDuration,function(){
		this.stop();
		this.animateLeds('blank', 1, lightDur);
	}).after(stopDuration,function() {
		this.up(vertSpeed)
	}).after(upDuration,function(){
		this.stop();
		this.animateLeds('green', lightFreq, lightDur);
	}).after(stopDuration,function(){
		this.down(vertSpeed);
	}).after(downDuration*2,function(){
		this.stop();
		this.animateLeds('blank', 1, lightDur);
		
	});
}

function init(client){
	client.after(50, function(){
		this.animateLeds('blank', 1, lightDur);
	}).after(7000, function(){
	});
}

function nextLetter(client){
	client.after(100,function(){
		//this.animateLeds('blank', 1, 20);
		this.right(horzSpeed);
	}).after(1700,function(){
		this.stop();
	}).after(stopDuration,function(){
	});
}
module.exports.drawL = drawL;
module.exports.drawH = drawH;
module.exports.drawM = drawM;
module.exports.drawI = drawI;
module.exports.drawU = drawU;
module.exports.init = init;
module.exports.nextLetter = nextLetter;

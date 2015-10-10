var vertSpeed = 0.8
var horzSpeed = 0.1
var upDuration = 1000
var downDuration = 1100
var horzDuration = 2000
var stopDuration = 700


function drawL(client){
	client.after(100,function(){
		this.up(vertSpeed);
	}).after(upDuration*2,function(){
		this.animateLeds('green', 30, 0);
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
	});

}

function drawH(client){
	client.after(100,function(){
		this.animateLeds('green', 30, 0);
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
	});
}

function init(client){
	client.after(50, function(){
		this.animateLeds('blank', 1, 0);
	}).after(7000, function(){
	});
}

function nextLetter(client){
	client.after(100,function(){
		this.animateLeds('blank', 1, 0);
		this.right(horzSpeed);
	}).after(1000,function(){
		this.stop();
	}).after(stopDuration,function(){
	});
}
module.exports.drawL = drawL;
module.exports.drawH = drawH;
module.exports.init = init;
module.exports.nextLetter = nextLetter;

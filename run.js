var arDrone = require('../node/node_modules/ar-drone');
var client = arDrone.createClient();
var alphabet = require('./alphabet.js');

// var vertSpeed = 0.8
// var horzSpeed = 0.1
// var upDuration = 2000
// var downDuration = 2200
// var horzDuration = 2000
// var stopDuration = 500



client.takeoff();
alphabet.drawL(client);
client.after(500,function(){
	this.stop();
}).after(500,function() {
	this.land();
});



// function drawL(client){
// 	client.animateLeds('blank', 1, 2000);
// 	client.after(7000,function(){
// 		this.up(vertSpeed);
// 	}).after(upDuration,function(){
// 		this.animateLeds('green', 30, 2000);
// 		this.stop();
// 	}).after(stopDuration,function(){
// 		this.down(vertSpeed);
// 	}).after(downDuration,function(){
// 		this.stop();
// 	}).after(stopDuration,function(){
// 		this.left(horzSpeed);
// 	}).after(horzDuration,function(){
// 		this.stop();
// 		this.animateLeds('blank',1,100);
// 	}).after(stopDuration,function() {
// 	});

// }


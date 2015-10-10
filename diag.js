var arDrone = require('../node/node_modules/ar-drone');
var client = arDrone.createClient();

client.takeoff();
client.after(5000,function(){
	this.up(0.2);
}).after(2000,function(){
	this.down(0.2);
}).after(1000,function(){
	this.left(0.2);
}).after(1000,function() {
	this.stop();
	this.land();
});

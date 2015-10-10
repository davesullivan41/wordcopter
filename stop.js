var arDrone = require('../node/node_modules/ar-drone');
var client = arDrone.createClient();

client.takeoff();
client.after(500,function(){
	this.stop();
}).after(500,function() {
	this.land();
});

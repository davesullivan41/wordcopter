var arDrone = require('../node/node_modules/ar-drone');
var client = arDrone.createClient();
var alphabet = require('./alphabet.js');

//Main commands
client.takeoff();
alphabet.init(client);
alphabet.drawM(client);
alphabet.nextLetter(client);
alphabet.drawL(client);
alphabet.nextLetter(client);
alphabet.drawH(client);

//Stop and land
client.after(500,function(){
	this.stop();
}).after(500,function() {
	this.land();
});





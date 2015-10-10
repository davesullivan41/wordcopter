var arDrone = require('../node/node_modules/ar-drone');
var client = arDrone.createClient();
var alphabet = require('./alphabet.js');

inputString = process.argv[2];
if(inputString == '')
{
	inputString = 'MLH'
}

client.takeoff();
len = inputString.length;
for(var i = 0; i < len ; i++){
	if(inputString[i] == 'M' || inputString[i] == 'm')
	{
		alphabet.drawM(client);
		alphabet.nextLetter(client);
	}
	else if(inputString[i] == 'L' || inputString[i] == 'l')
	{
		alphabet.drawL(client);
		alphabet.nextLetter(client);
	}
	else if(inputString[i] == 'H' || inputString[i] == 'h')
	{
		alphabet.drawH(client);
		alphabet.nextLetter(client);	
	}
	else if(inputString[i] == 'U' || inputString[i] == 'u')
	{
		alphabet.drawU(client);
		alphabet.nextLetter(client);	
	}
	else if(inputString[i] == 'I' || inputString[i] == 'i')
	{
		alphabet.drawI(client);
		alphabet.nextLetter(client);	
	}
}

// //Main commands
// client.takeoff();
// alphabet.init(client);
// alphabet.drawM(client);
// alphabet.nextLetter(client);
// alphabet.drawL(client);
// alphabet.nextLetter(client);
// alphabet.drawH(client);

//Stop and land
client.after(500,function(){
	this.stop();
}).after(500,function() {
	this.land();
});





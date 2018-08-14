var desc=["Space","Medieval","Sporty","Aquatic","Scary","Jurassic","Fantasy","Pop Arty","Western","Superhero","Alien-esque","Cyberpunk","Dystopian","Medical","Secret Spy","Treasurers"];
var types=["Brochure","Retro","Hospital","World","Computer","Retailer","Software","TV Show","Society","App","Insurance","Agency","Bank","Delivery","Election","Cubicle Job"];


function newIdea(){
	"use strict";
	var randomNumber = Math.floor(Math.random() * (desc.length));
	var randomNumber2 = Math.floor(Math.random() * (types.length));
	document.getElementById('ideaDisplay').innerHTML = desc[randomNumber] + " " + types[randomNumber2];
}
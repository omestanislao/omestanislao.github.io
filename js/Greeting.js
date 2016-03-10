/*

	script to generate greeting based on time of 
	day and to get the time and the date of users browser and broswer and display on the webpage

*/


//alert(currentTime); /*Examplaes; This page says: Mon Feb 22 2016 17:27:17 GMT-0800 (PST)*/





var updateGreeting = function(Hour) {
	
	var greeting


	if ( Hour >= 18) {
		greeting = "&iexcl;&iexcl;Buenas Noches!!";
		document.getElementById("container").style.backgroundColor = "Pink";
	}
	else if ( Hour >= 13) {
		greeting = "&iexcl;&iexcl;Buenas Tardes!!";
		document.getElementById("container").style.backgroundColor = "Pink";
	}
	else if ( Hour >= 0) {
		greeting = "&iexcl;&iexcl;Buenos Dias!!";
		document.getElementById("container").style.backgroundColor = "Pink";
	}
	else {
		greeting = "Welcome!!";
	}

	return greeting;
}

var updateClock = function() {
	var currentTime = new Date();
	var currentHours24 = currentTime.getHours();
	//console.log("Hour:"+currentHours24);
	var currentMinutes = currentTime.getMinutes();
	//console.log("Minutes:"+currentMinutes);
	var currentSeconds = currentTime.getSeconds();

	//the '?'' stands for 'else if'
	var amOrPm = ( currentHours24 < 12 ) ? "AM" : "PM" ;

	//this function will enable the computer to convert the hours into standrd time insted of military time
	var currentHours12 = (currentHours24 > 12 ) ? currentHours24-12 : currentHours12 ;

	//converting 0 to 12
	currentHours12 = ( currentHours12 == 0) ? 12 : currentHours12;

	var currentTimeString = "Current time is " + currentHours12 + " : " + currentMinutes + " : " + currentSeconds + " " + amOrPm;
 	
 	document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);
 	document.getElementById("clock").innerHTML = currentTimeString;


 }
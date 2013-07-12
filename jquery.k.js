// No jQuery
var c='';window.onkeyup=function(e){(c+=e.which).match("38384040373937396665$")&&alert('konami!')};

// Slightly sloppy version with no jQuery
c="";window.onkeyup=function(a){(c+=a.which).match("38384040373937396665$")&&alert("konami!")};

// Ultra compact konami: Drop this code somewhere discrete and update the function containing "alert('hi')" with your desired result!
var b=function(){alert('hi')},c="";$(window).keyup(function(a){c+=a.which;if(c.match("38384040373937396665$")){b()}})

// Slightly more compact wrapper:
var c="";$(window).keyup(function(a){c+=a.which;if(c.match("38384040373937396665$")){
	alert('hi');
}})

// Ultra compact plugin: Drop this code somewhere and call it with $.konami(function(){});
$.fn.konami=function(b){var c="";$(window).keyup(function(a){c+=a.which;if(c.match("38384040373937396665$")){b()}})};
$("document").ready( function(){
//SELECTION****************************************************	
$("nav").css("background-color", "rgba(50,100,100,0.2)");
$("nav").children().css("padding", "10px");
$("nav").children().css("margin", "0px");


//we can add multiple css classes with an object literal
$("nav").css({
	'background-color':'rgba(50,100,100,0.2)',
	'padding':'10px',
	'margin':'0px'
});
$("#primaryContent img").css({
	'background-color':'rgba(50,100,100,0.2)',
	'padding':'10px',
	'margin':'0px',
	'border-radius':'5px'
});

//SELECT ELEMENTS THAT HAVE A CLASS OF ACTIVE 
$("li.active").addClass("lightBackground");
$(".active").addClass("lightBackgroundB");
$("h1").addClass("lightBackground");
$(".active").addClass("lightBackground");

//SELECT DIVS
$("#drawing").addClass("lightBackgroundB");
$("#water-color").addClass("lightBackgroundB");
$("#oil").addClass("lightBackgroundB");

//MULTIPLE SELECTORS
$("#drawing, #water-color, #oil").addClass("lightBackgroundB");


//SELECTION****************************************************	
//greater than INDEX of 0
$("#primaryContent img:gt(0)").addClass("lightBackgroundB");
//less than INDEX of 10 of images
$("#primaryContent img:lt(10)").addClass("lightBackgroundB");
//EQUAL to index 2 
$("#primaryContent img:eq(2)").addClass("lightBackgroundB");
//EQUAL to actual CHILD not index number..(watch out for other elements other than images)
$("#primaryContent img:nth-child(1)").addClass("lightBackgroundB");
//alternate every child by 2 count, 3 count etc
$("img:nth-child(2n)").addClass("lightBackgroundB");
$("#primaryContent img").not(".select").addClass("lightBackgroundB");

$("#drawing img").not(".no-figure");

//ATTRIBUTE SELECTORS
//match class with exact name
$("#primaryContent img[class=select]").addClass("lightBackgroundB");
//match class that STARTS with text sel
$("#primaryContent img[class^=sel]").addClass("lightBackgroundB");
//match class that CONTAINS the following text
$("#primaryContent img[class*=ct]").addClass("lightBackgroundB");
//match class with exact name
$("#primaryContent img[class=select]").addClass("lightBackgroundB");


});//closing document.ready

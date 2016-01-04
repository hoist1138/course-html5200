$("document").ready (setupButtons());

function setupButtons(){
	//console.log("button setup");
	//jQuery Event Binding...
	$("#robots").on("click", filterRobotsFn);
	$("#no-figures").on("click", filterFiguresFn);
	$("#plus-3").on("click", filterPlus3Fn);
	//clear all filters
	$("#clear").on("mouseover", clearFilterFn);
}
var allImages = $("#drawing img, #water-color img, #oil img");

function clearFilterFn(evt){
	//clear all filters
	//console.log(evt.target);
	//console.log(evt.type);
	
	
	TweenMax.staggerTo(allImages, 1, {alpha:1, ease:Cubic.easeInOut}, .01);
	
}

function filterRobotsFn(evt){
	clearFilterFn();
	
	//select the images in drawing that are NOT containing the robot class
	var selection = $("#drawing img, #water-color img, #oil img").not(".robots");
	TweenMax.staggerTo(selection, 1, {alpha:.25, ease:Cubic.easeInOut}, .03);
	console.log("button active");
}
function filterFiguresFn(evt){
	clearFilterFn();
	
	var selection = $("#drawing img, #water-color img, #oil img").not(".no-figure");
	TweenMax.staggerTo(selection, 1, {alpha:.25, ease:Cubic.easeInOut}, .03);
	
	console.log("button active");
}

function filterPlus3Fn(evt){
	clearFilterFn();
	
	var selection = $("#drawing img, #water-color img, #oil img").not(".plus-3");
	TweenMax.staggerTo(selection, 1, {alpha:.25, ease:Cubic.easeInOut}, .03);
	
	console.log("button active");
}



$("document").ready( function(){
	//alert("never use alerts");
	//jQuery SELECTIONS*************************************
	$("nav").css("background-color","rgba(50,100,100,0.2)");
	//select the children of the nav
	$("nav").children().css("background-color","rgba(50,100,100,0.2)");
	$("nav").children().css("padding","10px");
	$("nav").children().css("margin", "0px");
	
	//we can add multiple css rules object literal
	$("nav").css(
		{
			"background-color" : "rgba(50,100,100,0.8)",
			"padding" : "10px",
			"margin" : "10px"
		}
	);
	$("#primaryContent img").css(
		{
			"background-color" : "rgba(50,100,100,0.8)",
			"padding" : "10px",
			"margin" : "10px"
		}
	);
	//select element with class of active
	$("li.active").addClass("lightBackground");
	
	$("#drawing img, #water-color img").addClass("lightBackgroundB");
	
	//jQuery SELECTIONS, Filering*************************************
	//select elements greater than INDEX of 0
	$("#drawing img:gt(0)").addClass("lightBackgroundB");
	$("#water-color img:gt(0)").addClass("lightBackgroundB");
	$("#oil img:gt(0)").addClass("lightBackgroundB");
	//select elements less than INDEX of 3
	$("#drawing img:lt(3)").addClass("lightBackgroundB");
	$("#water-color img:lt(3),#water-color img:gt(5) ").addClass("lightBackgroundB");//The Bruce Method (r)
	$("#oil img:lt(3)").addClass("lightBackgroundB");
	
	//Selction EQUAL to actual child
	//be carful to not have ANY other elements in the parent div to affect the child count
	$("#drawing img:nth-child(3)").addClass("lightBackgroundB");
	$("#water-color img:nth-child(3)").addClass("lightBackgroundB");
	$("#oil img:nth-child(3)").addClass("lightBackgroundB");
	//select every OTHER child, by two count
	//extreamely usful for tables, for alternating row styles
	$("img:nth-child(2n)").addClass("lightBackgroundB");
	
	//filter with NOT method
	$("#drawing img").not(".selected").addClass("lightBackgroundB");
	
	//Attribute selectors
	$("#primaryContent img[class=selected]").addClass("lightBackgroundB");
	
	//must start with the following characters
	$("#primaryContent img[class^=sel]").addClass("lightBackgroundB");
	//contains any of the text in the class value
	$("#primaryContent img[class*=ct]").addClass("lightBackgroundB");
	//different attribute
	$("#primaryContent img[width*=150]").addClass("lightBackgroundB");

});//closing document.ready
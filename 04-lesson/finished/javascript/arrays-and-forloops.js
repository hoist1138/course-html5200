
	//create an array manually (the hard way)
	var imageList = new Array;
	// imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
	// imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
	// imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
	// imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
	// imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
	// imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
	// imageList[6] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[7] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[8] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[9] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[10] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[11] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[12] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[13] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[14] = "images/drawing/thumbs/artwork_7.jpg";
	// imageList[15] = "images/drawing/thumbs/artwork_7.jpg";
	
	//create an array dynamically...
	var output = ""; //make sure and setup output var OUTSIDE of the loop and give it a value
	//DATA TYPES REVISITED....
	//Undefined.....means a varable has been declared, but has no value (or even datatype) assigned to it
	//output = undefined;//
	//you cannot delete a variable that starts with var!!!
	//Null..........a variable with no value currently (but still retains its dataype), it may have been set before, but is now empty
	//output = null; //we we set a null datatype
	console.log(output);
	//console.log(typeof output);
	for (var i = 0; i < 25; i++)
	{
		
		imageList[i] = "images/drawing/thumbs/artwork_" + (i + 1) + ".jpg";
		output += '<img src="' + imageList[i] + '" width="150" height="100" />';
	}
	imageList.sort();
	var drawingDiv = document.getElementById('drawing');	
	drawingDiv.innerHTML = output;
	//console.log(output);
	
		
	


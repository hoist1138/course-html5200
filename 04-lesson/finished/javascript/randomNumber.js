
var go = document.getElementById("go");

go.addEventListener("click", onClick, false);


function onClick(evt){
	var attempt1Number = document.getElementById("attempt1Number");
	runAttempt1();
}

function runAttempt1(){
	//TweenMax.staggerFrom(".panel", 3, {alpha:0, scale:0, x:"-100", ease:Elastic.easeOut }, .1);
	TweenMax.to("#attempt1Number", 1, { ease:Circ.easeIn, onUpdate:generateNumber1, onComplete:runAttempt2}  );
	//TweenMax.to("#primaryContent", 2, {backgroundColor:"#f5f6d4", width:"20%", top:"200px", ease:Power2.easeInOut});
}
function runAttempt2(){
	TweenMax.to("#attempt2Number", 1, { ease:Circ.easeIn, onUpdate:generateNumber2, onComplete:runAttempt3} );
}

function runAttempt3(){
	TweenMax.to("#attempt3Number", 1, { ease:Circ.easeIn, onUpdate:generateNumber3, onComplete:calculateWin} );
}

function calculateWin(){
	var totalElement = document.getElementById("total");
	//remember to use the parseInt(x) function to convert the text to a number!
	var attempt1 = parseInt(attempt1Number.textContent);
	var attempt2 = parseInt(attempt2Number.textContent);
	var attempt3 = parseInt(attempt3Number.textContent);
	console.log(attempt1);
	var totalScore = (attempt1 + attempt2 + attempt3);
	totalElement.textContent = totalScore;
	if(totalScore > 25){
		totalElement.setAttribute("class", "totalHigh");
		TweenMax.to("#total", .2, { scaleX:1.1, scaleY:1.1, ease:Circ.easeInOut, repeat:-1, yoyo:true} );

	}else{
		totalElement.setAttribute("class", "totalLow");
	}
}

function generateNumber1(){
	
	var num = Math.round(Math.random() * 10);
	attempt1Number.textContent = num;
	//console.log(num);
}

function generateNumber2(){
	
	var num = Math.round(Math.random() * 10);
	attempt2Number.textContent = num;
	//console.log(num);
}

function generateNumber3(){
	
	var num = Math.round(Math.random() * 10);
	attempt3Number.textContent = num;
	//console.log(num);
}

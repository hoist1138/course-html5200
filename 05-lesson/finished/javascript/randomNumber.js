
//console.log(Math.random());

//round a number

Math.round(Math.random()); //round the result

//how do we incease the default 0 - 1 randomness 

console.log(Math.round(    Math.random() * 10)   );
Math.floor(  Math.random() * 10);//error here



//bind click event to the button
var go = document.getElementById("go");
go.addEventListener("click", onClick, false);
	
var roundNumber = 0;

function onClick(evt){
	//remove event binding from the button so users cant click while its running
	go.removeEventListener("click", onClick, false);
	
	
	initialize();
	trackRounds();
	runAttempt1();
	

}

function initialize(){
	//clear the fields
	var attempt1Number =  document.getElementById("attempt1Number"); 
	var attempt2Number =  document.getElementById("attempt2Number"); 
	var attempt3Number =  document.getElementById("attempt3Number"); 
	attempt1Number.textContent = null;
	attempt2Number.textContent = null;
	attempt3Number.textContent = null;
	
	//clear winning total div
	var totalElement = document.getElementById("total");
	TweenMax.to("#total", 0, { scaleX:1, scaleY:1} );
	totalElement.setAttribute("class", "nothing");
//dim the button for user feedback
	go.setAttribute("class", "disabled");
	
}

function trackRounds(){

	roundNumber++;
	var currentRound = document.getElementById("currentRound");
	currentRound.textContent = "Round: " + roundNumber;
	//console.log(roundNumber);
}

function runAttempt1(){

	//use greensock to create text animation
	TweenMax.to("#attempt1Number", 1, { onUpdate:generateNumber1, onComplete:runAttempt2});

	
}

function runAttempt2(){
	TweenMax.to("#attempt2Number", 1, { onUpdate:generateNumber2, onComplete:runAttempt3});
}

function runAttempt3(){
		TweenMax.to("#attempt3Number", 1, { onUpdate:generateNumber3, onComplete:calculateWin});
}

function calculateWin(){
	//turn on go button, and bring back normal styles
	go.addEventListener("click", onClick, false);
	go.setAttribute("class", "enabled");
	var totalElement = document.getElementById("total");
	//remember to use the parseInt(x) function to convert the text to a number!
	var attempt1 = parseInt(attempt1Number.textContent);
	var attempt2 = parseInt(attempt2Number.textContent);
	var attempt3 = parseInt(attempt3Number.textContent);
	console.log(attempt1);
	var totalScore = (attempt1 + attempt2 + attempt3);
	totalElement.textContent = totalScore;
	if(totalScore > 10){
		totalElement.setAttribute("class", "totalHigh");
		TweenMax.to("#total", .2, { scaleX:1.1, scaleY:1.1, ease:Circ.easeInOut, repeat:-1, yoyo:true} );

	}else{
		totalElement.setAttribute("class", "totalLow");
	}
}

function generateNumber1(){
	//num = Math.ceil(6.3);//rounds up to next whole number
	//num = Math.floor(6.9);//rounds down to last whole number
	//create random number1
	var attempt1Number =  document.getElementById("attempt1Number"); 
	var num = Math.round( Math.random() * 10 ); 
	attempt1Number.textContent = num;
}

function generateNumber2(){
	//create random number2
	var attempt2Number =  document.getElementById("attempt2Number"); 
	var num = Math.round( Math.random() * 10 ); 
	attempt2Number.textContent = num;
}

function generateNumber3(){
	//create random number3
	var attempt3Number =  document.getElementById("attempt3Number"); 
	var num = Math.round( Math.random() * 10 ); 
	attempt3Number.textContent = num;
}









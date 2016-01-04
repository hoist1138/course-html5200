
//console.log(Math.random());

//round a number

//Math.round(Math.random()); //round the result

//how do we incease the default 0 - 1 randomness 

//console.log(Math.round(    Math.random() * 10)   );
//Math.floor(  Math.random() * 10);

//give the go button event binding
var go = document.getElementById("go");
go.addEventListener("click", onClick, false);
//make global round tracker var
var currentRound = 0;

var runningTotal = 0;

function onClick(evt){
	console.log("you have clicked...");
	//remove the click event....
	go.removeEventListener("click", onClick, false);
	go.setAttribute("class", "disabled");
	go.textContent = "Rolling Dice!";
	
	
	initialize();
	trackRounds();
	runAttempt1();
}

function initialize(){
		var total = document.getElementById("total");
		total.setAttribute("class", "nothing");
		var totalElementNum = document.getElementById("totalNumber");
		totalElementNum.textContent = null;
}
function trackRounds(){
	//increment the var roundNumber
	currentRound++;
	var currentRoundElem = document.getElementById("currentRound");
	currentRoundElem.textContent = "Round: " + currentRound;
}

function runAttempt1(){
	TweenMax.to("#attempt1Number", 1, { onUpdate:generateNumber1, onComplete:runAttempt2 });
}

function runAttempt2(){
	TweenMax.to("#attempt2Number", 1, { onUpdate:generateNumber2, onComplete:runAttempt3 });
}
function runAttempt3(){
	TweenMax.to("#attempt3Number", 1, { onUpdate:generateNumber3, onComplete:calculateWin });
}

function calculateWin(){
	console.log("finished rolling");
	//turn back on the go button
	
	go.setAttribute("class", "enabled");
	go.textContent = "Click To Try Your Luck!";
	go.addEventListener("click", onClick, false);
	//add up and show the user the three rolls
	//get a ref to the total div
	var totalElementNum = document.getElementById("totalNumber");
	
	//get refs to the attempt divs
	var attempt1Number = document.getElementById("attempt1Number");
	var attempt2Number = document.getElementById("attempt2Number");
	var attempt3Number = document.getElementById("attempt3Number");
	
	var spinner1 = parseInt(attempt1Number.textContent);
	var spinner2 = parseInt(attempt2Number.textContent);
	var spinner3 = parseInt(attempt3Number.textContent);
	
	var totalScore = (spinner1 + spinner2 + spinner3);
	
	totalElementNum.textContent = totalScore;
	
	//get running total
	var runningTotalElem = document.getElementById("runningTotalNumber");
	runningTotal += totalScore;
	runningTotalElem.textContent = "Running Total: " + runningTotal;
	
	//see if the user has won
	if (totalScore >= 10){
		//add a win style
		var total = document.getElementById("total");
		total.setAttribute("class", "totalWin");
		TweenMax.to("#total", .1, {scaleX:1.1, scaleY:1.1, yoyo:true, repeat:5, ease:Circ.easeInOut, onComplete:onFinish});
	}
	
}
function onFinish(){
	//cleanup the total div back to normal
	TweenMax.to("#total", .5, {scaleX:1, scaleY:1, ease:Circ.easeInOut});
}
function generateNumber1(){
	//create a ref
	var attempt1Number = document.getElementById("attempt1Number");
	var num = Math.round(Math.random() * 10);
	attempt1Number.textContent = num;
}

function generateNumber2(){
	var attempt2Number = document.getElementById("attempt2Number");
	var num = Math.round(Math.random() * 10);
	attempt2Number.textContent = num;
}
function generateNumber3(){
	var attempt3Number = document.getElementById("attempt3Number");
	var num = Math.round(Math.random() * 10);
	attempt3Number.textContent = num;
}





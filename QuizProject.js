var questions = [
					["Who is the president of America", "Buhari", "Trump", "Osinbajo", "Trump"],
					["What is 2 x 2", "8", "4", "7", "4"],
					["Who won last presidential election", "Buhari", "Mugbalu", "Sowore", "Buhari"],
					["CSS is used for ", "styling", "hypertext", "syntax", "styling"]

]

var question = document.getElementById("questionContainer");
var optionAContainer = document.getElementById("optionAContainer");
var optionBContainer = document.getElementById("optionBContainer");
var optionCContainer = document.getElementById("optionCContainer");
var submit = document.getElementById("submit");
var content = document.getElementById("content")
var pos = 0;
var correct=0;


function loadQuestion() {
	question.innerHTML = questions[pos][0];
	optionA = questions[pos][1];
	optionB = questions[pos][2];
	optionC = questions[pos][3];

	optionAContainer.innerHTML = '<input type="radio" name= "options" value= "' + optionA + '"   class = "options">' + optionA;
	optionBContainer.innerHTML = '<input type="radio" name="options" value= "' + optionB + '"   class = "options">' + optionB;
	optionCContainer.innerHTML = '<input type="radio" name= "options" value= "' + optionC + '"   class = "options">' + optionC;
	submit.innerHTML = '<input type="submit" name="" value= "submit" onclick="verifyQuestion()">' ;
	return
}
loadQuestion()

function verifyQuestion() {
 var options = document.getElementsByClassName("options")
 for (var i = 0; i < options.lenght; i++) {
 	//console.log(options[i].value);
 	if (options[i].checked) {
 		var selected = options[i].value;
    }
 };
 if (selected === questions[pos][4]) {
 	correct++
 }

completed();
pos++;
loadQuestion();
}

function completed() {
	if (pos >= (questions.length - 1)) {
		content.innerHTML= "<h1>Questions Completed</h1>" + correct ;
		return content ;
		//console.log(content)

	}
}

$(document).ready(function(){
    function makeMadLib(){
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var person = $("#person").val();
        var sentence = person + " really likes " + adjective + " " + noun + ".";
        $("#story").append("<p>" + sentence + "</p>");
        var object = {};
        object.noun = noun;
        object.adjective = adjective;
        object.person = person;
        return object;
    }
    $("#lib-button").on("click", function(){
        var userObject = makeMadLib();
        console.log(userObject);
    });
});

//input: elements from the form, strings the user supplies
			 //output: the sentence, a string displayed to the user
			 //Create a function called makeMadLib
				//Get the values from the form
				//Append those values concatenated in a sentence to the DOM
			//Create an event listener that listens for a click of the button with an id of lib-button
				//When clicked, the event function should call the makeMadLib function
				
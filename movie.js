$(document).ready(function(){

var film = document.getElementById("movie").value; //this variable should get the input text
var request = "http://www.omdbapi.com/?s=" + film + "&plot=full&r=json"; //this variable should get the info from the link
	document.getElementById("getMovie").onclick = function(){	//this should trigger when the search button is clicked
		document.getElementById("#results").innerHTML= movies; //i want this to give me the response results i'm trying to call from the api
		};

$.ajax({   
	method: 'GET',
	url: request,  
	dataType: "json",   
	
	success: function(response) {     
		var movies = response.Search;
		for(var i = 0; i < movies.length; i++){
			$("#results").html(movies[i].Title);   //need the i because we are going through the array of movies 
			$("#poster").attr("src", movies[i].Poster); //this isn't showing up and i don't know why
			} 
		}
	});
});

//i tried the append function to list out the things that would
//be included in the search but it didn't work
//i know this will be an incomplete but i'm submitting now anyway
//honestly being sick at the beginning of november set me back a lot
//so just trying to catch up but then also trying to catch up with life
//i don't need to explain myself just want y'all to know i'm not slacking cause i'm a slacker
//life is just busy and my time management skills are currently lacking
//loooooooool
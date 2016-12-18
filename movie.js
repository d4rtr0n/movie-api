$(document).ready(function(){

	$("#movie-title").on('keyup',(){
		var film = $('#movie-title').val();
		
	if (film.length < 2){
		$("#results").html("Cannot compute - enter at least 2 characters to print a result.")
	}	else {
		$("#results").html("");
			var request = "http://www.omdbapi.com/?s=" + film + "&plot=full&r=json"; //this variable should get the info from the link			
	}	

	})
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

//had a really hard time getting this to work myself
//used Alex's code as a basis - i'm getting a better understanding of how ajax works
//but still don't really understand how to write this code myself

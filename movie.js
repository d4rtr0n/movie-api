$(document).ready(function(){
	
	var time;

	$("#movie-title").on('keyup', function(){
		var film = $('#movie-title').val();
		
	if (film.length < 2){
		$("#results").html("Cannot compute - enter at least 2 characters to print a result.");
	}	else {
		$("#results").html("");
			var request = "http://www.omdbapi.com/?s=" + film + "&plot=full&r=json"; //this variable should get the info from the link			
	
		var resultsMovie = $("#resultsMovie"); 	//assigned for table that will display results after search

		clearTimeout(time);
		time = setTimeout(function(){

			$.ajax({   
				method: 'GET',
				url: request,   
				
				success: function(response) {     
					var movies = response.Search;
					for(var i = 0; i <= movies.length - 1; i++){
						resultsMovie.append('<tr><td>' <img src=' + movies[i].Poster + '> '</td>' + '<td>' + movies[i].Title + '</td>' + '<td>' + movies[i].Year + '</td></tr>');
						}
					}

				error: function(error) {
	                        console.error('@ERROR', error);
	                    },
	                }); 
	            }, 1000); 
					};
});

//had a really hard time getting this to work myself
//used Alex's code as a basis - i'm getting a better understanding of how ajax works
//but still don't really understand how to write this code myself
//also going for functionality more than aesthetic ftr 
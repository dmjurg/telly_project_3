$(document).ready(function(){

var showSearch = $(".showSearch")
var showButton = $(".showButton")
var url = "https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query="

showButton.on("click", function(){
  var searchString = showSearch.val().split(" ").join("+");
    $.ajax({
      url: url + searchString,
      type: "get",
      dataType: "json"
    }).done(function(response){
      var searchResults = [];
      for(var i = 0; i < response.results.length; i++){
        var name = response.results[i].name
          searchResults.push( name )
        };
      for(var i = 0; i < searchResults.length; i++){
        var showOption = searchResults[i]
        $(".show_results").append($('<input type="button" value="Add to favorites" id="fave">')).append(showOption)
        }
    }).fail(function(){
      console.log("try again.  woof.")
    });

})

$("#fave").on("click", function(){
    console.log("FAVORITED.  BAM.")
  })
    

})

// https://api.themoviedb.org/3/tv/popular?api_key=059d376b9f7dcd72de6672af1113fcf1

// https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query={userInput}

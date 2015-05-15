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
        var show = response.results[i]
        var addFave = $('<input type="button" data-api-id="' + show.id + '" data-name="' + show.name + '" data-date="' + show.first_air_date + '" value="favorite!">').on("click", favoriteShow );
        $(".show_results").append(addFave).append(show.name).append("</br>")
        }
    }).fail(function(){
      console.log("try again.  woof.")
    });

})

function favoriteShow(){

  console.log($(this).data())
  var showData = $(this).data()
  // console.log(show);
  $.ajax({
    type: "post",
    url: "/shows/favorite",
    data: {show: showData}
  }).done(function(response){
    var showName = response.name
    var showDate = response.first_air_date
    $(".my_shows").append("<li>" + showName + "(first aired: " + showDate + ")" + "</li>")
    console.log(response)
  }).fail(function(){
    console.log("nope")
  })
}


})

// https://api.themoviedb.org/3/tv/popular?api_key=059d376b9f7dcd72de6672af1113fcf1

// https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query={userInput}

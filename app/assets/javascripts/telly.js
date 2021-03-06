$(document).ready(function(){

var searchForm = $("#show-search")
var url = "https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query="

searchForm.on("submit", function(){
  event.preventDefault();
  var searchString = $(this).find('.search-term').val().split(" ").join("+");
    $.ajax({
      url: url + searchString,
      type: "get",
      dataType: "json"
    }).done(function(response){
      $(".show_results").empty();
      var searchResults = [];
      for(var i = 0; i < response.results.length; i++){
        var show = response.results[i]
        var addFave = $('<input type="button" data-api-id="' + show.id + '" data-name="' + show.name + '" data-date="' + show.first_air_date + '" data-overview="' + show.overview + '" data-image="' + show.poster_path + '" value="favorite!">').on("click", favoriteShow );
        $(".show_results").append(addFave).append(show.name).append(" (First aired: " + show.first_air_date + ")").append("</br>")
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
    if (response.message) {
      searchForm.append(response.message);
    } else {
      var showName = response.name
      var showDate = response.first_air_date
      $(".my_shows").append("<li> <a href='/shows/" + response.id + "'>" + showName + "</a>" + "<a href='/shows/" + response.id + "/unfavorite' data-method='post'> (remove)</a></li>")
      console.log(response)
    }
  }).fail(function(){
    console.log("nope")
  })
}


})

// https://api.themoviedb.org/3/tv/popular?api_key=059d376b9f7dcd72de6672af1113fcf1

// https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query={userInput}

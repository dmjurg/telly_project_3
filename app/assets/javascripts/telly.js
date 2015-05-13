$(document).ready(function(){

var showSearch = $(".showSearch")
var showButton = $(".showButton")
var url = "https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query="

// var Show = function(id, name, first_air_date, rating){
//   this.id = id;
//   this.name = name;
//   this.first_air_date = first_air_date;
//   this.rating = 0;
// }
//
// showButton.on("click", function(){
//   searchURL = showSearch.val().split(" ").join("+")
// })
//

//
// console.log(searchURL)
//
// searchModel = new Search()
//
// Search.prototype = {
//
//     fetchShows: function() {
//       $.ajax({
//         type: "get",
//         dataType: "json",
//         url: url + searchURL
//       }).done(function( response ){
//         searchModel.loadShows( response )
//       }).fail(function( response ){
//         console.log("fail")
//       })
//     },
//     loadShows: function( response ){
//       this.shows = [];
//       for(var i = 0; i < response.length; i++){
//         var show = new Show(response[i].id, response[i].name, response[i].first_air_date, 0);
//         this.shows.push( show );
//       }
//     }
//
// }



showButton.on("click", function(){
  showSearch = showSearch.val().split(" ").join("+")
  $.ajax({
    url: url + showSearch,
    type: "get",
    dataType: "json"
  }).done(function( response ){
    searchResults = [];
    for(var i = 0; i < response.results.length; i++){
      var name = response.results[i].name
        searchResults.push( name )
      }
    console.log( searchResults )  
  }).fail(function(){
    console.log("try again.  woof.")
  })

})



})

// https://api.themoviedb.org/3/tv/popular?api_key=059d376b9f7dcd72de6672af1113fcf1

// https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query={userInput}

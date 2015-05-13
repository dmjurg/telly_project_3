$(document).ready(function(){

var showSearch = $(".showSearch")
var showButton = $(".showButton")

showButton.on("click", function(){
  console.log(showSearch.val())
})


})



https://api.themoviedb.org/3/tv/popular?api_key=059d376b9f7dcd72de6672af1113fcf1

https://api.themoviedb.org/3/search/tv?api_key=059d376b9f7dcd72de6672af1113fcf1&query={userInput}

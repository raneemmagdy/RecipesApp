var posts = document.getElementById("posts");


myButtons=document.querySelectorAll('.btn-meal')
var data = {};
//console.log(myButtons)
for (let index = 0; index < myButtons.length; index++) {
  myButtons[index].addEventListener('click',function(e){
    //console.log(e.target.innerHTML)
    recipesForMeal(e.target.innerHTML)
  })
}





function recipesForMeal(meal){
var myHttp = new XMLHttpRequest();
myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
myHttp.send();
myHttp.addEventListener("load", function () {
  data = JSON.parse(myHttp.response);
  console.log(data.recipes);
  displayData();
});
}

function displayData() {
  var cartona = "";
  for (let index = 0; index < data.recipes.length; index++) {
    cartona += ` <div class="col-md-4 mb-3 text-center">
         <div class="card h-100" >
  <img src="${data.recipes[index].image_url}" class="card-img-top image"  alt="food">
  <div class="card-body">
    <h5 class="card-title">${data.recipes[index].title}</h5>
    <p class="card-text">${data.recipes[index].publisher}</p>
    <a target="_blank" href="${data.recipes[index].source_url}" class="btn btn-primary">Source</a>
  </div>
</div>
          </div>
        </div>`;
  }
  posts.innerHTML = cartona;
}
recipesForMeal("tomato")
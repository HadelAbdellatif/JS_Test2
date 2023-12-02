var httpRequest = new XMLHttpRequest();
var recipes = [];

function read_data(category){
    httpRequest.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${category}`);
    httpRequest.send();

    httpRequest.onreadystatechange = function(){

        if(httpRequest.readyState == 4){
            recipes = JSON.parse(httpRequest.response).recipes;
            DisplayData();
        }
    }
}

function DisplayData(){
    var data ="";
    for(var i=0 ; i<recipes.length ; i++){
        data+=`
        <div class="col-md-3">
        <h4 class="bs-success-text-emphasis">${recipes[i].title}</h4>
        <img src="${recipes[i].image_url}" class="img-fluid" \>
        <a href="readMore.html" class="text-decoration-none text-dark" localStorage.setItem("id", "${recipes[i].recipe_id}")>Read more</a>
      </div>
        `;
    }
    document.getElementById("recipe").innerHTML=data;
}


read_data("pizza"); // by defult

var allLinks = document.querySelectorAll(".nav-link");
for(var h=0 ; h<allLinks.length ; h++){
   allLinks[h].addEventListener('click', function(e){
    read_data(e.target.innerHTML);
});

}
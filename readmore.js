// to get data from JavaStyle.js
id = localStorage.getItem("id");
console.log(id);
food = [];

var httpRequest2 = new XMLHttpRequest();
httpRequest2.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${category}`);
httpRequest2.send();
    
httpRequest.onreadystatechange = function(){
        
    if(httpRequest2.readyState == 4){
        console.log("Ho");
        food = JSON.parse(httpRequest2.response).recipes;
        console.log(food);
        //ingrediant();
        //DisplayData2();
    }
}

function ingrediant(){
    var ingre ="\n";
    for(var j=0 ; j<food.length ; j++){
        for(var i=0 ; i<food.ingredients.length ; i++){
       
            ingre+= food[j].ingredients[i];
        
        }
    }
}


function DisplayData2(){
    var data ="";
    for(var i=0 ; i<food.length ; i++){
        data+=`
        <div class="text-center">
        <h1>${food[i].title}</h1>
        <h4>publisher: ${food[i].publisher}</h4>
        <h4>Ingredients: ${ingre}</h4>
        <h4>source_url: ${food[i].source_url}</h4>
        <h4>social_rank: ${food[i].social_rank}</h4>
        <h4>publisher_url: ${food[i].publisher_url}</h4>
        <img src="${food[i].image_url}" class="img-fluid" \>
        </div>
        `;
            }
            document.getElementById("myData").innerHTML=data;
}


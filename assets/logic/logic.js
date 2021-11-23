
function getBeverageApi() {
    
    var requestUrl = 'https://thecocktaildb.com/api/json/v1/1/random.php/';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (randBeverage) {

        console.log(randBeverage);
      if (!randBeverage.results.length) {
        console.log("We can't serve you anymore");
        
      } else {

      for (var i = 0; i < randBeverage.results.length; i++) {
        dispBeverage(beverageId.results[i]);
      }
    }
});
}

function dispBeverage(beverageId) {
  
}

  
getBeverageApi();
  // fetchButton.addEventListener('click', getApi);
  
//   for (var i = 0; i < data.length; i++) {
//   var listItem = document.createElement('li');
//           listItem.textContent = data[i].html_url;
//           repoList.appendChild(listItem);

function getFoodApi() {
	var requestUrl = "https://foodish-api.herokuapp.com/api/";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			let foodImg = data.image;
			console.log(foodImg);
		});
}
// fetchButton.addEventListener("click", getFoodApi());
getFoodApi();

//TODOs:
//change source value of image to api image

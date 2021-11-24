//Beverage API//
//globals
let beverageTitle = document.getElementById("drink-name");
let beverageImage = document.getElementById("drinkImg");
// Fetches random Beverage
function getBeverageApi() {
	var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php/";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (randBeverage) {
			dispBeverage(randBeverage);
		});
}
// Prints Beverage and image
function dispBeverage(randomeBevvy) {
	console.log(randomeBevvy);
	beverageTitle.textContent = randomeBevvy.drinks[0].strDrink;
	beverageImage.src = randomeBevvy.drinks[0].strDrinkThumb;
	console.log(randomeBevvy.drinks[0].strDrinkThumb);
}

//Music API//

function getMusicapi() {
	let requestUrl = "https://binaryjazz.us/wp-json/genrenator/v1/genre/";
	let musicAmbiance = document.querySelector("#music");
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
			//console.log(requestUrl);
		})
		.then(function (data) {
			let musicGenre = data;
			console.log(musicGenre);
			musicAmbiance.textContent =
				"Create the mood with the sounds of " +
				musicGenre;
		});
}

//Food API//

//globals
let foodImg = document.getElementById("foodImg");

function getFoodApi() {
	var requestUrl = "https://foodish-api.herokuapp.com/api/";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			foodImg.src = data.image;
			console.log(foodImg.src);
		});
}

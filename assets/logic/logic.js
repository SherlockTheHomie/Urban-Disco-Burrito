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

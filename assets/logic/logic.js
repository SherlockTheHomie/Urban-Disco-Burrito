


//let responseText = document.getElementById('response-text');
getMusicapi();
    function getMusicapi() {

    let requestUrl = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
    //console.log(requestUrl);
    })
      .then(function (data) {
        let musicGenre = data;
        console.log(musicGenre);                                              
    })
      
    }


    //fetchButton.addEventListener('click', getMusicApi);

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




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
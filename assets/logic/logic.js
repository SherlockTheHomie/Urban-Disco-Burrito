
function getBeverageApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'www.thecocktaildb.com/api/json/v1/1/random.php';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
          
        }
      )};
  
  
  fetchButton.addEventListener('click', getApi);
  
//   for (var i = 0; i < data.length; i++) {
//   var listItem = document.createElement('li');
//           listItem.textContent = data[i].html_url;
//           repoList.appendChild(listItem);
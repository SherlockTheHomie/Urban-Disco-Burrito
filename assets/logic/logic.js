//Beverage API//
//globals
let beverageTitle = document.getElementById("drink-name");
let beverageImage = document.getElementById("drinkImg");
let musicAmbiance = document.querySelector("#music");
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
let musicGenre;

function getMusicapi() {
	let requestUrl = "https://binaryjazz.us/wp-json/genrenator/v1/genre/";
	
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
			//console.log(requestUrl);
		})
		.then(function (data) {
			musicGenre = data;
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



// This is the MVP


let experienceStore = JSON.parse(localStorage.getItem("dates"))? JSON.parse(localStorage.getItem("dates")): [];
let pastPassions = document.getElementById("dropdownMenuButton1");
let pastList = document.getElementById("comboList");
let saveBtn = document.getElementById("saveBtn");
let pairingName = document.getElementById("pairingSave");
let savedDate = document.querySelectorAll("li");

saveBtn.addEventListener("click", function(e) {
	e.preventDefault();
	if (!pairingName.value) {
		alert("please enter a name for this pairing");
	} else {
	let datePairings = {
		name: pairingName.value,
	  	food: foodImg.src,
	  	drink: beverageTitle.innerText,
	  	drinkimg: beverageImage.src,
	  	music: musicGenre
	}
	experienceStore.push(datePairings);
	console.log(experienceStore);
	localStorage.setItem("dates", JSON.stringify(experienceStore));
	// noteInput.value = "";
	listBuilder();
}});

  const listBuilder = () => {
	pastList.innerHTML = "";
	experienceStore.forEach(pairingSet => {
	const note = document.createElement("li");
	note.innerHTML = pairingSet.name;
	note.setAttribute("class", "dropdown-item");
	pastList.appendChild(note);
	textClear();
	});
  };

  function textClear() {
	pairingName.value = "";
  }
  
  savedDate.addEventListener("click", loadDate)
  
//   function loadDate(this) {
// 	let loadedDate = this.currentTarget;
	

//   }
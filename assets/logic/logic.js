//Beverage API//
//globals
let foodMessage = document.querySelector("#foodMsg");
let beverageTitle = document.getElementById("drink-name");
let beverageImage = document.getElementById("drinkImg");
let musicMessage = document.querySelector("#msg");
let musicAmbiance = document.querySelector("#music");
let musicImage = document.querySelector("#musicImg");



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
	beverageTitle.textContent = "with a nip of " + randomeBevvy.drinks[0].strDrink;
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
			musicMessage.textContent = "while smoking the sounds of ";
			console.log(musicGenre);
			musicAmbiance.textContent = musicGenre; 

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
			foodMessage.textContent = "Try making this deliciousness";
			foodImg.src = data.image;
			console.log(foodImg.src);
		});
}
let musicPics = 0
let musicImages = [
	"./assets/images/trumpet-player.jpeg","./assets/images/fire-note.jpeg","./assets/images/female-musicians.jpeg","./assets/images/rose.jpeg","./assets/images/sax-player.jpeg","./assets/images/country.jpeg","./assets/images/cello.jpeg","./assets/images/dj.jpeg","./assets/images/jazz-musicians.jpeg","./assets/images/microphone.jpeg","./assets/images/piano-girl.jpeg", 
];
function imageLoop() {
	musicImage.src = musicImages[musicPics];
	
	if (musicPics < 9) {
		musicPics ++;
	} 
		else {
		musicPics = 0;
	}
	console.log(musicPics);

}

// This is the MVP


let experienceStore = JSON.parse(localStorage.getItem("dates"))? JSON.parse(localStorage.getItem("dates")): [];
let pastPassions = document.getElementById("dropdownMenuButton1");
let pastList = document.getElementById("comboList");
let saveBtn = document.getElementById("saveBtn");
let pairingName = document.getElementById("pairingSave");


// function pageLoad() {
// 	if (!localStorage) {
// 	return;
// 	} else {
// 		listBuilder();
// 	}
// }

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
	console.log(pairingSet);
	const note = document.createElement("li");
	note.innerHTML = pairingSet.name;
	note.setAttribute("class", "dropdown-item");
	note.setAttribute("id", pairingSet.name);
	console.log(note);
	pastList.appendChild(note);
	note.addEventListener("click", loadDate);
	textClear();
	});
  };

  function textClear() {
	pairingName.value = "";
  }

let dateData;

function loadDate(event) {
	console.log("option clicked");
	console.log(event);
	let pairingSet = localStorage.getItem("dates");
	pairingSet = JSON.parse(pairingSet);
	for (let i = 0; i < pairingSet.length; i++) {
		if (event.target.getAttribute("id") === pairingSet[i].name) {
		console.log(pairingSet[i]);
		let dateData = pairingSet[i]; 
		console.log(dateData);
		popDate(dateData); 
		} 		
	}	
}

function popDate(dateData) {
	pairingName.value = dateData.name;
	foodImg.src = dateData.food;
	beverageTitle.innerText = dateData.drink;
	beverageImage.src = dateData.drinkimg;
	musicAmbiance.textContent = dateData.music;
}



  
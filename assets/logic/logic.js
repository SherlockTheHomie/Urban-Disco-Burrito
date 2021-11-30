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

	// for(let i = 0;i < 9; i++){
	// 	let musicPic = 0;
	// 	musicPic++;
	// 	if(musicPic < 9){
	// 		music = 0
	// 	}
	
	
	// for (let i = 0; i < musicImages.length; i++)
    // musicImage.src = musicImages[i];
	// console.log(musicImage.src);

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
  
 //savedDate.addEventListener("click", loadDate)
  
//   function loadDate(this) {
// 	let loadedDate = this.currentTarget;
	

//   }
var searchInfo = document.querySelector(".input-value");
var searchButton = document.getElementById("submit");

var dayCurrent = document.getElementById("dayCurrent");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");

var tempCurrent = document.getElementById("tempCurrent")
var temp1 = document.getElementById("temp1");
var temp2 = document.getElementById("temp2");
var temp3 = document.getElementById("temp3");
var temp4 = document.getElementById("temp4");
var temp5 = document.getElementById("temp5");

var descCurrent = document.getElementById("descCurrent")
var desc1 = document.getElementById("description1");
var desc2 = document.getElementById("description2");
var desc3 = document.getElementById("description3");
var desc4 = document.getElementById("description4");
var desc5 = document.getElementById("description5");

var imageCurrent = document.getElementById('imgCurrent');
var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');
var image4 = document.getElementById('img4');
var image5 = document.getElementById('img5');

var windCurrent = document.getElementById('windCurrent');
var wind1 = document.getElementById('wind1');
var wind2 = document.getElementById('wind2');
var wind3 = document.getElementById('wind3');
var wind4 = document.getElementById('wind4');
var wind5 = document.getElementById('wind5');

var searchValue = 0;
var historySearch = document.getElementById("history");


function storeSearch() {
  localStorage.setItem("search " + searchValue, searchInfo.value);
  var historyButton = document.createElement("button");
  historyButton.setAttribute("class", "btn");
  historyButton.textContent = localStorage.getItem("search " + searchValue);
  historySearch.appendChild(historyButton);
  searchValue++;
};

function getWeatherApi() {

  var urlContent = searchInfo.value.replace(/\s/g, "");
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast/?q="+ urlContent +"&units=imperial&APPID=5b363f0d85d1d8e70ad27ba598ac067c";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);


      for(var i=0;i<data.list.length;i++){

        var wicon = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@4x.png";
        var date = new Date(data.list[i].dt * 1000);

        if(i===0){
          dayCurrent.textContent = date.toDateString();
          tempCurrent.textContent = "Temp: " + data.list[i].main.temp + "\u00B0 F";
          windCurrent.textContent = "Wind: " + data.list[i].wind.speed + " mph";
          descCurrent.textContent = "Description: " + data.list[i].weather[0].description;
          imageCurrent.setAttribute("src", wicon);
        }
        if(i===7){
          day1.textContent = date.toDateString();
          temp1.textContent = "Temp: " + data.list[i].main.temp + "\u00B0 F";
          wind1.textContent = "Wind: " + data.list[i].wind.speed + " mph";;
          desc1.textContent = "Description: " + data.list[i].weather[0].description;
          image1.setAttribute("src", wicon);
        }
        if(i===16){
          day2.textContent = date.toDateString();
          temp2.textContent = "Temp: " + data.list[i].main.temp + "\u00B0 F";
          wind2.textContent = "Wind: " + data.list[i].wind.speed + " mph";;
          desc2.textContent = "Description: " + data.list[i].weather[0].description;
          image2.setAttribute("src", wicon);
          }
        if(i===23){
          day3.textContent = date.toDateString();
          temp3.textContent = "Temp: " + data.list[i].main.temp + "\u00B0 F";
          wind3.textContent = "Wind: " + data.list[i].wind.speed + " mph";;
          desc3.textContent = "Description: " + data.list[i].weather[0].description;
          image3.setAttribute("src", wicon);
        }
        if(i===31){
          day4.textContent = date.toDateString();
          temp4.textContent = "Temp: " + data.list[i].main.temp + "\u00B0 F";
          wind4.textContent = "Wind: " + data.list[i].wind.speed + " mph";;
          desc4.textContent = "Description: " + data.list[i].weather[0].description;
          image4.setAttribute("src", wicon);
        }
        if(i===39){
          day5.textContent = date.toDateString();
          temp5.textContent = "Temp: " + data.list[i].main.temp + "\u00B0 F";
          wind5.textContent = "Wind: " + data.list[i].wind.speed + " mph";;
          desc5.textContent = "Description: " + data.list[i].weather[0].description;
          image5.setAttribute("src", wicon);
        }
      }
  })
  storeSearch();
}

searchButton.addEventListener('click', getWeatherApi);

historySearch.addEventListener("click", function(event){
  searchInfo.value = event.target.textContent;
  getWeatherApi();
})

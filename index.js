import { appId, appKey } from "./config.js"
const searchForm = document.querySelector("form");
const searchedRes = document.getElementsByClassName("searched-res");
const container = document.getElementsByClassName("parent");
let searchText = "";
// const appId = `e3eda108`;
// const appKey = `7ed8b37a43583917c00eb43315466b86`;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchText = e.target.getElementsByTagName("input")[0].value;
  fetchApi();
});
console.log(appId, "appId")
async function fetchApi() {
  const apil = `https://api.edamam.com/search?q=${searchText}&app_id=${appId}&app_key=${appKey}&from=0&to=20`;
  const response = await fetch(apil);
  const resPjson = await response.json();
  generateHtml(resPjson.hits);
}
function generateHtml(results) {
  container[0].classList.remove("initial");
  let generatedHtml = "";
  results.forEach((result) => {
    console.log(result);
    generatedHtml += `
       
         <div class="items">
             <img class="image"src='${result.recipe.image}' alt="">
             <div class="flex-container">
                 <h1 class="title">"${result.recipe.label}"</h1>
                 <a class=btn href="${result.recipe.url
      }" target=_blank>View Recipe</a>
             </div>
             <p class="item-data">"Calories: ${result.recipe.calories.toFixed(
        2
      )}" </p>
            
            <p class="item-data">"Health label: ${result.recipe.dietLabels.length === 0
        ? "Not found"
        : result.recipe.dietLabels
      }" </p>
         </div> 
         `;
  });

  searchedRes[0].innerHTML = generatedHtml;
}
// , { Header: "Access-Control-Allow-Origin:*", Header: "Access-Control-Allow-Headers", Header: "Origin,X-Requested-With,Content-Type,Accept" }
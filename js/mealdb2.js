// practising practising and only practising again
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    // load data
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
};

const displaySearchResult = meals => {
        // console.log(meals);
        const searchResult = document.getElementById('search-result')
       meals.forEach(meal => {
        //    console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
 </div>
        `;
        searchResult.appendChild(div);

       }); 
};

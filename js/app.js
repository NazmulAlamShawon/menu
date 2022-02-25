const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText= searchField .value;
   
    
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    searchField.value='';

    // fecth url
    fetch(url)
    .then(res =>res.json())
    .then(data => displaySearchResult(data.meals));
}



const displaySearchResult = meals =>{
  const searchResult = document.getElementById('search-result');
  
    meals.forEach(meal =>{
      console.log(meal)
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top img mx-auto img-fluid mt-2" alt="...">
      <div class="card-body">
        <h5 class="card-title ">${meal.strMeal}</h5>
        
      </div>
    </div>
      
      
      `;
      searchResult.appendChild(div)

    })
}
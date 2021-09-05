const searchFood = () => {
    const searchField = document.getElementById('searh_input');
    const searchText = searchField.value;
    console.log(searchText);
    if (searchText == 0) {
        console.log(404);
        const container = document.getElementById('food-container');
        container.innerHTML = `<p>Please write a Value</p>`
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
    }
    searchField.value = "";

}

const displayFood = foods => {
    // console.log(foods);
    const container = document.getElementById('food-container');
    container.textContent = "";//clear previous searches

    const detailsContainer = document.getElementById('details-container');
    detailsContainer.textContent = "";//clear previous details 

    foods.forEach(food => {
        console.log(food);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card" onclick="loadDetails(${food.idMeal})">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
                </div>
            </div>`;

        container.appendChild(div);

    })


}


const loadDetails = foodID => {
    console.log(foodID);
    const urlID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`;
    fetch(urlID)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

const displayDetails = foodDetails => {
    // console.log(foodDetails);
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.textContent = "";//clear previous details 
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
            <img src="${foodDetails.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${foodDetails.strMeal}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
            <a href="${foodDetails.strYoutube}" class="btn btn-primary">Watch Video</a>
            </div>
            `;
    detailsContainer.appendChild(detailDiv);
}


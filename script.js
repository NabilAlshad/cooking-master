const fetchData = (food) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals));

}
fetchData();

const search = document.getElementById('search');
search.addEventListener('click', function() {
    const inputFood = document.getElementById('input').value;
    fetchData(inputFood);

})


const displayData = (items) => {

    const foodItem = document.getElementById('Food-items');
    foodItem.innerHTML = " ";

    items.forEach(item => {

        const div = document.createElement('div');
        div.className = 'item';
        const foodInfo = `<img src="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>`;
        div.innerHTML = foodInfo;
        foodItem.appendChild(div);
        document.getElementById('input').value = '';
        div.addEventListener('click', () => {
            displayDetails(`${item.strMeal}`)
        })
    });
}


const displayDetails = (item) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(res => res.json())
        .then(data => displayDetailsInfo(data.meals[0]));

}


const displayDetailsInfo = (data) => {
    const details = document.getElementById('Food-Details');
    details.innerHTML = `
     <img src="${data.strMealThumb}"> 
     <h3  > ${data.strMeal}</h3>
     <h2> Ingredients</h2>
     <li> ${data.strIngredient1} </li>
     <li> ${data.strIngredient2} </li>
     <li> ${data.strIngredient3} </li>
     <li> ${data.strIngredient4} </li>
     <li> ${data.strIngredient5} </li>
     `;

}
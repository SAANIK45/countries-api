const getCountry = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadCountry(data[0]))
    searchField.value = ' ';
}

const loadCountry = (data) =>{
    console.log(data)
    const countryContainer = document.getElementById('country-container');
    countryContainer.textContent = ' ';
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country-details');
    countryDiv.innerHTML = `
    <img src="${data.flag}" alt="">
    <h2>name : ${data.name}</h2>
    <h2>area : ${data.area}</h2>
    <h4>population : ${data.population}</h4>
    <h5>capital : ${data.capital}</h5>
    <p>region : ${data.region}</p>
    <p>currency code : ${data.currencies[0].code}</p>
    <p>Currency name : ${data.currencies[0].name}</p>
    <p>currency symbol : ${data.currencies[0].symbol}</p>
    `
    countryContainer.appendChild(countryDiv);
}
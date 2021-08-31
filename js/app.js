const getCountry = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]))
}

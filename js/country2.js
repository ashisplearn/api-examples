function loadCountries(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country.name.common);
    // }
    const countresDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML =`
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countresDiv.appendChild(div);
        // console.log(country.name.common);
    });
};

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
};

const displayCountryDetail = country =>{
    console.log(country.name)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML =`
        <h5>${country.name.common}</h5>
        <p>${country.population}</p>
        <p>${country.capital}</p>
    `;
}




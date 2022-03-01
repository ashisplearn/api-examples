const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear field
    searchField.value = '';

    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
};

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result') 
    searchResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone)
     const div = document.createElement('div');
     div.innerHTML =`
     <div class="card border-0 bg-light rounded shadow-lg">
     <img src="${phone.image}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">${phone.brand}</p>
      <button id="btn-style" onclick="loadPhoneDetail('${phone.slug}')">Details</button>
     </div>
</div>
     `;  
     searchResult.appendChild(div)
    }); 
    // console.log(phones);
};

const loadPhoneDetail = phoneId => {
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data))
    // console.log(phoneId);
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
     <p class="card-text">Storage:${phone.mainFeatures.storage}</p>
     <p class="card-text">DisplaySize:${phone.mainFeatures.displaySize}</p>
     <p class="card-text">Chipset:${phone.mainFeatures.chipSet}</p>
     <p class="card-text">Memory:${phone.mainFeatures.memory}</p>
     <p class="card-text">${phone.releaseDate}</p>
    </div>
    `;
    phoneDetail.appendChild(div);
}
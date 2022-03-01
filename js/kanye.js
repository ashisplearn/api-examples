const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>displayQuotes(data))
}

const displayQuotes = quote =>{
    console.log(quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}


// function loadQuotes(){
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data =>displayQuotes1(data))
// };

// const displayQuotes1 = quote => {
//         // console.log(quote);
//         const quoteElement = document.getElementById('quote');
//         quoteElement.innerText = quote.quote; 
// };
const getQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showQuotes(data));

}

const showQuotes = quotes => {
    console.log(quotes);
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = quotes.quote;
}

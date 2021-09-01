const getCountrys = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
getCountrys();

const displayCountry = countrys => {
    console.log(countrys);
    const container = document.getElementById('container');
    countrys.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerHTML = `Name: ${country.name} <img src="${country.flag}" width="20px">`;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        // const btn = document.createElement('button');
        // btn.classList.add('btn');
        // btn.innerText = "More Details" ;
        // const perameter = country.name;
        // console.log(perameter);
        // btn.setAttribute('onclick' , 'dot(perameter)');
        // div.appendChild(btn);

        container.appendChild(div)

    })
}


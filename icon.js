

const iconApiKey = "APl0SgMCFy1blOVWGcJvSQzVXrBcQgZZDWRn76A7";
const loadSearchData = () => {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    console.log(searchText);
    searchBox.value = "";
    const searchUrl = `https://search.icons8.com/api/iconsets/v5/search?term=${searchText}&token=${iconApiKey}
    `;
    fetch(searchUrl)
        .then(res => res.json())
        .then(data => displaySearch(data.icons))
}
const displaySearch = searchData => {
    console.log(searchData);
    searchData.forEach(searchIcon => {
        console.log(searchIcon);
        const iconUrl = `https://api-icons.icons8.com/publicApi/icons/icon?id=${searchIcon.id}&token=${iconApiKey}`;
        console.log(iconUrl);
        fetch(iconUrl)
            .then(res => res.json())
            .then(data => displayIcon(data))
        const displayIcon = (iconData) => {
            console.log(iconData);
            const divContainer = document.getElementById('container');
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('width-75');
            iconDiv.innerHTML = `
            ${iconData.icon.svg}
            <p>${iconData.icon.commonName}</p>
            `;

            divContainer.appendChild(iconDiv);
        }


    })
}




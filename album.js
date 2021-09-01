function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displayAlbums(data))
};
 loadAlbums();
function displayAlbums(albums){
    console.log(albums[2].title);
    const albumContainer = document.getElementById('albums');
    for (const album of albums){
        const p = document.createElement('p');
        p.style.textAlign="center";
        p.innerText = album.title;
        albumContainer.appendChild(p)
    }
    
}

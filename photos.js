function getPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => placePhotos(data))
}
getPhotos();
function placePhotos (photos){
    console.log(photos);
    const container = document.getElementById('container');
    for(const photo of photos){
        const image = document.createElement('img');
        image.style.width = "50px";
        image.src = photo.url;
        container.appendChild(image);
    }
}
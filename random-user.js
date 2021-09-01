const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then( res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();

const displayUsers = (users) =>{
    const container = document.getElementById('container');
    const userInfo = users.results ;
    for(const user of userInfo){
        console.log(user);
        
        const element = document.createElement('p');
        element.innerHTML= `Name: ${user.name.title} ${user.name.first} ${user.name.last}<br>
        Email: ${user.email}<br>
        Location: ${user.location.city}, ${user.location.country}<br>
        Phone: ${user.cell}`;
        container.appendChild(element);
    }
}

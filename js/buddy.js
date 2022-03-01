// const loadBuddies = () => {
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayBuddies(data))
// };

// loadBuddies();

// const displayBuddies = data => {
//     const buddies = data.results;
//     const buddiesDiv = document.getElementById('buddies')
//     for(const buddy of buddies){
//         console.log(buddy.name.first, buddy.name.last);
//         const p = document.createElement('p');
//         p.innerText =`
//                     name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}    
//     `;
//         buddiesDiv.appendChild(p);
//     }
    // console.log(data.results)
// } 

const loadBuddies1 = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies1(data))
};
loadBuddies1();

const displayBuddies1 = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p')
        p.innerText=`
            name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email:${buddy.email};
        `;
        buddiesDiv.appendChild(p);
        console.log(buddy.name.title)
    }
    // console.log(data);
};
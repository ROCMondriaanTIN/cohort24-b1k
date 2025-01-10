// console.log('main loaded');

// let maxPoints = 60;
// let total = 0;

// for (let i = 0; i < 3; i++){
//     let grade = calculateGrade(prompt('vul het aantal punten in.'), maxPoints);
//     console.log(grade);
//     total += grade;
// }

// console.log(total / 3);

// function calculateGrade(points, maxPoints) {
//     let total = (points / maxPoints) * 9 + 1;
//     return total;
// }

// const playerOne = {
//     name: 'Bob',
//     credits: 1000,
//     level: 10,
// }

// const playerTwo = {
//     name: 'Hans',
//     credits: 2000,
//     level: 1,
// }

// const users = [];

// function addUser(name, credits, level){
//     return {
//         name: name,
//         credits: credits,
//         level: level,
//         showCreditsAndLevel: function(){
//             return this.credits +  " " + this.level;
//         }
//     }
// }

// users.push(addUser('Bob', 1000, 10));
// users.push(addUser('Hans', 2000, 20));

// console.log(users);

// for(let i = 0; i < users.length; i++){
//     const user = users[i];
//     console.log(user.name);
//     console.log(user.showCreditsAndLevel());
// }


// const tables = [
//     {
//         color: 'bruin',
//         length: 200,
//         width: 400,
//         heigth: 60
//     },
//     {
//         color: 'yellow',
//         length: 170,
//         width: 100,
//         heigth: 70
//     },
//     {
//         color: 'black',
//         length: 210,
//         width: 350,
//         heigth: 80
//     }
// ];

// for(let i = 0; i < tables.length; i++){
//     const table = tables[i];
//     console.log(table.color);
//     console.log(table.length + 'cm');
//     console.log(table.width + 'cm');
//     console.log(table.heigth + 'cm');
//     console.log('--------------------------');
// }

// i = i + 1
// i += 1
// i++

// const nameInput = document.querySelector('.name');
// const ageInput = document.querySelector('.age');
// const addBtn = document.querySelector('.add-btn');
// const usersDiv = document.querySelector('.users');
// const userArray = [];

// addBtn.addEventListener('click', addUser);

// function addUser(){
//     const name = nameInput.value;
//     const age = ageInput.value;

//     userArray.push(createUserObject(name, age));
//     console.log(userArray);
//     showUsers();
// }

// function createUserObject(name, age){
//     const user = {
//         name: name,
//         age: age
//     }
//     return user;
// }

// function showUsers(){
//     usersDiv.innerHTML = '';
//     for(let i = 0;  i < userArray.length; i++){
//         usersDiv.innerHTML += `
//         <div class="user-card">
//         <h2 class="user-name">${userArray[i].name}</h2>
//         <p class="user-age">${userArray[i].age}</p>
//         </div>
//         `
//     }

// }


// const age = 26;

// localStorage.setItem('age', age);

// const age = localStorage.getItem('age');
// console.log(age);

// const user = [
//     {
//     name: 'banza',
//     age: 88,
//     club: 'trabzonspor'    
// },
// {
//     name: 'banza',
//     age: 88,
//     club: 'trabzonspor'    
// },
// ];

// const userJSON = JSON.stringify(user);
// console.log(user);
// console.log(userJSON);

// localStorage.setItem('user', userJSON);

// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user);

// const gameOverDiv = document.querySelector('.game-over');
//Functie game over

// console.log(gameOverDiv.classList);
// gameOverDiv.classList.remove('hidden');

// setTimeout(()=>{
//     gameOverDiv.classList.add('hidden');
// }, 2000);

// gameOverDiv.style.border = '1px solid black';

fetch('https://dummyjson.com/users')
.then(JsonData => JsonData.json())
.then(data => showData(data));

const usersDiv = document.querySelector('.users');

function showData(data){
    console.log(data);
    const users = data.users;
    console.log(users);

    for(let i = 0; i < users.length; i++){
        usersDiv.innerHTML += `
        <div class="user">
        <img src="${users[i].image}">
        <p>${users[i].firstName}</p>
        </div>
        `;
    }
}
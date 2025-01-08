console.log("Main loaded");

const addUserBtn = document.querySelector('.add-users');
const userList = document.querySelector('.all-users');
const users = [];
console.log(addUserBtn);

addUserBtn.addEventListener('click', addUser);

function addUser(){
    console.log('button werkt');
    const firstName = prompt('Wat is je voornaam');
    const lastName = prompt('Wat is je achternaam');
    const age = prompt('Wat is je leeftijd');

    if(firstName === '' || lastName === '' || age === ''){
        alert('Je hebt niet alles ingevuld');
    } else{
        makeUserObject(firstName, lastName, age);
    }
}

function makeUserObject(firstName, lastName, age){
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
    }
    users.push(user);
    showUsers();
}

function showUsers(){
    userList.innerHTML = '';
    for(let i = 0; i < users.length; i++){
        const user = users[i];
        userList.innerHTML += '<li>' + user.getFullName() + ' (' + user.age + ')</li>';
    }
}
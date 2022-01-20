const createBtn = document.querySelector('#createBtn');
const getBtn = document.querySelector('#getBtn');
const updateBtn = document.querySelector('#updateBtn');
const clearBtn = document.querySelector('#clearBtn');

const users = [
    { name: 'John Doe', age: 29 },
    { name: 'Jane Doe', age: 27 }
];

//create local storage
const createLocalStorage = (name, data) => {
    localStorage.setItem(name, data);
}

//get local storage
const getLocalStorage = (name) => {
    const getLocalStorage = localStorage.getItem(name);

    const newLocalStorage = getLocalStorage !== null ? JSON.parse(getLocalStorage) : [];

    return newLocalStorage;
}

//update local storage
const updateLocalStorage = (name, newData) => {
    localStorage.setItem(name, newData);
}

//clear local storage
const clearLocalStorage = (name) => {
    localStorage.removeItem(name);
}

//creating a local storage
createBtn.addEventListener('click', () => {
    createLocalStorage('users', JSON.stringify(users));
});

//getting all the data from local storage
getBtn.addEventListener('click', () => {
    const fetchUsers = getLocalStorage('users');

    if (fetchUsers.length === 0) return console.log('no users');

    console.log(fetchUsers);
});

//updating the data in the local storage
updateBtn.addEventListener('click', () => {
    const fetchUsers = getLocalStorage('users');

    if (fetchUsers.length === 0) return console.log('no users');

    fetchUsers[0].name = 'Updated John Doe';

    updateLocalStorage('users', JSON.stringify(fetchUsers));
});

//removing a local storage
clearBtn.addEventListener('click', () => {
    clearLocalStorage('users');
});
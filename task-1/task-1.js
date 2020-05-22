import users from '../users.js';

const getUserNames = names => names.map(user => user.name);

console.log(getUserNames(users));

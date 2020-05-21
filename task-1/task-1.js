import users from '../users.js';

const getUserNames = names => {
  names.forEach(user => console.log(user.name));
};
getUserNames(users);

import users from '../users.js';

const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => user.email === email);
  return userEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

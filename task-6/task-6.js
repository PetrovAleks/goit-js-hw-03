import users from '../users.js';

const getUsersWithAge = (users, min, max) => {
  const usersAge = users.filter(user => user.age > min && user.age < max);
  return usersAge;
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

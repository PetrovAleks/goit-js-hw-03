import users from '../users.js';

const getUsersWithGender = (users, gender) => {
  const arrGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return arrGender;
};

console.log(getUsersWithGender(users, 'male'));

import users from '../users.js';

const getUsersWithEyeColor = (users, color) => {
  const colorEye = users.filter(user => user.eyeColor === color);
  return colorEye;
};

console.log(getUsersWithEyeColor(users, 'blue'));

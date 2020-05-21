import users from '../users.js';

const getInactiveUsers = users => {
  const inactiveUsers = users.filter(user => user.isActive);
  return inactiveUsers;
};

console.log(getInactiveUsers(users));

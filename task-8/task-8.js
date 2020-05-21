import users from '../users.js';

const getUsersWithFriend = (users, friendName) => {
  const bestFriends = [];
  users.filter(user =>
    user.friends.forEach(name =>
      name === friendName ? bestFriends.push(user.name) : 1,
    ),
  );
  return bestFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

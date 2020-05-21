import users from '../users.js';

const getNamesSortedByFriendsCount = users => {
  const sortedName = [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  return sortedName;
};

console.log(getNamesSortedByFriendsCount(users));

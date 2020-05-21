import users from '../users.js';

const getSortedUniqueSkills = users => {
  const arr = [];
  users.map(user => user.skills).forEach(skill => arr.push(...skill));
  return arr.filter((skill, index) => arr.indexOf(skill) === index).sort();
};

console.log(getSortedUniqueSkills(users));

const listRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

listRef.append(
  ...ingredients.map(user => {
    const li = document.createElement('li');
    li.textContent = user;

    return li;
  }),
);
console.log(listRef);

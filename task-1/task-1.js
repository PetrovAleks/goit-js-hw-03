const categoriListRef = document.querySelectorAll('#categories');

const itemCategoriRef = document.querySelectorAll('.item');

console.log(...categoriListRef);

itemCategoriRef.forEach(el =>
  console.log(
    `Категория ${el.firstElementChild.textContent} имеет ${el.lastElementChild.textContent}`,
  ),
);

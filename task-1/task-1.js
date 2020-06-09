const categoriListRef = document.querySelectorAll('#categories');

const itemCategoriRef = document.querySelectorAll('.item');

console.log(`В списке ${itemCategoriRef.length} категории.`);

itemCategoriRef.forEach(el =>
  console.log(
    `Категория ${el.firstElementChild.textContent},количество элементов  ${el.lastElementChild.children.length}`,
  ),
);

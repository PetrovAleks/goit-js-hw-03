const listRef = document.querySelector('#gallery');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const items = images.map(el => {
  return `<li class = 'list__item'><img src=${el.url} alt=${el.alt} width = '200px'></li>`;
});

listRef.insertAdjacentHTML('afterend', items);
const listItemRef = document.querySelectorAll('.list__item');
listItemRef.forEach(el => {
  el.style.listStyle = 'none';
  el.style.display = 'inline-block';
  el.style.marginRight = '100px';
});

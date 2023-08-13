const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

// listEl.style.display = 'flex';
// listEl.style.margin = '-15px';

console.dir(listEl);

const markup = images.map(({url, alt}) => `<li class = "gallery_item">
  <img class = 'gallery_img' src='${url}' alt='${alt}'
</li>`).join('');

listEl.insertAdjacentHTML('beforeend', markup);


// const galleryItemEl = document.querySelectorAll('gallery_item');

// galleryItemEl.style.list-style: 'none';
// galleryItemEl.style.width = 'calc((100% - 3 * 30px) / 3)';
// galleryItemEl.style.margin = '15px';

// const imageEl = document.querySelectorAll('gallery_img');

// imageEl.style.display = ' block';
// imageEl.style.max-width = 'calc((100% - 3 * 30px) / 3)';
// imageEl.style.heght = '100%';


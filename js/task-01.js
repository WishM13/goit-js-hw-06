const itemEl = document.getElementById('categories');
console.log(`Number of categories: ${itemEl.children.length}`);
// console.log(itemEl.children);

[...itemEl.children].forEach(element => {
    const categoryTitleEl = element.firstElementChild;
    // console.log(titleEl.textContent);

    const countLiEl = categoryTitleEl.nextElementSibling.children;
    // console.log(countLiEl.length);  

    console.log(`Category: ${categoryTitleEl.textContent}`)
    console.log(`Elements: ${countLiEl.length}`)
});

const list = document.querySelectorAll('.item')
console.log(`Number of categories: ${list.length}`);

list.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
})

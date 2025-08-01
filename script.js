// Function to remove 'a', 'an', 'the' from the beginning for sorting
function stripArticle(title) {
  return title.replace(/^(a |an |the )/i, '').trim();
}

let input = prompt("Enter band titles separated by commas:");
let titles = input.split(',').map(title => title.trim()).filter(Boolean);

titles.sort((a, b) => {
  const strippedA = stripArticle(a.toLowerCase());
  const strippedB = stripArticle(b.toLowerCase());
  return strippedA.localeCompare(strippedB);
});


const ul = document.getElementById("band");
titles.forEach(title => {
  const li = document.createElement("li");
  li.textContent = title;
  ul.appendChild(li);
});

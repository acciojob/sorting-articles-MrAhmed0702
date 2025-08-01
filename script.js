const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(title) {
  return title.replace(/^(a |an |the )/i, '').trim();
}

const titles = bands.sort((a, b) => {
  const strippedA = stripArticle(a.toLowerCase());
  const strippedB = stripArticle(b.toLowerCase());
  return strippedA.localeCompare(strippedB);
});


const ul = document.getElementById("band");
titles.forEach(title => {
  const li = document.createElement("li");
  li.textContent = title;
li.style.listStyleType = 'square';
  ul.appendChild(li);
});

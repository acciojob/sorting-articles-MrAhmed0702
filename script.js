function stripArticle(title) {
      return title.replace(/^(a |an |the )/i, '').trim();
    }

    function sortTitles() {
      const input = document.getElementById('titleInput').value;
      const titles = input.split(',').map(t => t.trim()).filter(Boolean);

      const sorted = titles.sort((a, b) => {
        const strippedA = stripArticle(a).toLowerCase();
        const strippedB = stripArticle(b).toLowerCase();
        return strippedA.localeCompare(strippedB);
      });

      const list = document.getElementById('bandList');
      list.innerHTML = ''; 

      sorted.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        list.appendChild(li);
      });
    }
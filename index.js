const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const data = [
  { name: "사과", link: "./apple.html" },
  { name: "바나나" },
  { name: "체리" },
  { name: "자두" },
  { name: "포도" },
];

searchInput.addEventListener("input", performSearch);

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm && searchTerm != '') {
    searchResults.style.display = 'block';

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    renderResults(filteredData);
  } else {
    searchResults.style.display = 'none';
  }
}

function renderResults(results) {
  searchResults.innerHTML = "";

  results.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
    searchResults.appendChild(li);
  });
}

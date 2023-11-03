const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", performSearch);

searchInput.addEventListener("focus", function () {
  if (searchInput.value !== "") {
    searchResults.style.display = "block";
  }
});
// searchInput에서 포커스가 벗어났을 때
searchInput.addEventListener("blur", function () {
  if (searchInput.value == "") {
    searchResults.style.display = "none";
  }
});

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm && searchTerm != "") {
    searchResults.style.display = "block";

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    renderResults(filteredData);
  } else {
    searchResults.style.display = "none";
  }
}

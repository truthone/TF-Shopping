const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const data = [
  { name: "사과", link: "./apple.html" },
  { name: "바나나" },
  { name: "체리" },
  { name: "자두" },
  { name: "포도" },
  // 데이터 예시
];

searchInput.addEventListener("input", performSearch);

// 검색 함수 구현
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm || searchTerm != '') {
      // 데이터를 필터링하여 검색 결과 어레이 생성
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      // 검색 결과를 화면에 표시
      renderResults(filteredData);
  }
}

// 검색 결과를 화면에 렌더링하는 함수
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

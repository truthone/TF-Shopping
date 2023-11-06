// 가짜 상품 데이터
const products = [
  {
    productName: "상품 1",
    price: 10000,
    discountPrice: 8000,
    productId: "p1",
    imageUrl: "https://media.graphassets.com/eAeN0gSqTuuqYyGHO01x",
  },
  {
    productName: "상품 1",
    price: 10000,
    discountPrice: 8000,
    productId: "p2",
    imageUrl: "https://media.graphassets.com/eAeN0gSqTuuqYyGHO01x",
  },
  {
    productName: "상품 1",
    price: 10000,
    discountPrice: 8000,
    productId: "p3",
    imageUrl: "https://media.graphassets.com/eAeN0gSqTuuqYyGHO01x",
  },
  {
    productName: "상품 1",
    price: 10000,
    discountPrice: 8000,
    productId: "p4",
    imageUrl: "https://media.graphassets.com/eAeN0gSqTuuqYyGHO01x",
  },
  {
    productName: "상품 1",
    price: 10000,
    discountPrice: 8000,
    productId: "p5",
    imageUrl: "https://media.graphassets.com/eAeN0gSqTuuqYyGHO01x",
  },
];

// 상품을 HTML로 변환하는 함수
function createProductCard(product) {
  return `
    <div class="product-card" id="${product.productId}">
      <h2 class="product-name">${product.productName}</h2>
      <div class="prices">
        <span class="original-price">${product.price.toLocaleString()}원</span>
        <span class="discount-price">${product.discountPrice.toLocaleString()}원</span>
      </div>
    </div>
  `;
}

// 상품 데이터를 사용하여 상품 카드를 생성하고 페이지에 추가
function renderProducts(products) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = products.map(createProductCard).join("");
}

// 상품 렌더링
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});

function createProductCard(product) {
  return `
    <div class="product-card" id="${product.productId}">
      <h2 class="product-name">${product.productName}</h2>
      <div class="prices">
        <span class="original-price">${product.price.toLocaleString()}원</span>
        <span class="discount-price">${product.discountPrice.toLocaleString()}원</span>
      </div>
    </div>
  `;
}

function renderProducts(products) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = products.map(createProductCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});

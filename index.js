// 상품을 HTML로 변환하는 함수

function createProductCard(product) {
  return `
        <div class="product-card item1" id="${product.productId}">
        <img class="product-thumbnail" id="brand1-thumb1" src="${
          product.imageUrl
        }"></div>
        <div class="flex-between">
            <div class="product-info">
                <a href="#" class="product-name">${product.productName}</a>
                <div class="price-info">
                    <span class="original-price">${product.price.toLocaleString()}원</span>
                    <span class="discount-price">${product.discountPrice.toLocaleString()}원</span>
                </div>
            </div>
            <button>
                <span class="icon material-symbols-rounded button-add-cart"
                    onclick="addToCart('팔론 와인잔')">add_Circle
                </span>
            </button>
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

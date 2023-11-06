import { promotion } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(promotion[0]);
});

function createProductCard(product, itemSequence) {
  return `
  <div class="item item${itemSequence}" id="${product.productId}">
    <img class="item-thumbnail" src="${
      product.imageUrl
    }" alt="상품썸네일이미지" />
    <div class="flex-between">
      <div class="item-info">
          <a href="#" class="item-name">${product.productName}</a>
          <div class="price-info">
            <p class="item-price">${product.price.toLocaleString()}원</p>
            <p class="saled-price">${product.discountPrice.toLocaleString()}원</p>
          </div>
      </div>
      <button>
          <span class="icon material-symbols-rounded button-add-cart"
              onclick="addToCart('${product.productName}')">add_Circle
          </span>
      </button>
    </div>
  </div>
  `;
}

function renderProducts(promotion) {
  const productContainer =
    document.getElementsByClassName("productContainer")[0];
  const products = promotion.products;
  let itemSequence = 0;
  const result = products
    .map((product) => {
      itemSequence++;
      if (itemSequence == 5) itemSequence = 1;
      return createProductCard(product, itemSequence);
    })
    .join("");
  console.log(result);
  productContainer.innerHTML += result;
}

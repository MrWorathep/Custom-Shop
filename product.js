const urlParams = new URLSearchParams(window.location.search);
const idproduct = urlParams.get("id");
const countproduct = localStorage.getItem("count");
const userId = localStorage.getItem("id");
const token = localStorage.getItem("token");
var text = "";
if (token === null) {
  localStorage.clear(), (window.location.href = "login.html");
} else {
  axios({
    method: "get",
    url: "https://fakestoreapi.com/products/" + idproduct,
  })
    .then((result) => {
      text +=
        `<div class="margin-products imgproduct">` +
        `<img class="singleproduct" src="` +
        result.data.image +
        `"/>` +
        `<div class="rate-count">` +
        `<div class="rate">` +
        `<span class="material-symbols-outlined">visibility</span>` +
        `<span>` +
        result.data.rating.count +
        `</span>` +
        `</div>` +
        `<span>Rating : ` +
        result.data.rating.rate +
        `</span>` +
        `</div>` +
        `</div>` +
        `<div class="margin-products detailproduct">` +
        `<div class="columndetail">` +
        `<div class="margin-products fontbold">` +
        result.data.title +
        `</div>` +
        `<div class="info-row">` +
        `<span class="info-label">Category</span>` +
        `<span class="info-value">` +
        result.data.category +
        `</span>` +
        `</div>` +
        `<div class="info-row detail-textarea">` +
        `<span class="info-label">Product Detail</span>` +
        `<span class="info-value">` +
        result.data.description +
        `</span>` +
        `</div>` +
        `</div>` +
        `<div class="margin-products priceproduct">` +
        `<div class="margin-topbottom">Price : ` +
        result.data.price +
        `$</div>` +
        `<div class="box-button margin-topbottom">` +
        `<div class="box-add">` +
        `<button class="btn-remove-add" onclick="removeItem()">-</button>` +
        `<input name="addproduct" class="ipt-add" value="0"/>` +
        `<button class="btn-remove-add" onclick="addItem()">+</button>` +
        `<button class="btn-add" onclick="addproduct()">Add</button>` +
        `</div>` +
        `<button class="buy">BUY</button>` +
        `</div>` +
        `</div>` +
        `</div>`;

      document.getElementById("data").innerHTML = text;
      count_product();
    })
    .catch((error) => console.error(error));
}
/* Fungtion addItem */
function addItem() {
  let elements = document.getElementsByName("addproduct");
  elements[0].value = parseInt(elements[0].value) + 1;
}
/* Fungtion removeItem */
function removeItem() {
  let elements = document.getElementsByName("addproduct");
  if (elements[0].value < 1) {
    elements[0].value = 0;
  } else {
    elements[0].value = parseInt(elements[0].value) - 1;
  }
}
/* Function Add Product */
function addproduct() {
  let elements = document.getElementsByName("addproduct");
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const currentDate = year + "-" + month + "-" + day;
  if (parseInt(elements[0].value) < 1 || parseInt(elements[0].value) === null) {
    var countProduct = null;
    alert("Please enter the correct number.");
  } else {
    var countProduct = parseInt(elements[0].value);
    axios
      .post("https://fakestoreapi.com/carts", {
        userId: userId,
        date: currentDate,
        products: [{ productId: parseInt(userId), quantity: countProduct }],
      })
      .then((response) => {
        alert("Add product successfully.");
        localStorage.setItem("count", parseInt(countproduct) + 1);
        count_product();
      })
      .catch((error) => {
        console.log(err);
      });
  }
}
/* Function Logout */
function logout() {
  localStorage.clear(), (window.location.href = "login.html");
}
/* Function Profile */
function profile() {
  window.location.href = "profile.html?id=" + userId;
}
/* Function Cart_Countproducts */
function count_product() {
  const countproduct = localStorage.getItem("count");
  var text = `<div class="cart-count">` + countproduct + `</div>`;
  document.getElementById("count-product").innerHTML = text;
}
/* Function Cart */
function cart() {
  window.location.href = "cart.html";
}
/* Function Homepage */
function homepage() {
  window.location.href = "index.html";
}

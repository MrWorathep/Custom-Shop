const token = localStorage.getItem("token");
const userid = localStorage.getItem("id");
const countproduct = localStorage.getItem("count");
/* Function Products */
function products(value) {
  var text = "";
  axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  })
    .then((result) => {
      /* Men's Clothing */
      if (value === "men's clothing") {
        result.data.forEach((element) => {
          if (element.category === value) {
            text +=
              `<div class="productmargin">` +
              `<div class="productmargin" onclick="product_id(` +
              element.id +
              `)">` +
              `<img class="borderproducts" src="` +
              element.image +
              `"/>` +
              `<div class="title-price">` +
              element.title +
              `</div>` +
              `</div>` +
              `<div class="index-add">` +
              `<div>` +
              `<div style="display:flex;">` +
              `<button class="index-remove-add" onclick="removeItem(` +
              element.id +
              `)">-</button>` +
              `<input name="` +
              element.id +
              `" class="index-ipt" value="0"/>` +
              `<button class="index-remove-add" onclick="addItem(` +
              element.id +
              `)">+</button>` +
              `<button class="btn-add-index margin-left" onclick="addproduct()">Add</button>` +
              `</div>` +
              `<div class="margin-topbottom index-price">` +
              element.price +
              `$` +
              `</div>` +
              `</div>` +
              `</div>` +
              `</div>`;
          }
        });
        /* Women's Clothing */
      } else if (value === "women's clothing") {
        result.data.forEach((element) => {
          if (element.category === value) {
            text +=
              `<div class="productmargin">` +
              `<div class="productmargin" onclick="product_id(` +
              element.id +
              `)">` +
              `<img class="borderproducts" src="` +
              element.image +
              `"/>` +
              `<div class="title-price">` +
              element.title +
              `</div>` +
              `</div>` +
              `<div class="index-add">` +
              `<div>` +
              `<div style="display:flex;">` +
              `<button class="index-remove-add" onclick="removeItem(` +
              element.id +
              `)">-</button>` +
              `<input name="` +
              element.id +
              `" class="index-ipt" value="0"/>` +
              `<button class="index-remove-add" onclick="addItem(` +
              element.id +
              `)">+</button>` +
              `<button class="btn-add-index margin-left" onclick="addproduct()">Add</button>` +
              `</div>` +
              `<div class="margin-topbottom index-price">` +
              element.price +
              `$` +
              `</div>` +
              `</div>` +
              `</div>` +
              `</div>`;
          }
        });
        /* Jewelery */
      } else if (value === "jewelery") {
        result.data.forEach((element) => {
          if (element.category === value) {
            text +=
              `<div class="productmargin">` +
              `<div class="productmargin" onclick="product_id(` +
              element.id +
              `)">` +
              `<img class="borderproducts" src="` +
              element.image +
              `"/>` +
              `<div class="title-price">` +
              element.title +
              `</div>` +
              `</div>` +
              `<div class="index-add">` +
              `<div>` +
              `<div style="display:flex;">` +
              `<button class="index-remove-add" onclick="removeItem(` +
              element.id +
              `)">-</button>` +
              `<input name="` +
              element.id +
              `" class="index-ipt" value="0"/>` +
              `<button class="index-remove-add" onclick="addItem(` +
              element.id +
              `)">+</button>` +
              `<button class="btn-add-index margin-left" onclick="addproduct()">Add</button>` +
              `</div>` +
              `<div class="margin-topbottom index-price">` +
              element.price +
              `$` +
              `</div>` +
              `</div>` +
              `</div>` +
              `</div>`;
          }
        });
        /* Electronics */
      } else if (value === "electronics") {
        result.data.forEach((element) => {
          if (element.category === value) {
            text +=
              `<div class="productmargin">` +
              `<div class="productmargin" onclick="product_id(` +
              element.id +
              `)">` +
              `<img class="borderproducts" src="` +
              element.image +
              `"/>` +
              `<div class="title-price">` +
              element.title +
              `</div>` +
              `</div>` +
              `<div class="index-add">` +
              `<div>` +
              `<div style="display:flex;">` +
              `<button class="index-remove-add" onclick="removeItem(` +
              element.id +
              `)">-</button>` +
              `<input name="` +
              element.id +
              `" class="index-ipt" value="0"/>` +
              `<button class="index-remove-add" onclick="addItem(` +
              element.id +
              `)">+</button>` +
              `<button class="btn-add-index margin-left" onclick="addproduct()">Add</button>` +
              `</div>` +
              `<div class="margin-topbottom index-price">` +
              element.price +
              `$` +
              `</div>` +
              `</div>` +
              `</div>` +
              `</div>`;
          }
        });
      } else {
        /* All Products */
        result.data.forEach((element) => {
          text +=
            `<div class="productmargin">` +
            `<div class="productmargin" onclick="product_id(` +
            element.id +
            `)">` +
            `<img class="borderproducts" src="` +
            element.image +
            `"/>` +
            `<div class="title-price">` +
            element.title +
            `</div>` +
            `</div>` +
            `<div class="index-add">` +
            `<div>` +
            `<div style="display:flex;">` +
            `<button class="index-remove-add" onclick="removeItem(` +
            element.id +
            `)">-</button>` +
            `<input name="` +
            element.id +
            `" class="index-ipt" value="0"/>` +
            `<button class="index-remove-add" onclick="addItem(` +
            element.id +
            `)">+</button>` +
            `<button class="btn-add-index margin-left" onclick="addproduct(` +
            element.id +
            `)">Add</button>` +
            `</div>` +
            `<div class="margin-topbottom index-price">` +
            element.price +
            `$` +
            `</div>` +
            `</div>` +
            `</div>` +
            `</div>`;
        });
      }
      count_product();
      document.getElementById("productlist").innerHTML = text;
    })
    .catch((error) => console.error(error));
}
/* Function Add Product */
function addproduct(id) {
  if (token === null) {
    localStorage.clear(), (window.location.href = "login.html");
  } else {
    let elements = document.getElementsByName(id);
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const currentDate = year + "-" + month + "-" + day;
    if (
      parseInt(elements[0].value) < 1 ||
      parseInt(elements[0].value) === null
    ) {
      var countProduct = null;
      alert("Please enter the correct number.");
    } else {
      var countProduct = parseInt(elements[0].value);
      axios
        .post("https://fakestoreapi.com/carts", {
          userId: parseInt(userid),
          date: currentDate,
          products: [{ productId: id, quantity: countProduct }],
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
}
/* Fungtion addItem */
function addItem(id) {
  let elements = document.getElementsByName(id);
  elements[0].value = parseInt(elements[0].value) + 1;
}
/* Fungtion removeItem */
function removeItem(id) {
  let elements = document.getElementsByName(id);
  if (elements[0].value < 1) {
    elements[0].value = 0;
  } else {
    elements[0].value = parseInt(elements[0].value) - 1;
  }
}
/* Function Logout */
function logout() {
  localStorage.clear(), (window.location.href = "login.html");
}
/* Function SearchProduct From Id */
function product_id(idproduct) {
  window.location.href = "product.html?id=" + idproduct;
}
/* Function Profile */
function profile() {
  window.location.href = "profile.html?id=" + userid;
}
/* Function Cart_Countproducts */
function count_product() {
  if (token === null) {
    var login = `<div class="mouse margin-left" onclick="logout()">Login</div>`;
    document.getElementById("login-logout").innerHTML = login;
  } else {
    const countproduct = localStorage.getItem("count");
    var login = `<div class="mouse margin-left" onclick="logout()">Logout</div>`;
    var text = `<div class="cart-count">` + countproduct + `</div>`;
    document.getElementById("count-product").innerHTML = text;
    document.getElementById("login-logout").innerHTML = login;
  }
}
/* Function Cart */
function cart() {
  window.location.href = "cart.html";
}
/* Function Homepage */
function homepage() {
  window.location.href = "index.html";
}
products();

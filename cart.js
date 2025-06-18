const userId = localStorage.getItem("id");
const countproduct = localStorage.getItem("count");
const token = localStorage.getItem("token");
const array = [];

async function idProducts() {
  if (token === null) {
    localStorage.clear();
    window.location.href = "login.html";
  } else {
    let text = "";
    let id = 0;
    const dataUser = axios.get("https://fakestoreapi.com/carts/user/" + userId);
    await dataUser.then(async (res) => {
      const data = res.data;
      for (let i in data) {
        for (let j in data[i].products) {
          const productId = data[i].products[j].productId;
          const idCart = {
            cartId: data[i].id,
            productId: data[i].products[j].productId,
            quantity: data[i].products[j].quantity,
            index: id,
          };
          const dataProduct = axios
            .get("https://fakestoreapi.com/products/" + productId)
            .then((value) => {
              return { ...value, idCart };
            });
          array.push(dataProduct);
          id++;
        }
      }
    });
    Promise.all(array).then((res) => {
      for (let i in res) {
        const dataProduct = res[i].data;
        const cartId = res[i].idCart;
        text +=
          `<div class="body-product-cart">
                  <div class="flex-cart-product">
                    <div class="body-img-cart margin-cart">
                      <img class="flex1-img-cart" src="` +
          dataProduct.image +
          `"/>
                    </div>
                    <div class="title-category">
                      <div class="margin-cart">` +
          dataProduct.title +
          `</div>
                      <div class="margin-cart">Category: ` +
          dataProduct.category +
          `</div>
                    </div>
                    <div class="count-price">
                      <div class="margin-cart flexquantity">
                        <button class="padding-quantity" onclick="removeItem(` +
          cartId.index +
          "," +
          dataProduct.price +
          `)">-</button>
                        <input name="` +
          cartId.index +
          `" class="quantity" value="` +
          cartId.quantity +
          `" onchange="changeInput(` +
          cartId.index +
          "," +
          dataProduct.price +
          "," +
          cartId.quantity +
          `)"/>
                        <button class="padding-quantity" onclick="addItem(` +
          cartId.index +
          "," +
          dataProduct.price +
          `)">+</button>
                      </div>
                      <div class="margin-cart setmargin-top-cart">
                        <div id="` +
          cartId.index +
          `">Price: ` +
          (dataProduct.price * cartId.quantity).toFixed(2) +
          `$</div>
                      </div>
                    </div>
                    <div class="done-del">
                      <span class="material-symbols-outlined update-quantity mouse" onclick="update(` +
          dataProduct.id +
          "," +
          userId +
          "," +
          cartId.productId +
          "," +
          cartId.index +
          `)">
                        done
                      </span>
                      <span class="material-symbols-outlined del-quantity mouse" onclick="delSinggle(` +
          dataProduct.id +
          "," +
          userId +
          "," +
          cartId.productId +
          "," +
          cartId.index +
          `)">
                        delete
                      </span>
                    </div>
                  </div>
                </div>`;
      }
      document.getElementById("data").innerHTML = text;
      count_product();
    });
  }
}

function changeInput(idproduct, price) {
  const elements = document.getElementsByName(idproduct);
  if (elements[0].value === "") elements[0].value = 0;
  document.getElementById(idproduct).innerHTML =
    `<div id="${idproduct}">Price: ` +
    (price * elements[0].value).toFixed(2) +
    `$</div>`;
}

function addItem(idproduct, price) {
  const elements = document.getElementsByName(idproduct);
  if (elements[0].value === "") elements[0].value = 0;
  elements[0].value = parseInt(elements[0].value) + 1;
  document.getElementById(idproduct).innerHTML =
    `<div id="${idproduct}">Price: ` +
    (price * elements[0].value).toFixed(2) +
    `$</div>`;
}

function removeItem(idproduct, price) {
  const elements = document.getElementsByName(idproduct);
  if (elements[0].value === "") elements[0].value = 0;
  elements[0].value = Math.max(0, parseInt(elements[0].value) - 1);
  document.getElementById(idproduct).innerHTML =
    `<div id="${idproduct}">Price: ` +
    (price * elements[0].value).toFixed(2) +
    `$</div>`;
}

function update(id, idUser, idProduct, count) {
  const elements = document.getElementsByName(count);
  const date = new Date().toISOString().split("T")[0];
  const quantity =
    parseInt(elements[0].value) < 1 ? null : parseInt(elements[0].value);

  axios
    .put("https://fakestoreapi.com/carts/" + id, {
      userId: idUser,
      date,
      products: [{ productId: idProduct, quantity }],
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function delSinggle(id, idUser, idProduct, count) {
  const date = new Date().toISOString().split("T")[0];
  axios
    .put("https://fakestoreapi.com/carts/" + id, {
      userId: idUser,
      date,
      products: [{ productId: idProduct, quantity: null }],
    })
    .then(() => {
      resetNetworkState();
      idProducts();
    })
    .catch((err) => console.log(err));
}

async function delAllProduct(id) {
  if (confirm("Confirm delete all products!")) {
    await axios
      .get("https://fakestoreapi.com/carts/user/" + id)
      .then((res) => {
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          axios.delete("https://fakestoreapi.com/products/" + data[0].id);
        }
      })
      .catch((err) => console.log(err));
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function profile() {
  window.location.href = "profile.html?id=" + userId;
}

function cart() {
  window.location.href = "cart.html";
}

function homepage() {
  window.location.href = "index.html";
}

function count_product() {
  const count = countproduct ? parseInt(countproduct) : 0;
  document.getElementById("count-product").innerHTML =
    `<div class="cart-count">` + count + `</div>`;
}

window.onload = idProducts;

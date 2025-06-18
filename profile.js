const token = localStorage.getItem("token");
const urlParams = new URLSearchParams(window.location.search);
const iduser = urlParams.get("id");
const countproduct = localStorage.getItem("count");
if (token === null) {
  localStorage.clear(), (window.location.href = "login.html");
} else {
  axios({
    method: "get",
    url: "https://fakestoreapi.com/users/" + iduser,
  })
    .then(function (res) {
      var text = `
                    <div class="grid-body-profile">
                      <div class="margin-profile">
                        <div class="margin-text-profile">Username</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.username}" />
                        </div>
                      </div>
                      <div class="margin-profile">
                        <div class="margin-text-profile">Password</div>
                        <div class="body-input">
                          <input type="password" class="input-profile" value="${res.data.password}" />
                        </div>
                      </div>
                    </div>

                    <div class="grid-body-profile">
                      <div class="margin-profile">
                        <div class="margin-text-profile">Firstname</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.name.firstname}" />
                        </div>
                      </div>
                      <div class="margin-profile">
                        <div class="margin-text-profile">Lastname</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.name.lastname}" />
                        </div>
                      </div>
                    </div>

                    <div class="margin-profile">
                      <div class="margin-text-profile">Email</div>
                      <div class="body-input">
                        <input class="input-profile-email" value="${res.data.email}" />
                      </div>
                    </div>

                    <div class="grid-body-profile">
                      <div class="margin-profile">
                        <div class="margin-text-profile">Address number</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.address.number}" />
                        </div>
                      </div>
                      <div class="margin-profile">
                        <div class="margin-text-profile">Street</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.address.street}" />
                        </div>
                      </div>
                      <div class="margin-profile">
                        <div class="margin-text-profile">City</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.address.city}" />
                        </div>
                      </div>
                      <div class="margin-profile">
                        <div class="margin-text-profile">Zip code</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.address.zipcode}" />
                        </div>
                      </div>
                    </div>

                    <div class="grid-body-profile">
                      <div class="margin-profile">
                        <div class="margin-text-profile">Phone number</div>
                        <div class="body-input">
                          <input class="input-profile" value="${res.data.phone}" />
                        </div>
                      </div>
                      <div class="body-apply-profile">
                        <div class="flex-apply-profile">
                          <button class="apply-profile">Apply</button>
                        </div>
                      </div>
                    </div>
                  `;
      document.getElementById("data").innerHTML = text;
      count_product();
    })
    .catch(function (error) {
      console.log(error);
    });
}
/* Function Logout */
function logout() {
  localStorage.clear(), (window.location.href = "login.html");
}
/* Function Profile */
function profile() {
  window.location.href = "profile.html?id=" + userid;
}
/* Function Cart_Countproducts */
function count_product() {
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

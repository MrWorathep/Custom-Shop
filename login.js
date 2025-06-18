function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  axios
    .post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    })
    .then(function (res) {
      localStorage.setItem("token", res.data.token);
      checkUser();
    })
    .catch(function (error) {
      alert(error.response.data);
    });
}

function checkUser() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  axios.get("https://fakestoreapi.com/users").then(function (res) {
    let found = false;
    res.data.forEach((e) => {
      if (e.username === username && e.password === password) {
        found = true;
        localStorage.setItem("id", e.id);
        const userid = e.id;
        let countproduct = 0;
        axios.get("https://fakestoreapi.com/carts").then(function (res) {
          res.data.forEach((e) => {
            if (e.userId === userid) {
              countproduct += e.products.length;
            }
          });
          localStorage.setItem("count", countproduct);
          success();
        });
      }
    });
    if (!found) {
      alert("Invalid username or password");
    }
  });
}

function success() {
  alert("Login Successfully!");
  window.location.href = "index.html";
}

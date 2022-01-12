const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//위와 같은 말
//const loginInput = document.querySelector("#login-form input");
//const loginInput = document.querySelector("#login-form button");


function handleloginBtnClick(){

    console.log(loginInput.value);
    console.log("click");

}
loginButton.addEventListener("click", handleloginBtnClick)
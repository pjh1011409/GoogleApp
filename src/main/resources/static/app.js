const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 반복되는 변수들을 선언하여 쓴다. 대문자 변수로

//일반적으로 string만 포함된 변수는 대문자로 표기
//위와 같은 말
//const loginInput = document.querySelector("#login-form input");
//const loginInput = document.querySelector("#login-form button");


function onLoginSubmit(event){

    event.preventDefault(); // 브라우저 기능 막기 (동기화 막기)
    loginForm.classList.add(HIDDEN_CLASSNAME); //(form 에 hidden 을 추가 why? 로그인 하면 로그인창이 안보여야지)
    const username = loginInput.value; //(username에 입력 값을 저장)
    localStorage.setItem(USERNAME_KEY, username); //스토리지에 username의 값 (set)저장
    //greeting.innerText = "Hello " + username;
    paintGreeting(username); // greeting 문구가 나타나게 한다. (paintGreeting함수를 불러온다. )

}
function paintGreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 의 hidden 기능을 없애서 greeting의 문구가 보이게 한다.
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //savedUsername 변수에 저장되어있는 값을 (get)가져온다.

if(savedUsername === null) {
    //show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 저장되어있는 값이 없다면 로그인 해야지 = form 의 hidden 기능을 없애서 form 기능 활성화
    loginForm.addEventListener("submit", onLoginSubmit); // submit 기능을 기다리다가 submit 이 일어나면 onloginSubmit이 호출
    // 여기가 로그인 창이 뜨는 부분, 따라서 addEventlistner 가 위에 있는 onloginSubmit 함수를 부른다.
                                          
}
else{
    //show the greetingss
    paintGreeting(savedUsername); // greeting 의 hidden 기능을 없애서 greeting의 문구가 보이게 한다.
}


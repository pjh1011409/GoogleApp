const clock = document.querySelector("h2#clock");

function getClock(){
   const date = new Date();
   const hours  =   String(date.getHours()).padStart(2, "0"); //숫자를 문자로 변환해야 padStart 가능
   const minutes  = String(date.getMinutes()).padStart(2, "0"); //문자길이를 2까지, 채워지지 않는다면 앞에 0추가
   const seconds  = String(date.getSeconds()).padStart(2, "0");

   clock.innerText = `${hours}:${minutes}:${seconds}`;

}



getClock(); //즉시 함수 실행 -> 이걸 안넣어주면 밑에 코드가 실행될때 00000값부터 나타내기 때문에
setInterval(getClock, 1000); // 그리고 나서 매초마다 getclock을 다시 실행시키는중

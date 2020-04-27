if(true){
    console.log(true)
}else{
    console.log(true)
}

//삼항연산자
var a = true;
var result = (a) ? "ok" : "not ok";
console.log(result);

//switch도 가능

//for문이나 while문을 사용해서 반복문을 구현할수있다!
function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

//
var arr = [1,2,3];
for(var i = 0, len = arr.length; i < len; i++){}

/*
reverse itertion
이런식으로 for문을 거꾸로해서 성능개선을 할 수 있다, 별차이는 없다. 
len = arr.length
for(var i = len; i < len; i){}
*/

//자바스크립트의 문자와 문자열은 같은 타입이다, 모두 문자열
typeof "abc";  //string
typeof "a";    //string
typeof 'a';    //string. single quote도 사용가능.
"ab:cd".split(":"); //["ab","cd"]
var result1 = "ab:cd".replace(":", "$"); //"ab$cd"
console.log(result1);
" abcde  ".trim();  //"abcde"

//toString.call 일반적인 모든 자바스크립트 타입을 확인해주는 방법중에 하나
var rs = "ab:cd".split(""); // split 배열을 만들어주는 메소드
console.log(toString.call(rs));

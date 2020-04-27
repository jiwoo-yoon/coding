// 함수의 호출.(함수선언문)
function printName(firstname) { //자바스크립트에선 정의(선언,할당)를 안해주면 내부적으로 undefined가 나옴 
    
    return "name is" + firstname;
}
console.log(printName("jw","woo")); //매개변수개수만큼 나옴

//함수표현식
function test() {
    console.log(printName()); 
    var printName = function() {
        return 'anonymouse';
    }
}
//TypeError: printName is not a function
//test();
var foo2;

//foo();
  //foo2();

  function foo() { // 함수선언문
          console.log("hello");
  }
  var foo2 = function() { // 함수표현식
          console.log("hello2");
  }


//arguments, Object에 가깝고
/*
자바스크립트 함수는 선언한 파라미터보다 더 많은 인자를 보낼 수도 있습니다.
이때 넘어온 인자를 arguments로 배열의 형태로 하나씩 접근할 수가 있습니다.
arguments는 배열타입은 아닙니다.
따라서 배열의 메서드를 사용할 수가 없습니다.
*/
function a() {
    if(arguments.length < 3) return;
    console.log("my name is", arguments[2])
}
a(1,2,3);

//arguments속성을 사용해서 , 1~무한대까지 인자를 받아 합을 구하는 함수를 만들어봅시다.
function sum() {
    var num=0;
    for(var i=0;i<arguments.length;i++)
    num+=arguments[i];
    return num;
    }

//arrow function, 간단하게 함수를 선언할 수 있는 문법
function getName(name){
    return "kim " + name;
}
//위 함수는 아래 arrow함수와 같다.
var getName = (name) => "kim " + name;
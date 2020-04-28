//window.setTimeout()
//setTimeout() //window는 전역객체라서 생략 가능하다.
//window에 속한 메소드에는 경고창을 띄어주는 alert
//함수를 인자로 받을 수 있고, 함수를 반환할 수도 있다. ~ javascript의 특이점

function run() {
    
    setTimeout(function() { //비동기콜백함수,비동기(asynchronous)로 실행되어 동기적인 다른 실행이 끝나야 실행
                            //정확히는 stack에 쌓여있는 함수의 실행이 끝나고나서 실행
                            //setinteval(함수를 주기적으로 실행)
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 2000);
    console.log("run function end")
    
}
console.log("start");
run();
console.log("end");
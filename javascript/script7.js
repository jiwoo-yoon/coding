   function ajax(data) { //XMLHttpRequest객체를 생성해서, open메서드로 요청을 준비하고, send메서드로 서보로 보내짐
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      console.log(this.responseText);
    });    
    oReq.open("GET", "http://www.example.org/getData?data=data");//parameter를 붙여서 보낼수있음. 
    oReq.send();
   }

   //node.js 해야되는데... open쪽에  .txt 파일 넣어서 해야된다.
var el = document.querySelector(".outside");
el.addEventListener("click", function(e){ //event handler
 var target = e.target;
 console.log(target.className, target.nodeName);
 console.log(target.innerText);
});


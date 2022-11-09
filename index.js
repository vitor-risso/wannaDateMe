var b = document.querySelector('.buttonNot');
var a = document.querySelector('.buttonYes');
if(b){
  b.addEventListener("click", change);
  a.addEventListener("click", changeA);
}else{
  console.log(`n tem nada no ${b}`)
}
function change(){  
  var left = Math.floor(Math.random()*250)+1;
  var top = Math.floor(Math.random()*300)+1;
    
  b.style.display = 'block'
  b.style.position = 'absolute'

  b.style.left = left+"px";
  b.style.top = top+"px";
}

function changeA() {
  const gif = document.querySelector(".yesClick")
  

  a.style.visibility = "hidden"
  b.style.visibility = "hidden"
  gif.style.visibility = "visible"
  document.body.style.backgroundImage = "url('./assets/aaaa.gif')"
  document.body.style.backgroundSize="cover"
}
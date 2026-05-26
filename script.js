let score =0;
let random;
let id;
let isClicked;
let boxes=document.querySelectorAll('.box');
let number = document.getElementById('para');

setTimeout(function(){
  boxes.forEach(function(box){
    box.style.backgroundColor='gray';
  });
  clearInterval(id);
},30000);

id=setInterval(function(){
    random = Math.floor(Math.random()*9);
    boxes[random].style.backgroundColor='green';
    isClicked=false;
    setTimeout(function(){
      boxes[random].style.backgroundColor='gray';
    },1000);
  },2000);

boxes.forEach(function(box,index){
  box.addEventListener('click',function(){
    if(index===random && box.style.backgroundColor==='green'){
      if(isClicked===false){
        score+=1;
        isClicked=true;
      }
    }
    number.innerText=`Your Score is : ${score} points`;
  });
});

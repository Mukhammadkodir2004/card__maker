const elForm = document.querySelector('.firstInput');
const elInput = document.querySelector('.secondInput');
const elsecondInput= document.querySelector('.thirdInput');
const elThirdInput = document.querySelector('.fourthInput');
const elFourthInput =document.querySelector('.fifthInput');
const elFifthInput =document.querySelector('.sixInput');
const elBtn = document.querySelector('.btn');
const elTextarea =document.querySelector('.card');




elBtn.addEventListener("click", function(evt){
  elTextarea.style.backgroundColor  = elForm.value;
  elTextarea.style.color = elInput.value;
  elTextarea.style.fontSize = elsecondInput.value + "px";
  elTextarea.style.borderRadius = elThirdInput.value + "px";
  elTextarea.style.borderColor= elFourthInput.value;
  elTextarea.style.padding  = elFifthInput.value + "px";
  
 

  if (elForm.value===''||elInput.value==='' || elsecondInput.value===''||elThirdInput.value===''||elFourthInput.value===''|| elFifthInput.value===''){
   alert('Fill in the gaps!!!')
   
  }
})

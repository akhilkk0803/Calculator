"use strict";
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
console.log(buttons)
let s = "";
const operations=function(btn)
{
  if (btn.textContent === "=" ) {
    s = `${eval(s)}`;
  } 
  else if (btn.textContent === "AC") {
    s = "";
    result.textContent = "0";
    return;
  } 
  else if (btn.textContent === "X" ) {
    s = s.slice(0, -1);
      if (s === "") {
          result.textContent = "0";
          return;
      }
  } 
  else {
    s += btn.textContent;
  }
  result.textContent = s;
}

const isvalid=function(key)
{
    buttons.forEach(btn=>
      {  
        if(btn.textContent==key)
        {  operations(btn);
          return true;
        }
      })
      return false;
}
document.addEventListener('keydown',function(e)
{ let str=e.key; 
  console.log(str)
  if(str=='Enter') str="=";
  if(str=='Backspace') str="X";
  isvalid(str);
})
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e);
    operations(btn);
  });
});

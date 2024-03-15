"use strict"

var input =document.getElementById('Input');
var output=document.getElementById('Output');

var operations=["+",'-','*','/'];
var langeurInput,
    courentChar,
    anterieurChar;
var result;
var nombreactuel;
var nombreprecedent=0;
function ButtonClick(char){
  if(operations.includes(char)==false){
   input.value+=char;
   
  }
  
}

function addition(){
  nombreactuel=input.value;
  nombreactuel=parseInt(nombreactuel);
  console.log("Nombreprecedent= "+nombreprecedent);
  console.log("nombreactuel= "+nombreactuel);
   result=nombreactuel+nombreprecedent;
  console.log("ressult= "+result);
  nombreprecedent=nombreactuel;
 
}

function calculResult(){

}

// function getcourentChar(){
//    courentChar= input.value.charAt(input.value.length-1);
// }

//  function getanterieurChar(){
//   verifierSyntax();
//   courentChar=input.value.charAt(input.value.length-2);
//  }

// function verifierSyntax(){

//     if(operations.includes(anterieurChar) && operations.includes(courentChar)){
//       alert("double operations");
//     }
// }

// function egale(){
//   output.value=eval(input.value);
  
// }
function Clear(){
  input.value="";
  output.value="";
}





 






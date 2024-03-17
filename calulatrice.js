"use strict"

var input =document.getElementById('Input');
var output=document.getElementById('Output');

//les operations
var operations=["+",'-','*','/'];
var result;
var resultfinal=0;
//chaineActuel represant l'input a chaque fois on clique sur in operateur
var chaineActuel="";
var operationprecedent;
var charanterieur="";

/*==============fonction de virgule==================*/
function virgule(chare){
  if( output.value.slice(output.value.length-1)=="="){
    chaineActuel="0.";
    input.value=chaineActuel;
    output.value="";
    return;
  }
  if(chaineActuel=="" && output.value!=""){
    chaineActuel="0.";
    input.value=chaineActuel;
  }
  if(chaineActuel.includes(chare)==false  && chaineActuel!="")
   chaineActuel+=chare;
   input.value=chaineActuel;
}


/*=========fonction de entrer les chifre dans l'input===========*/
function ButtonClick(char){
   charanterieur=char;
  if(output.value.slice(output.value.length-1)=="="){
    Cleartout();
  }
  
  if(operations.includes(char)==false){
   chaineActuel+=char;

   if(chaineActuel[0]=="0" &&  chaineActuel.length==2)
      chaineActuel=char;
  }

  input.value=chaineActuel;
}

/*=================fonction de somme ========*/
function addition(){

//git l'operation precedant
operationprecedent=output.value.slice(output.value.length-1);
//pour le premier fois 
if(output.value=="" && chaineActuel!="" && input.value.slice(output.value.length-1)!="."){
  result=chaineActuel;
  output.value=result+"+";
  input.value=result;
  chaineActuel="";
  return;
}
//si on clique sur =
if(output.value.slice(output.value.length-1)=="="){
  result=eval(resultfinal);
  console.log("result + = "+resultfinal);
  output.value=resultfinal+"+";
  input.value=resultfinal;
  chaineActuel="";
  return;
}
// la somme dans le cas normal
if(output.value!=""&& chaineActuel!="" && output.value.slice(output.value.length-1)!="="){
  result=parseFloat(output.value.slice(0,output.value.length-1)) +operationprecedent+ parseFloat(chaineActuel);
  result=eval(result);
  console.log("result + = "+result);
  output.value=result+"+";
  input.value=result;
  chaineActuel="";
 
}
// pour changer l'operation vres +
if(output.value.slice(output.value.length-1)!="+" && chaineActuel=="" && output.value!=""){
  output.value=output.value.slice(0,output.value.length-1)+"+";
}
 
}



/*==========function de soustraction=================*/
function soustraction(){
  //get le dernier operation
  operationprecedent=output.value.slice(output.value.length-1);

 //si on clique sur + premier fois
  if(output.value=="" && chaineActuel!="" && input.value.slice(output.value.length-1)!="."){
    result=chaineActuel;
    output.value=result+"-";
     input.value=result;
     chaineActuel="";
     return;
  }

  //si on clique sur =
  if(output.value.slice(output.value.length-1)=="="){
    result=eval(resultfinal);
    console.log("result - = "+resultfinal);
    output.value=resultfinal+"-";
    input.value=resultfinal;
    chaineActuel="";
    return;
  }
  // la soustraction dans le cas normal
  if(chaineActuel!="" && output.value!=""){
    result=parseFloat(output.value.slice(0,output.value.length-1)) +operationprecedent+ parseFloat(chaineActuel);
    result=eval(result);
    console.log("result - = "+result);
    output.value=result+"-";
    input.value=result;
    chaineActuel="";
  
  }
  //pour changer le operation vres -
  if(output.value.slice(output.value.length-1)!="-" && chaineActuel=="" && output.value!=""){
    console.log(output.value);
    output.value=output.value.slice(0,output.value.length-1)+"-";
  }
  
}

/*===================function de multiplication============= */
function multiplication(){
  //git le dernier operation
  operationprecedent=output.value.slice(output.value.length-1);
//le premier fois
  if(output.value=="" && chaineActuel!="" && input.value.slice(output.value.length-1)!="."){
    result=chaineActuel;
    output.value=result+"*";
    input.value=result;
    chaineActuel="";
    return;
  }

  //si on clique sur =
  if(output.value.slice(output.value.length-1)=="="){
    result=eval(resultfinal);
    output.value=resultfinal+"*";
    input.value=resultfinal;
    chaineActuel="";
    return;
  }
  //le multiplication dans le cas normal
  if(chaineActuel!="" && output.value!=""){
    result=parseFloat(output.value.slice(0,output.value.length-1)) +operationprecedent+ parseFloat(chaineActuel);
    result=eval(result);
    output.value=result+"*";
    input.value=result;
    chaineActuel="";
    
  }
  //pour changer l'operation vers *
  if(output.value.slice(output.value.length-1)!="*" && chaineActuel=="" && output.value!=""){
    output.value=output.value.slice(0,output.value.length-1)+"*";
   
  }
  
}

/*================fonctionn de division================*/
function division(){
  //git le dernier operation
  operationprecedent=output.value.slice(output.value.length-1);
// le premier fois si on clique sur /
  if(output.value=="" && chaineActuel!="" && input.value.slice(output.value.length-1)!="." ){
    result=chaineActuel;
    output.value=result+"/";
    input.value=result;
    chaineActuel="";
    return;
  }
  //si clique sur =
  if(output.value.slice(output.value.length-1)=="="){
    result=eval(resultfinal);
    output.value=resultfinal+"/";
    input.value=resultfinal;
    chaineActuel="";
    return;
  }
  //la division dans le cas normal
  if(chaineActuel!="" && output.value!=""){
    result=parseFloat(output.value.slice(0,output.value.length-1)) +operationprecedent+ parseFloat(chaineActuel);
    result=eval(result);
    output.value=result+"/";
    input.value=result;
    chaineActuel="";
  
  }
  //pour changer l'etat de l'operation vres /
  if(output.value.slice(output.value.length-1)!="/" && chaineActuel=="" && output.value!=""){
    output.value=output.value.slice(0,output.value.length-1)+"/";
   
  }
  
}


/*=========founction de modelo============*/
function modulu(){ 
  //git le dernier operation
  operationprecedent=output.value.slice(output.value.length-1);
//si on clique sur % premier fois
  if(output.value=="" && chaineActuel!="" && input.value.slice(output.value.length-1)!="." ){
    result=chaineActuel;
    output.value=result+"%";
    input.value=result;
    chaineActuel="";
    return;
  }
  //si on click sue =
  if(output.value.slice(output.value.length-1)=="="){
    result=eval(resultfinal);
    console.log("result % = "+resultfinal);
    output.value=resultfinal+"%";
    input.value=resultfinal;
    chaineActuel="";
    return;
  }
  //le cas normal
  if(chaineActuel!="" && output.value!=""){
    result=parseFloat(output.value.slice(0,output.value.length-1)) +operationprecedent+ parseFloat(chaineActuel);
    result=eval(result);
    output.value=result+"%";
    input.value=result;
    chaineActuel="";
  
  }
  //pour changer l'operation vres %
  if(output.value.slice(output.value.length-1)!="%" && chaineActuel=="" && output.value!=""){
    output.value=output.value.slice(0,output.value.length-1)+"%";
   
  }
  
}

/*=========founction de +/- ==============*/
function negative(){
  if(chaineActuel[0]!="-" && output.value.slice(-1)!="-"){
    input.value="-"+chaineActuel;
    chaineActuel=input.value;
  }
  

}

/*=======function de CE suppremer un seule chire de i input============*/
function clearinput(){
  chaineActuel=chaineActuel.slice(0,chaineActuel.length-1);
  input.value=chaineActuel;
}

/*========function de  C pour suppremer tout==================*/
function Cleartout(){
  input.value="";
  output.value="";
  result=0;
  chaineActuel="";
}
/*==========functiion de egale ==============*/
function egale(){
  operationprecedent=output.value.slice(output.value.length-1);
  if(input.value!="" && output.value!="" && output.value.slice(output.value.length-1)!="=" ){
  output.value=result+operationprecedent+input.value+"=";
  resultfinal=eval(result+operationprecedent+input.value);
  input.value=resultfinal;
  chaineActuel="";
}
 
}



 






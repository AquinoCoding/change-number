
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var phn = urlParams.get('phn');

var phn = 22223333;

// Se o PHN for vazio não havera substituição 
if(phn!=""){
  //Alteração de link - Desktop
 var link_telefone = document.querySelector("#ligacao");
 var tell_href = "tel:061"+phn
 link_telefone.setAttribute('href', tell_href)
  
  //Alteração de texto - Desktop 
 var telefone = "(61) "+ phn.substring(0,4) +"-" + phn.substring(4,8);
 document.getElementById("text1").innerHTML = telefone
 
  
 //Alteração de link - Mobile
 var link_telefone = document.querySelector("#button2");
 link_telefone.setAttribute('href', tell_href)
  
 //Alteração de texto - Mobile
 var telefone = phn.substring(0,4) +"-" + phn.substring(4,8);
 var classe = document.getElementsByClassName('elementor-button-text');
  for(i = 0; i < classe.length; i++){
   console.log(classe[i].innerHTML);
   if (classe[i].innerHTML == "2222-3333"){
     classe[i].innerHTML = telefone;
   }
 }
 
 
}




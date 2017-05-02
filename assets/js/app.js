var form1 = document.getElementsByClassName("js-representante")

var letras = function(e) {
    var codLetra = e.keyCode;
    if ((codLetra>=97 && codLetra<=122) || (codLetra>=65 && codLetra<=90) || codLetra == 39 || codLetra == 32 || codLetra==241 || codLetra==209) {
      return true;
    }
    else {
      return false;
    }
}
var numeros = function(e) {
    var codNumero = e.keyCode;
    if ((codNumero>=48 && codNumero<=57)) {
      return true;
    }
    else {
      return false;
    }
}

form1[0].onkeypress = letras;
form1[2].onkeypress = letras;
form1[4].onkeypress = letras;
form1[6].onkeypress = letras;
form1[3].onkeypress = numeros;
form1[7].onkeypress = numeros;

var inputRecursos = document.getElementsByClassName("recursos-humanos");
for(var i = 0; i < inputRecursos.length; i++ ){
  inputRecursos[i].onkeypress = numeros;
}

var rbRegistroPublico = document.getElementsByName("rb-yes-no");
document.getElementById("si").addEventListener("click",function () {
  document.getElementsByClassName("oculto-si")[0].classList.add("mostrar");
});
document.getElementById("no").addEventListener("click",function () {
  document.getElementsByClassName("oculto-si")[0].classList.remove("mostrar");
});

document.getElementById("otros").addEventListener("click",function () {
  document.getElementsByClassName("mostrar-otros")[0].classList.toggle("mostrar");
})

var btnEnviar = document.getElementsByClassName("button")[0];
document.getElementById("enviar").addEventListener("click",function () {
  if (document.getElementById("enviar").checked) {
    btnEnviar.innerHTML = "Enviar";
  }
  else {
    document.getElementsByClassName("button")[0].innerHTML = "Guardar";
  }
})


btnEnviar.addEventListener("click",function () {
  if (document.getElementById("enviar").checked) {
    window.location = "envio.html";
  }
})

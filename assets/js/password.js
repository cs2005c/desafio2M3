let claveLiteral = "";
let mensajeCorrecto = "";


function evalua() {

const passWord1 = document.getElementById('clave1').value;
const passWord2 = document.getElementById('clave2').value;
const passWord3 = document.getElementById('clave3').value;
claveLiteral = passWord1+passWord2+passWord3;
if (claveLiteral=="911") {
      mensajeCorrecto="Password 1 Correcto";
} else if (claveLiteral=="714") {
    mensajeCorrecto="Password 2 Correcto";
} else {
        mensajeCorrecto= "Password Incorrecto";
}

const mensajetotal = document.getElementById('mensajeaviso');

    mensajetotal.innerHTML=mensajeCorrecto;
}
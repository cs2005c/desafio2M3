let estado=true;
function cambiaborde() {
    colorimg = document.getElementById('bordeimg');
   /*  alert(colorimg.style); */
      if (estado) {
        colorimg.style.border='5px solid red';
        estado = false;
      } else {
        colorimg.style.border='5px solid transparent';
        estado = true;
      }
    
}
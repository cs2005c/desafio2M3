
let txtmensaje = "";
function verifica() {
    let suma = 0;
    const cantidad1 = Number(document.getElementById('cantidad-sticker-1').value);
    const cantidad2 = Number(document.getElementById('cantidad-sticker-2').value);
    const cantidad3 = Number(document.getElementById('cantidad-sticker-3').value);
    
    suma = suma + cantidad1 + cantidad2 + cantidad3;
    

    
    if (suma <= 10) {
        txtmensaje = "Llevas " + suma + " Stickers";
    } else {
        txtmensaje = "Llevas demasiados stickers";
    }

    const mensajetotal = document.getElementById('mensaje');
    mensajetotal.innerHTML=txtmensaje;
    
} 

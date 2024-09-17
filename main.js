//let cantidad = 8;
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 8 ){
        alert("La cantidad de caracteres tiene que ser mayor a 8");
    }

    let password = '';
    for(let i=0; i<numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[ Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password +=caracterAleatorio;
    }
    
    //console.log('password generada:' +password); 
    contrasena.value = password;

    if(contrasena.value.match(/\d/) && contrasena.value.match(/[A-Z]/)){
        alert("LA contraseña es fuerte, contiene numero y letra mayuscula");
    }else{
        alert("La contraseña es debil, genera otra");
    }
    
}

function limpiar(){
    let limpiar ="";
    contrasena.value= limpiar;
}

/*let texto = "texto";
// console.log(typeof texto);*/








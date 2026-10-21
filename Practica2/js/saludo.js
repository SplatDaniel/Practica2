var hoy= new Date();
var horaNow= hoy.getHours();
var saludo;
console.log(hoy);
console.log(horaNow)

if(horaNow>18){
    saludo="Buenas noches";   
}else if(horaNow>12){
    saludo="Buenas tardes";
}else if(horaNow>0){
    saludo="Buenos dias";
}else{
    saludo="Bienvenido";
}

let colores=['rojo', 'azul', 'verde'];
for(let color of colores){//recorre uno en uno
    console.log(color);
}
let usuario = {nombre:"Danielete", edad: 20};
for(let clave in usuario){//busca especificamente
    console.log(clave+":"+usuario[clave]);
}

function saludar(nombre) {
    return "Hola "+nombre+" !!";
}

const sumar =(a,b) => a+b; //funcion tipo flecha
console.log(sumar(5,8))

document.write('<h3>'+ saludo +'</h3>');
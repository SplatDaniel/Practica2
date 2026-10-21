var precio;
var cantidad;
var total;

producto='Volante';
precio=75;
cantidad=3;
total=precio * cantidad;

var el= document.getElementById('cost');
el.textContent='Producto: '+producto +' Cantidad: '+cantidad+' unidades'+' Total: $'+ total;

let productos=['Llantas', 'Rines', 'Puertas', 'Escapes', 'Puertas','Luces led', 'Pantallas'];

for(let producto of productos){//recorre uno en uno
    console.log(producto);
}


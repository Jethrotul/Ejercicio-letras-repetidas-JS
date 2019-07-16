var nombre = ["D","I","E","G","O","F","E","R","N","A","N","D","E","Z"];
var map = new Map();
var contador = 0;
for (i=0;i<nombre.length;i++){
    contador = 0;
    for (j=0;j<nombre.length;j++){
        if (nombre[i] == nombre[j]){
            contador++
            console.log(j);
        }
    }
    map.set(nombre[i], contador)   
}
console.log(map);
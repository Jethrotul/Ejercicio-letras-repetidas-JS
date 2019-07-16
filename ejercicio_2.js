var nombre = ["D","I","E","G","O","F","E","R","N","A","N","D","E","Z", 3];
for (i=0;i<nombre.length;i++){
    if (nombre[i] == "A" ||
        nombre[i] == "E" ||
        nombre[i] == "I" ||
        nombre[i] == "O" ||
        nombre[i] == "U"){
        console.log("La letra "+ nombre[i]+ " es una vocal");
    }
    else if (typeof nombre[i] === 'number'){
        console.log("El "+nombre[i]+" es un numero, Los nombres no tienen numeros");
    }
    else 
        console.log("La letra "+ nombre[i]+ " es una consonante")
    
}
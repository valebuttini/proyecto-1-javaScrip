// 1- Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.

// let numero=parseInt(prompt("ingrese un numero"));
// for(let i=1;i<=15;i++){
    // let conteo= numero + i;
    // console.log( numero +"+"+ i + "=" + conteo);
// }
// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// let campeones= prompt("ingrese los ultimos 3 ganadores del balon de oro FIFA de a uno (ESC para salir)");
// let ganadores="";
// while(campeones !="ESC"){
    // ganadores=ganadores+campeones+ " ";
    // alert("el usuario ingreso: " + ganadores);
    // campeones= prompt("ingrese los ultimos 3 ganadores del balon de oro FIFA de a uno (ESC para salir)");
// }
// console.log("los ultimos tres ganadores del balon de oro son: " + ganadores);

// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.


let entrada = prompt("Ingresar un numero del 1 al 10(0 para salir)");
while(entrada != "0" ){
   switch (entrada) {
       case "1":
            alert("hola");
            break;
        case "2":
            alert("hola hola");
            break;
        case "3":
            alert("hola hola hola");
            break;
        case "4":
            alert("hola hola hola hola");
            break;
        case "5":
            alert("hola hola hola hola hola");
            break;
        case "6":
            alert("hola hola hola hola hola hola");
            break;
        case "7":
            alert("hola hola hola hola hola hola hola");
            break;  
        case "8":
            alert("hola hola hola hola hola hola hola hola");
            break;       
        case "9":
            alert("hola hola hola hola hola hola hola hola hola");
            break;  
        case "10":
            alert("hola hola hola hola hola hola hola hola hola hola");
             break;  

   }
console.log(entrada)
entrada = prompt("Ingresar un numero");
}

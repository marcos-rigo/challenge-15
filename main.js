 alert("Juguemos a los dados");

let dado1 = Math.round( Math.random() * 6);

let dado2 =Math.round( Math.random() * 6);

if(dado1==0){
    console.log(`Dado 1: ${dado1 + 1}`);}
    else{
        console.log(`Dado 1: ${dado1}`);
    }

if(dado2==0){
console.log(`Dado 2: ${dado2 + 1}`);}
else{
    console.log(`Dado 2: ${dado2}`);
}
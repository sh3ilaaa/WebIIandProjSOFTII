let notas = [];
let media = 0;

for(let i = 0; i < 4; i++) {
    notas[i] = prompt("Qual a sua nota no ",i+1," bimestre");
    media += notas[i]*(i+1);
    console.log(media);
}
    
media = media/10;

if(media>=6) {
    console.log("Aprovado. Media: "+media);
}
else if(media<6 && media>=5) {
    console.log("Prova Final. Media: "+media);
}
else if(media<5 && media>=3) {
    console.log("Recuperação. Media: "+media);
}
else {
    console.log("Reprovado. Media: "+media);
}
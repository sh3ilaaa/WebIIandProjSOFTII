let idade = prompt('Qual a sua idade');
let cnh = prompt('Você tem cnh?');

if(cnh=='sim'){
    cnh=true;
}
else if(cnh=='não' || cnh=='nao') {
    cnh=false;
}

if(idade >= 18 && cnh == false) {
    console.log('Você é maior de idade mas não pode dirigir, pois não tem cnh');
}
else if(idade >= 18 && cnh == true) {
    console.log('Você é maior de idade e possui cnh, portanto pode dirigir');
}

if(idade<18 && cnh == true) {
    console.log('Você é menor de idade portanto não possui cnh, e não pode dirigir, não minta');
} else if(idade<18 && cnh==false){
    console.log('Você é menor de idade, e não possui cnh, portanto não pode dirigir')
}
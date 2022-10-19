let velCar = prompt('Digite a velocidade que o carro se encontra: ');

if(velCar > 80) {
    console.log('Você está acima da velocidade máxima permitida');
}
else if(velCar < 40) {
    console.log('Você está abaixo da velocidade mínima permitida');
} 
else {
    console.log('Você está dentro da velocidade permitida');
}
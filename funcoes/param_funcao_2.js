function somar (a, b = 0, c = 0, d = 0){//PASSA UM VALOR PADRÃO 
    return a+b+c+d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('fim!'); 
//Meter a troca da variável a no valor da variável b
var a = 7;
var b = 94;
var temp = a;

console.log('Valor antigo de a: ' + a);
console.log('Valor antigo de b: ' + b);

// a = b;
// b = temp;

[a, b] = [b, a] // Faz a troca dos valores

console.log('Valor novo de a: ' + a);
console.log('Valor novo de b: ' + b);
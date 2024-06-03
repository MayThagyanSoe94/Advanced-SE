let a = '13';
a++;
console.log('Type of a ' + typeof a);// number
console.log('A a++ ' + a); // 14

console.log('A a+1 ' + a + 1); // 141

a = false;
console.log('Type of a ' + typeof a);// boolean

a = function () {
    console.log('Hello ')
}
console.log('Type of a ' + typeof a);
a();

let obj = {
    name: 'MT GS',
    age: 30
}

console.log('obj ' + obj.mane);// undefined

obj();
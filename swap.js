var a = 12;
var b = 10;
console.log('Before swap : a =',a, 'b =',b);

var temp = a ;
a=b;
b=temp;

console.log('After swap : a =',a, 'b =',b);

//Another process

var x = 5;
var y = 7;
console.log('Before swap : x =',x, 'y =',y);
x= x+y;
y = x -y;
x= x-y;
console.log('After swap : x =',x, 'y =',y);

//Another process
var p =2;
var q =3;
console.log('Before swap : p =',p, 'q =',q);
[p,q]=[q,p];
console.log('After swap : p =',p, 'q =',q);
//Number methodları
const pi = 3.141592;
console.log(pi);

//toFixed
//ondalık kısmında kaç basamak olacağını belirler.
console.log(pi.toFixed(0));
console.log(pi.toFixed(1));
console.log(pi.toFixed(2));
console.log(pi.toFixed(3));

//parseInt
//verilen sayıyı tam sayı yapar.
console.log(parseInt(pi));

//parseFloat
//Ondalık sayıya dönüştürür.

//toPrecision
//kaç hanesinin yazılcağını belirler.
const num = 976.567;
const num1 = 66;
console.log(pi.toPrecision(3));
console.log(num.toPrecision(4));
console.log(num1.toPrecision(5));

//toExponential
console.log(num.toExponential(3));

//valueOf
console.log(num.valueOf());

//--Math kütüphanesi--

//Math.PI,Math.E
console.log(Math.E);
console.log(Math.PI);

//Math.abs(x)
//Sayının mutlak değerini döndürür.
console.log(Math.abs(-8));

//Math.ceil(x)
//Sayıyı bir üst tam sayıya yuvarlar.
console.log(Math.ceil(5.2));

//Math.floor(x)
//Sayıyı bir alt tam sayıya yuvarlar.
console.log(Math.floor(6.8));

//Math.round(x)
//Sayıyı en yakın tam sayıya yuvarlar.
console.log(Math.round(5.5));

//Math.trunc(x)
//Sayının ondalık kısmını yok sayar.
console.log(Math.trunc());

//Math.max(x,y,...)
//Verilen sayıların en büyüğünü döndürür.
console.log(Math.max(3, 6, 9, 1));

//Math.min(x,y,...)
//Verilen sayıların en küçüğünü döndürür.
console.log(Math.min(3, 6, 9, 1));

//Math.pow(x,y)
//Bir sayının üstünü hesaplar.
console.log(Math.pow(2, 4));

//Math.sqrt(x)
//Bir sayının karekökünü hesaplar.
console.log(Math.sqrt(25));

//Math.random()
//0 ile 1 arasında rastgele bir ondalık sayı döndürür.
console.log(Math.random());


//0-100 0-17 -5-5 -32-0

//100 dahil değil        0.6778   67.78  68
console.log(Math.trunc(Math.random() * 100));
//100 dahil
console.log(Math.trunc(Math.random() * 101));
//17 dahil değil
console.log(Math.trunc(Math.random() * 17));
//17 dahil
console.log(Math.trunc(Math.random() * 18));
//5 dahil değil
console.log(Math.trunc(Math.random() * 10) - 5);
//5 dahil
console.log(Math.trunc(Math.random() * 11) - 5);
//0 dahil değil
console.log(Math.trunc(Math.random() * 32) - 32);
//0 dahil
console.log(Math.trunc(Math.random() * 33) - 32);

console.log(Math.floor(Math.random() * 101) - 50);

console.log(Math.floor(Math.random() * 64) - 32);
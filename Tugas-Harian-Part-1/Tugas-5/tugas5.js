// DANIEL JORDAN
//Soal 1
//Gabungkanlah agar kata-kata di atas menjadi satu kalimat menggunakan template literals
//OUTPUT = JavaScript is awesome and I love it!
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

let theString1 = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;
console.log(theString1); // JavaScript is awesome and i love it!
// Jawaban soal 1

//Soal 2
let kataPertama = "saya";
let kataKedua = "senang";
let kataKetiga = "belajar";
let kataKeempat = "javascript";

let upkatakedua = kataKedua[0].toUpperCase() + kataKedua.slice(1);
let upkatatiga = kataKetiga.slice(0, 6) + kataKetiga[6].toUpperCase();
let upper = kataKeempat.toUpperCase();
let theString2 = `${kataPertama} ${upkatakedua} ${upkatatiga} ${upper}`;

console.log(theString2); // saya Senang belajaR JAVASCRIPT
// Jawaban soal 2

//Soal 3
//ubah lah variabel diatas ke dalam integer dan gunakan pada operasi perhitungan dari keliling persegi panjang dan luas segitiga
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let alasSegitiga = "6";
let tinggiSegitiga = "7";

let Kelpp = "Keliling Persegi Panjang = ";
let luassgt = "Luas Segitiga = ";
let kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));
let luasSegitiga = (parseInt(alasSegitiga) * parseInt(tinggiSegitiga)) / 2;

console.log(Kelpp + kelilingPersegiPanjang);
console.log(luassgt + luasSegitiga);
// Jawaban soal 3

//Soal 4
let sentences = "wah javascript itu keren sekali";

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14); // do your own! = javascript
let thirdWords = sentences.substring(15, 18); // do your own!  = itu
let fourthWords = sentences.substring(19, 24); // do your own! = keren
let fifthWords = sentences.substring(25, 31); // do your own!  = sekali

console.log("Kata Pertama: " + firstWords);
console.log("Kata Kedua: " + secondWords);
console.log("Kata Ketiga: " + thirdWords);
console.log("Kata Keempat: " + fourthWords);
console.log("Kata Kelima: " + fifthWords);
// Jawaban soal 4

//Soal 5
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; 
var fourthWord = sentence[11] + sentence[12]; 
var fifthWord = sentence[14] + sentence[15]; 
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; 
var seventhWord = sentence[23] + sentence[24]; 
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];  

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);
// Jawaban soal 5

//Soal 6
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); //lakukan pengambilan kalimat di variable ini

console.log(hasil);
// Jawaban soal 6
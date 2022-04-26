//SOAL 1
let dataPeserta = ["john", "laki-laki", "programmer", "30"];

dataPeserta.pop()
dataPeserta.unshift("Halo,", "nama", "saya")

dataPeserta.splice(4, 0, "saya")
dataPeserta.splice(6, 1, "berumur", "30")
dataPeserta.splice(9, 0, "bekerja", "sebagai", "seorang", "programmer")

let kalimatawal = dataPeserta.slice(0, 4)
let kalimatakhir = dataPeserta.slice(4)

let output = `${kalimatawal.join(" ")}. ${kalimatakhir.join(" ")}`;

console.log(output)
//JAWABAN 1

//SOAL 2
let array1 = [
  "selamat",
  "anda",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];

for (var i=0 ; i<array1.length ; i++){
    console.log(array1[i])
}
//JAWABAN 2

//SOAL 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var x=0 ; x<array2.length ; x++){

    if(array2[x] % 2 === 0){
        console.log(array2[x]);
    }
}
//JAWABAN 3

//SOAL 4
let kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];

kalimat.shift()
kalimat.splice(0, 3, "saya", "sangat")

console.log(kalimat.join(" "))
//JAWABAN 4

//SOAL 5
var sayuran = [];

sayuran.push("Kangkung", "Kayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
sayuran.sort()

let num = 0;

for(var s=0 ; s < sayuran.length ; s++){
    num = num + 1
    console.log(`${num}.${sayuran[s]}`)
}
//JAWABAN 5
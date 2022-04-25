// SOAL 1
var nilaiJohn = 80;
var nilaiDoe = 50;

if (nilaiJohn >= 80) {
  console.log(`Nilai John - ${nilaiJohn} A`);
}
else if ( (nilaiJohn >= 70 && nilaiJohn < 80) || (nilaiDoe >= 70 && nilaiDoe < 80) ){
  console.log("Nilai John - B");
}

else if (nilaiJohn >= 60 && nilaiJohn < 70) {
 console.log("Nilai John - C");
}

else if (nilaiJohn >= 50 && nilaiJohn < 60) {
  console.log("Nilai John - D");
}

else if (nilaiJohn < 50) {
  console.log("Nilai John - E");
}

switch (true) {
  case nilaiDoe >= 80:
    {
      console.log("Nilai Doe - A");

    }
    break;

    case nilaiDoe >= 70 && nilaiDoe < 80:{
      console.log("Nilai Doe - B");
    }
    break;

    case nilaiDoe >=60 && nilaiDoe < 70:{
      console.log("Nilai Doe - C");
    }
    break;

    case nilaiDoe >= 50 && nilaiDoe < 60: {
      console.log("Nilai Doe - D")
    }
    break;

    case nilaiDoe < 50: {
      console.log("Nilai Doe - E");
    }
    break;
}
// JAWABAN SOAL 1

// SOAL 2
var tanggal = 30;
var bulan = 9;
var tahun = 2000;

switch(true){
  case bulan === 9: {
    console.log(`Tanggal Lahir ${tanggal} - ${bulan} - ${tahun}`)
  }
  break;
}
// JAWABAN SOAL 2

// SOAL 3
console.log("LOOPING PERTAMA");

for (var deret = 2; deret <= 20; deret += 2) {
  console.log(deret + " I love coding.");
}

console.log("LOOPING KE-DUA");

for (var deret = 20; deret > 0; deret -= 2) {
  console.log(deret + " I am going to be a frontend developer.");
} 
// JAWABAN SOAL 3

// SOAL 4
for (var angka = 1 ; angka<=20 ; angka++ ){
  if (angka % 2 === 0){
    console.log(`${angka}. Berkualitas`);

  } else if (angka % 3 === 0) {
    console.log(`${angka}. I love Coding`);
  }else {
    console.log(`${angka}. Santai`);
  }
}
// JAWABAN SOAL 4

// SOAL 5
var tinggi = 7;
var alas = 7;

for (var i = 0 ; i < tinggi ; i++){
  for (var x = 0 ; x > i ; x++){
    console.log(x[i]);
  }
}

for (let segitiga = "*"; segitiga.length < tinggi; segitiga += "-") {
  console.log(segitiga);
}
// JAWABAN SOAL 5

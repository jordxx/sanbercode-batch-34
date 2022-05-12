// SOAL 1
console.log("\n==================== SOAL 1 ==================== \n");
luasPersegiPanjang = (panjang, lebar) => panjang * lebar;
kelilingPersegiPanjang = (panjang, lebar) => 2 * (panjang + lebar);
volumeBalok = (panjang, lebar, tinggi) => panjang * lebar * tinggi;

let panjang = 12;
let lebar = 4;
let tinggi = 8;

let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(HasilluasPersegiPanjang);
console.log(HasilkelilingPersegiPanjang);
console.log(HasilvolumeBalok);
// JAWABAN SOAL 1

// SOAL 2
console.log("\n==================== SOAL 2 ==================== \n");
introduce = (nama, age, gender, job) => `Pak ${nama} adalah seorang ${job} yang berusia ${age} tahun` 

 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"
// JAWABAN SOAL 2

// SOAL 3
console.log("\n==================== SOAL 3 ==================== \n");
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jeniskelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunlahir: arrayDaftarPeserta[3]
};
console.log(objDaftarPeserta);
// JAWABAN SOAL 3

// SOAL 4
console.log("\n==================== SOAL 4 ==================== \n");
/*
1.nama: Nanas
  warna: Kuning
  ada bijinya: tidak
  harga: 9000 
2.nama: Jeruk
  warna: Oranye
  ada bijinya: ada
  harga: 8000
3.nama: Semangka
  warna: Hijau & Merah
  ada bijinya: ada
  harga: 10000
4.nama: Pisang
  warna: Kuning
  ada bijinya: tidak
  harga: 5000
*/

var objOfBuah = [
  { nama: "Nanas", warna: "Kuning", biji: "tidak", harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", biji: "ada", harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", biji: "ada", harga: 10000 },
  { nama: "Pisang", warna: "Kuning", biji: "tidak", harga: 5000 }
];

objOfBuah.forEach(function(item){
    if (item.biji === "tidak"){
        console.log(item);
    }  
})
// JAWABAN SOAL 4

// SOAL 5
console.log("\n==================== SOAL 5 ==================== \n");
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

let phoneBrand = phone.brand
let phoneName = phone.name
let year = phone.year
let colorBlack = phone.colors[2]
let colorBronze = phone.colors[0]
// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze); 
// JAWABAN SOAL 5

// SOAL 6
console.log("\n==================== SOAL 6 ==================== \n");
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali
console.log({warna, ...buku, ...dataBukuTambahan})
/* Tulis kode jawabannya di sini */ 
// JAWABAN 6

// SOAL 7 turu
console.log("\n==================== SOAL 7 ==================== \n");
let dataFilm = [];

tambahDataFilm = (judul, durasi, genre, tahun) => dataFilm.push({judul, durasi, genre, tahun})

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)
// JAWABAN SOAL 7
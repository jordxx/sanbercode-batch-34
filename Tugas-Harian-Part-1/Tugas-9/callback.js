// di file callback.js
function readBooks(time, book, callback) {
  console.log("saya membaca " + book.name);
  setTimeout(function () {
    let sisaWaktu = 0;
    if (time >= book.timeSpent) {
      sisaWaktu = time - book.timeSpent;
      console.log(
        "saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu
      );
      callback(sisaWaktu); //menjalankan function callback
    } else {
      console.log("waktu saya habis");
      callback(time);
    }
  }, book.timeSpent);
}

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini (menggunkan callback)
let waktu = 10000

const exec = (waktu, i) => {
  readBooks(waktu, books[i], function(check){
    if(check !== 0){
      exec(check, i+1)
    } else {
      console.log("waktu habis")
    }
  })
}
exec(waktu, 0)
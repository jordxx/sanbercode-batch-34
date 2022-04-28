// di file promise.js
function readBooksPromise(time, book) {
  console.log("saya mulai membaca " + book.name);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sisaWaktu = time - book.timeSpent;
      if (sisaWaktu >= 0) {
        console.log(
          "saya sudah selesai membaca " +
            book.name +
            ", sisa waktu saya " +
            sisaWaktu
        );
        resolve(sisaWaktu);
      } else {
        console.log("saya sudah tidak punya waktu untuk baca " + book.name);
        reject(sisaWaktu);
      }
    }, book.timeSpent);
  });
}

 var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
// Lanjutkan code untuk menjalankan function readBooksPromise ( menggunakan promise ) 
const exec = (waktu, i) => {
    readBooksPromise(waktu, books[i])
    .then( (check) => {
        exec(check, i+1)
    })

    .catch( (err) => {
        console.log("Buku apalagi ya?")
    })
}

exec(10000, 0)
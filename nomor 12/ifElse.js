// if (kondisi) {
//     aksi  [lakukan aksi jika kondisi bernilai true]
// }
// -- keluar dari blok jika kondisi bernilai false 

// var angka = 1;
// if (angka === 1) {
//     alert('anda memasukkan angka 1')
// }

// let angka = 2;
// if (angka === 1) {
//     alert('anda memasukkan angka 1');
// }

// let angka = 2;
// if (angka < 5) {
//     alert(angka + ' lebih kecil dari 5');
// }

// let angka = prompt('masukkan angka:');

// if (angka % 2 === 0) {
//     alert(angka + ' adalah bilangan GENAP');
// }
// else {
//     // if (angka % 2 === 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// }

let jmlAngkot = prompt('masukkan Jumlah Angkot:');
let angkotBeroperasi = prompt('masukkan Angkot yang Beroperasi dengan baik :');
for (let i = 1; i <= jmlAngkot; i++) {
    if (i <= angkotBeroperasi) {
        console.log(' Angkot No. ' + i + ' beroperasi dengan baik. ')
    }
    else {
        console.log(' angkot No. ' + i + ' sedang tidak beroperasi');
    }
}
/*
if (kondisi) {
    aksi 1
} else {
    aksi 2
}
*/

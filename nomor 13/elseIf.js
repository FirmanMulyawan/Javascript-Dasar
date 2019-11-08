/*
if (kondisi) {
    aksi 1
} else if (kondisi 2){
    aksi 2
} else {
    aksi 3
}
*/

// let angka = prompt(' Masukkan angka: ');
// if (angka % 2 === 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 === 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// } else {
//     alert('bukan angka');
// }

let jmlAngkot = prompt('Masukkan Jumlah Angkot');
let noAngkot = prompt('masukkan nomor angkot');

for (let i = 1; i <= jmlAngkot; i++) {
    if (i <= 6 && i !== 5) {
        console.log('Angkot No. ' + i + ' beroperasi dengan baik.');
    } else if (i === 8 || i === 10 || i === 5) {
        console.log('Angkot No. ' + i + ' sedang lembur');
    }
    // else if (i === 10) {
    //     console.log('Angkot No. ' + i + ' sedang lembur');
    // }
    else {
        console.log('Angkot No. ' + i + ' sedang tidak dapat beroperasi. ');
    }
}
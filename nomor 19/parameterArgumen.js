//======= parameter
// parameter adalah variabel yang ditulis didalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang nantinya dikirimkan saat function dipanggil.
// function ada dua yaitu pembuatan dan pemanggilan

// ========= Argument 
// argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil 
// ===================================

// ===================================
// a dan B disebut parameter
// function tambah(a, b) {
//     return a + b;
// }
// 5 dan 10 disebut argument
// let coba = tambah(5, 10);
// console.log(coba);
// ===================================

// ====================================
// contoh 2 menyimpan variabel dalam argumen
// function tambah(a, b) {
//     return a + b;
// }

// let c = 30;
// let d = 20;
// let hasil = tambah(c, d);
// console.log(hasil);
// ====================================

// ====================================
// contoh 3 variabel masukan dalam prompt 
// function tambah(a, b) {
//     return a + b;
// }

// let c = parseInt(prompt('Masukkan angka 1: '));
// let d = parseInt(prompt('Masukkan angka 2: '));;
// let hasil = tambah(c * 2, d * 2);
// console.log(hasil);
// ===================================

// ===================================
// function tambah(a, b) {
//     return a + b;
// }
// function kali(a, b) {
//     return a * b;
// }
// sebelum menjalankan fungsi kali jalankan fungsi tambah terlebih dahulu 
// let hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);
// ==================================

// =================================
// jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan

// function tambah(a, b) {

//     return a + b;
// }
// // nilai 20 diabaikan 
// let coba = tambah(5, 10, 20);
// console.log(coba);
// ==================================

// ====================================
// jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined
// contoh:
// function tambah(a, b, c) {
//     return a + b;
// }

// let coba = tambah(50, 10);
// console.log(coba);

// ====================================

// ====================================
// ada variabel khusus yang namanya ARGUMENTS yaitu array yang berisi nilai yang dikirimkan saat fungsi dipanggil. secara default itu ada, disebutnya sudo variabel atau variabel semu.
// function tambah() {
//     return arguments;
// }
// argument (20, 'hi', false) diabaikan untuk function tapi semua argument selain dikirimkan ke parameter dia ditampung juga ke dalam sebuah variabel arguments. 
// let arguments = [5, 10, 20, 'hi', false];
// let coba = tambah(5, 10, 20, 'hi', false);
// console.log(coba);
// ````````````````````
function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil = hasil + arguments[i];
    }
    return hasil;
}
let coba = tambah(1, 2, 3, 4, 5);
console.log(coba);
// ===================================
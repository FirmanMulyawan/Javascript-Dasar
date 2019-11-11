// ========= Manipulasi Array =============
//  1. Menambah isi array
// let arr = ['a', 1, true];
// console.log(arr[1]);   

// let arr = [];
// arr[0] = 'sandika';
// arr[1] = 'Galih';
// arr[2] = 'Nofa'; //arr[3] nya undefined
// arr[4] = 'Doddy';

// console.log(arr); // tampilnya object array
// =====================================

// =========== Menghapus Array ===========
// let arr = ['sandhika', 'galih', 'nofa'];
// arr[1] = undefined;
// console.log(arr);
// =====================================

// ======== Menampilkan isi array =======
// let arr = ['sandhika', 'galih', 'nofa'];

// for (let i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// }
// =============================================
// =========== array method =============
// ============= join ==================
// 1. join = Menggabungkan seluruh isi array 
// dan merubah isi array menjadi string dan menampilkannya dengan sparator default koma ( , )
// let arr = ['Sandhika', 'Galih', 'nofa'];
// console.log(arr.join(' - '));
// =======================================

// ========== push ==========
// menambah elemen baru di akhir array 
// let arr = ['Sandhika', 'Galih', 'nofa'];
// arr.push('firman', 'mulyawan');
// console.log(arr); //object array
// ======================================

// ============== pop ==============
// Menghilangkan elemen terakhir dari sebuah array 
// let arr = ['Sandhika', 'Galih', 'nofa'];
// arr.pop(); //harus satu persatu.
// console.log(arr); //object arr
// ===============================

// =========== unshift ======================
// menambahkan elemen baru di awal array 
// let arr = ['Sandhika', 'Galih', 'nofa'];
// arr.unshift('firman', 'mulyawan');
// console.log(arr); //object arr

// =======================================

// ============= shift ====================
// menghilangkan elemen pertama 
// let arr = ['Sandhika', 'Galih', 'nofa'];
// arr.shift();
// console.log(arr); //object arr

// ======================================

// ============== splice ================
// menyisipkan elemen array di tengah - tengah
// splice (indexAwal, mauDihapusBrp[opt], elemenBaru[opt]) 
// let arr = ['Sandhika', 'Galih', 'nofa'];
// arr.splice(2, 0, 'firman', 'mulyawan');
// console.log(arr); // object arr
// ["Sandhika", "Galih", "firman", "mulyawan", "nofa"]

//    &&&&&&&&
// let arr = ['sandhika', 'Galih', 'Nofa'];
// arr.splice(1, 2, 'Doddy', 'fitri');
// console.log(arr);
// // jadi index 1 dan 2 terhapus
// hasilnya
// ["sandhika", "Doddy", "fitri"]
// =============================

// ============== slice ===============
// rumus = slice(awal, akhir);
// index awal terbawa di array baru, index akhir tidak
// array lama masih ada 
// let arr = ['sandhika', 'galih', 'nofa', 'doody', 'fitri'];
// let arr2 = arr.slice(1, 3);
// console.log(arr2); // object awal
// hasil ["galih", "nofa"]

// =========== forEach ============
// forEach dan map biasanya untuk looping pada array 
// foreEach  tidak mengembalikan array 
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// untuk setiap elemen pada angka lakukan fungsi console.log(e);

// angka.forEach(function (e) {
//     console.log(e);
// });
// ====== sama ajahh =======
// let cetak = function (e) {
//     console.log(e)
// }
// angka.forEach(cetak);


// let nama = ['firman', 'mulyawan', 'andi', 'dody'];

// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + 'adalah : ' + e);
// });

// =======================================

// =============== Map ====================
// Map mengembalikannya menjadi Array 
// let angka = [1, 2, 5, 3, 6, 8, 4];
// let angka2 = angka.map(function (e) {
// console.log(e); sama juga kaya forEach
//     return e * 2;
// });
// console.log(angka2);
// ======================================

// ========= sort =========
// menyusun array 
// let angka = [1, 2, 5, 3, 6, 8, 4];
// angka.sort();
// console.log(angka); //dalam bentuk array

// let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka);

// ===================================

// ========= filter =====================
// filter dan find untuk mencari elemen pada array
// find mengembalikan satu nilai 
// filter mengembalikan banyak nilai
// filter untuk mencari nilai pada array dan mengembalikannya dalam bentuk array 
// let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// let angka2 = angka.filter(function (x) {
//     // return x == 5; //[5];
//     return x > 5; // [10, 20, 6, 8];
// });
// console.log(angka2);
// ======================================

// ========== find ======================
let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
let angka2 = angka.find(function (x) {

    return x > 5;
});
console.log(angka2);

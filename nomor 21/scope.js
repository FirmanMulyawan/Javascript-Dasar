// scope adalah bagaimana sebuah variabel dapat diakses dalam program

// ada 2 jenis scope 
// - block scope 
//   digunakan C dan Java
// - function scope 
//    javascript 

// =====================================
// global scope/ windows scope
// let a = 50;
// ============================

// =============================
// function scope 
// function tes() {
// variabel yang ada di dalam function hanya berlaku untuk function ini aja
// let b = 2;
// console.log(b); //b nya tampil

// di dalam function kita bisa mengakses variabel global, 
//     console.log(b);

// }
// tes();
// kalo console.log nya diluar tidak bisa akses variabel lokal
// console.log(a);
// ==================================

// ===================================
// var a = 100;

// function tes() {
//     a = 200;
// console.log(a);   // 200
//     console.log(window.a);  //100
// }
// tes();
// console.log(a);    //100
// ==================================

// ==================================
// var a = 100;
// function tes() {
// name conflict
//     a = 200; // menjadi variabel global
// }
// tes();
// console.log(a);  // 200
// ===================================

// ==================================
// otomatis membuat variabel baru a kalo a didalam fungsi tidak diinisialisasi 
// var a;
// function tes() {
//     a = 2;

// }
// tes();
// console.log(a);
// ===================================

// =====================================
// javascriptnya akan menggunakan mode strict, jadi a menjadi variabel local 
// "use strict";
// function tes() {
//     a = 4;

// }
// tes();
// console.log(a);  //error
// ======================================

// =======================================
// hasilnya adalah 2, karena angka 2 masuk ke parameter a
// let a = 1;
// function tes(a) {
//     console.log(a);  // 2
// }

// tes(2);
// console.log(a); //1
// =======================================

// ========================================
let a = 1;
function tes(a) {
    console.log(a);  // 1 variabel local
}

tes(a);
console.log(a);  // 1 variabel global
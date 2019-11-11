// rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// rekursif harus berakhir dan menghasilkan nilai (mirip dengan looping)

// ==================================
// rekursif infinity 
// function tes() {
//     return tes();
// }
// tes();
// ===================================
// infinity  rekursif
// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n - 1);
// }

// tampilAngka(10);
// ====================================

// ===================================
// base case adalah kondisi akhir dari rekursif yang menghasilkan nilai

// function tampilAngka(n) {
//     // base case----
//     if (n === 0) {
//         return;
//     }
//     // ---------------
//     console.log(n);
//     return tampilAngka(n - 1);
// }
// tampilAngka(10);

// =============================
// let n = parseInt(prompt('masukkan nilai:'));

// function faktorial(n) {
//     if (n === 0) return 1;
//     return n * faktorial(n - 1);
// }
// console.log(faktorial(n));

// =============================
// rekursif = semua  looping bisa dibuat rekursif, tapi tidak sebaliknya

// ==============================
// implementasi rekursif
// - menggantikan looping
// - fibonaci
// - pencarian dan penelusuran pada struktur data list dan tree
// - untuk bahasa pemrograman yang tidak memiliki pengulangan contoh: Haskell, erlang, prolog dll.
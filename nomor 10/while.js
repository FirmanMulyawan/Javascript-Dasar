// sintaks while

//-- selama kondisi di dalam kurung bernilai true lakukan aksi dalam blok {}
//-- aksi bisa lebih 1 baris

// ---- sintaks ----
// while (kondisi) {  
//     aksi
// }

// ------ contoh 1 looping forever / infinite loop (pengulangan tanpa batas) --------
// while (true) {
//     console.log('hello world!');
// }

// ------- contoh 2 aksi tidak pernah dijalankan
// while (false) {
//     console.log('hello world');
// }

// ---- menghentikan infinite loop dengan 2 cara 
// -- dihentikan oleh user 
// diset true agar masuk terlebih dahulu ke pengulangannya 
// let ulang = true;
// -- selama nilai ulang = true
// while (ulang) {
//     console.log('hello world');
//     ulang = confirm('lagi?');
// }

// -- dihentikan oleh program itu sendiri
// sintaksnya 
// nilai awal 
// while (kondisi terminasi){
//     aksi
//     increment / dectrment 
// }

// let nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//     console.log('hello world ' + nilaiAwal + ' x');
//     // nilaiAwal++; // nilaiAwal = nilaiAwal + 1;
//     nilaiAwal = nilaiAwal + 2;
// }

// let nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//     console.log('hello world ' + nilaiAwal + ' x');
//     // nilaiAwal++; // nilaiAwal = nilaiAwal + 1;
//     nilaiAwal = nilaiAwal + 2;
// }
let jmlAngkot = 20;
let noAngkot = 1;
while (noAngkot <= jmlAngkot) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    // unique 
    // noAngkot++;
    noAngkot -= -1;
}
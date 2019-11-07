// for (let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//     console.log('hello world ' + nilaiAwal + ' x');
// }
let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
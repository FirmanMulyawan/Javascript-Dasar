//  function declaration
// - lebih fleksibel (dapat ditulis dimanapun) karena bisa ditulis deklarasi functionnya sebelum atau sesudah pemanggilan function, bisa  panggil dulu baru dideklarasikan atau  sebaliknya, deklarasikan dulu baru dipanggil
// - karena konsep hoisting
// - mudah dipahami pemula

//penulisan function declaration
// function identifier (parameter[opt]){
//     function body
// }

// function tampilPesan(nama){
//     alert('halo'+nama);
// }
// tampilPesan('sandhika');
// ================================

// ================================
// - function expression harus didefinisikan terlebih dahulu sebelum dipanggil
// - lebih powerfull
//     -sebagai closure
// - sebagai argumen untuk function lain.
// - IIFE (immediately invoked function expression)
// penulisan function expression
// function identifier [opt](parameter[opt]){
//     function body
// }

// let tampilPesan = function (nama) {
//     alert('halo' + nama);
// }
// harus didefinisikan terlebih dahulu
// tampilPesan('sandikha');
// ============================
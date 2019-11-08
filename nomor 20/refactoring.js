// refactoring adalah sebuah proes mengubah kode agar menjadi lebih 'baik' tanpa mengubah fungsionalitasnya.

// kenapa harus melakukan refactoring 
// - readability = kemudahan dalam membaca program 
// - DRY (Don't Repeat Yourself) 
// - testability = penulisan kode agar mudah dilakukan pengujian 
// - performace 
// Maintainability = bagaimana program kita dapat mudah dikelola atau dikembangkan

// =================================
// function jumlahVolumeDuaKubus(a, b) {
//     let VolumeA;
//     let VolumeB;
//     let total;

//     VolumeA = a * a * a;
//     VolumeB = b * b * b;

//     total = VolumeA + VolumeB;
//     return total;
// }
// alert(jumlahVolumeDuaKubus(8, 3));
// ==================================

// =================================
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));
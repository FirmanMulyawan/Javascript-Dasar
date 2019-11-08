// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);




// parameter / argument adalah data yang dikirim dari luar saat pemanggilan function, untuk digunakan didalam function
// -anggap sebagai variabel khusus untuk function 
// - parameter boleh ada atau tidak 
// - jika ada, boleh sebanyak mungkin sesuai kebutuhan
function jumlahVolumeDuaKubus(a, b) {
    let VolumeA;
    let VolumeB;
    let total;

    VolumeA = a * a * a;
    VolumeB = b * b * b;

    total = VolumeA + VolumeB;
    //- sebuah function biasanya mengembalikan sebuah nilai
    // - menggunakan keyword return, lalu diikuti dengan nilai kembaliannya, 
    // kegunaannya adalah untuk memberitahu interpreter bahwa kita telah selesai mengerjakan sesuatu dan 'inilah' hasilnya 
    // setelah sampai pada keyword return, function akan berhenti berjalan
    return total;
}
console.log(jumlahVolumeDuaKubus(10, 3));
alert(jumlahVolumeDuaKubus(10, 15));
alert('hasil kubusnya ' + (jumlahVolumeDuaKubus(10, 15)));

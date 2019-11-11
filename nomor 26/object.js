// array itu merupakan object
// array adalah kumpulan nilai yang memiliki index. array adalah varaibel yang lebih sakti
// object adalah kumpulan nilai, yang memiliki nama. object adalah array yang lebih sakti. 

// kenapa menggunakan object 
// let mahasiswa = {
//     nama: 'sandhika Galih',
//     lulus: true,
//     IPSmester: [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif: function () {
//         let total = 0;
//         let ips = this.IPSmester;
//         for (let i = 0; i < ips.length; i++) {
//             total = total + ips[i];
//         }
//         return total / ips.length;
//     }
// }

// =========== Membuat object literal ========
// let mhs = {}; // object kosong
let orang = {
    // nama, umur, pekerjaan adalah variabel yang ada di dalam object
    // sandhika Galih, 31, Dosen disebut properti
    nama: 'sandhika Galih',
    umur: 31,
    pekerjaan: 'Dosen',
    // dalam object bisa ada function 
    // function didalam object disebut method 
    // nama method nya sapa
    sapa: function () {
        return 'Hi, nama saya' + this.nama + 'usia saya' + this.umur + 'tahun, dan saya adalah seorang' + this.pekerjaan;
    }
};

// ============== object didalam object ======
let mhs = {
    nama: 'Sandhika galih',
    umur: 31,
    ips: [3.00, 2.50, 3.20],
    alamat: {
        jalan: 'Jl. abc no. 11',
        kota: 'bandung',
        provinsi: 'jawa barat'
    }
}

// ==== pemanggilan object
// mhs.nama;
// mhs['nama'] // sandhika galih
// mhs.ips[2] //3.20
// mhs.alamat
// mhhs.alamat.kota // bandung
// mhs['alamat']['jalan']
// mhs.alamat['provinsi']
// popup Box /dialog Box
// sebuah windows kecil pada browser kita yang dapat kita munculkan sebagai
// alat interaksi yang digunakan agar user dapat berdialog dengan halaman web.
// ---- popup Box ada 3 macam:
//     -- alert
//     -- prompt
//     -- confirm


// ==================  alert 
// alert('selamat pagi dunia!');
// alert('nama');
// alert('saya');
// alert('Firman Mulyawan');
// alert fungsinya menampilkan pesan sederhana ke user
// alert = fungsi
// hello world = parameter

// ===================== prompt 
// ada text box untuk memasukkan sebuah inputan 
// mengembalikan nilai apapun yang kita tuliskan di dalam inputannya 
// sebaiknya prompt dimasukkan ke dalam sebuah variabel agar nilai yang diinputkan oleh user bisa ditampung
// let nama = prompt('masukkan nama:');
// alert('hello ' + nama);


// ======================== confirm 
// confirm digunakan untuk meminta confirmasi dari user
// paling simple untuk mendelete data 
// mengembalikan nilai boolean true / false
// digunakan biasanya dalam pengkondisian atau pengulangan 
// let tes = confirm('kamu yakin');
// if (tes === true) {
//     alert('user menekan tombol OK!');
// }
// else {
//     alert('user menekan tombol CANCEL');
// }
// alert('hasilnya adalah ' + tes);

alert('selamat datang');
let lagi = true;
// teori truthy dan falsy
while (lagi) {
    // while (lagi === true) {
    let nama = prompt('masukkan nama:');
    alert('hallo ' + nama);

    lagi = confirm('coba lagi?');
}
alert('terima kasih');
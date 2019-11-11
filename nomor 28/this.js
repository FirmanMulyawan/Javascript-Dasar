// this
// this adalah sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function
// jadi setiap function / object otomatis menggunakan cara apapun ada keyword thisnya. 
// console.log(this); //secara default isinya windows
// let a = 10;
// console.log(this.a); //a
// scope global this adalah windos


// ======= penambahan this ==============
// cara 1 - function declaration
// function halos() {
//     // let obj = {};
//     console.log(this); //widows
//     console.log('halo firman');
// }
// this.halos(); //sama kaya halos();
// this mengembalikan object global pada function decoration
// =======================================

// ====== cara 2 - object literal ==========
// let obj = { a: 10, nama: 'shandika' };
// obj.halo = function () {
//     console.log(this);
//     // { a: 10, nama: 'shandika', halo:f};
//     console.log('hallo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// ==========================================


// ========= cara 3 - constructor ===========
function Halo() {
    console.log(this);
    console.log('Halo');
}
let obj1 = new Halo(); // this obj1
let obj2 = new Halo(); // this onj2
// this mengembalikan object yang baru dibuat
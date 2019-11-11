// - memebuat object secara
// - Literal
// - Function Decoration
// - Constructor Function (keyword new) 
// - Object.create ()

// =========== membuat object literal 
let mhs1 = {
    nama: 'Shandika Galih',
    nrp: '0435443',
    email: 'sandhikagalih@unpas.ac.id',
    jurusan: 'Teknik Informatika'
}

let mhs2 = {
    nama: 'Doddy',
    nrp: '0435443000',
    email: 'doddy@gmail.com',
    jurusan: 'Teknik Industr'
}

// ====== membuat object Function Decoration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    let mhs = {};
    // property object diisi  dengan parameter
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs3 = buatObjectMahasiswa('nofariza', '123342', 'nofa@yahoo.com', 'Teknik Pangan');

// ===== membuat object Constructor
// biasanya nama functionnya awalnya huruf besar
function Mahasiswa(nama, nrp, email, jurusan) {
    // let this = {}; //anggap saja
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}
// harus ada new kalo constructor
let mhs4 = new Mahasiswa('erik', '677557', 'erik@icloud.com', 'Teknik Mesin');
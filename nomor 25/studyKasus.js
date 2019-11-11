let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari puction
        return penumpang;
    }
    else {
        // telusuri seluruh kursi dari awal 
        for (i = 0; i <= penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + 'Sudah ada didalam.');
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
};

// ============= hapus penumpang =========
let hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tidak mungkin ada penumpang turun
        console.log('Angkot Masih kosong. ');
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal 
        for (i = 0; i <= penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan menghapus namanya menjadi undefined
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + 'tidak ada');
                return penumpang;
            }
        }
    }
}

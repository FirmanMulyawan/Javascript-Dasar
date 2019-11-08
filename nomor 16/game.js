//menangkap pilihan player
let tanya = true;
while (tanya) {
    let p = prompt('pilih: gajah, semut, orang');
    //menangkap pilihan computer

    //membangkitkan bilangan random
    let comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    //menentukan rules
    let hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // }
        // else {
        //     hasil = 'KALAH';
        // };
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'salah pilih';
    }
    //tampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil);
    tanya = confirm('lagi?');
}

alert('terima kasih sudah bermain');
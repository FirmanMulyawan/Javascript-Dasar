/*
switch (ekspresi){
    case 'nilai 1':
        aksi 1
        [break;]
    case 'nilai 2':
        aksi 2
        [break;]
    case 'nilai n':
        aksi n
        [break;]
    default:
        aksi default
        [break;]
}
*/


// ketika menggunakan promp semua masukan jadi string
// parseInt = apapun yang diinputkan di prompt jadi integer 
// let angka = parseInt(prompt('masukkan angka: '));

// if (angka === 1) {
//     alert('anda memasukkan angka 1');
// }
// else if (angka === 2) {
//     alert('anda memasukkan angka 2');
// }
// else if (angka === 3) {
//     alert(' anda memasukkan angka 3');
// }
// else {
//     alert('angka yang anda masukkan salah!');
// }

// let angka = parseInt(prompt('masukkan angka: '));

// switch (angka) {
//     // case (angka <= 10): // ngga bisa coy
//     case 1:
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('anda salah memasukkan angka');
//         break;
// }


let item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, etc)');

// switch (item) {
//     case 'nasi':
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'daging':
//         alert('makanan /minuman SEHAT');
//         break;
//     case 'susu':
//         alert('makanan /minuman SEHAT');
//         break;
//     case 'hamburger':
//         alert('makanan /minuman TIDAK SEHAT');
//         break;
//     case 'softdrink':
//         alert('makanan /minuman TIDAK SEHAT');
//         break;
//     default:
//         alert('salah input');
//         break;
// }


//=========== atau ========== 
switch (item) {
    case 'nasi':
    // alert('makanan / minuman SEHAT!');
    // break;
    case 'daging':
    // alert('makanan /minuman SEHAT');
    // break;
    case 'susu':
        alert('makanan /minuman SEHAT');
        break;
    case 'hamburger':
    // alert('makanan /minuman TIDAK SEHAT');
    // break;
    case 'softdrink':
        alert('makanan /minuman TIDAK SEHAT');
        break;
    default:
        alert('salah input');
        break;
}
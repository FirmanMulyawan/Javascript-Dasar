// for (let i = 0; i < 5; i++) {
//     console.log('*');
// }

// =======================================
/*   *****   */
// let s = '';
// for (let i = 0; i < 10; i++) {
//     s = s + '*'; //s += '*';
// }
// console.log(s);
// =====================================


// ====================================
/*
*
*
*
*
*
*/
// let s = '';
// for (let i = 0; i < 5; i++) {
//     s = s + '*'; //s += '*';
//     s += '\n';
// }
// console.log(s);
// ==================================

// ===================================
/*
**********
**********
**********
**********
**********
**********
**********
*/

// let s = '';
// for (let i = 0; i < 7; i++) {  //pengulangan baris
//     for (let j = 0; j < 10; j++) {
//         s = s + '*'; //s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// =====================================


// ====================================
/*
*
**
***
****
*****
*/
// let s = '';
// for (let i = 0; i < 5; i++) {  //pengulangan baris
//     for (let j = 0; j <= i; j++) {
//         s = s + '*'; //s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// ========================================

// ===================================
/*
*****
****
***
**
*
*/
// let s = '';
// for (let i = 5; i > 0; i--) {  //pengulangan baris
//     for (let j = 0; j < i; j++) {
//         s = s + '*'; //s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// =======================================


// ==================================
/*
*****
****
***
**
*

*/

let s = '';
for (let i = 1; i <= 5; i++) {  //pengulangan baris
    for (let j = 1; j <= 1; j++) {
        s = s + ' '; //s += '*';
    }
    for (let k = i; k <= 5; k++) {
        s = s + '*';
    }
    s += '\n';
}
console.log(s);
// ==========================================
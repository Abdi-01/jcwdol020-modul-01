// Conditional statement : code yang ditujukan untuk memberikan pilihan eksekusi
//                         program sesuai kondisi yang diberikan.
/**
 * - if : untuk satu kondisi 
 * - if...else : untuk dua kondisi
 * - if...else if...else : untuk tiga kondisi atau lebih
 * - switch...case : pengkondisian dalam bentuk validasi kecocokan nilai
 */

// Contoh data
let nama: string = "Edo";
let usia: number = 10;
let email: string = "edo@tensei.com"

// IF STATEMENT
/**
 * Aturan penulisan :
 * if(condition){
 *     - taskCode
 * }
 * note :
 * - condition : kondisi yang diinginkan berdasarkan nilai boolean
 *             yang didapat dari COMPARISON/LOGICAL/TRUTHLY/FALSY
 * - taskCode : kumpulan baris program yang ingin dijalankan
 */
// Example case : memvalidasi batas usia tertentu
let message = "";
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`
}

console.log(message);

// IF...ELSE STATEMENT
/**
 * Aturan penulisan :
 * if(condition){
 *     - taskCode
 * }else{
 *     - taskCode
 * }
 */
usia = 18
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`;
} else {
    message = `Verifikasi usia ${email} GAGAL`;
}

console.log(message);

// IF...ELSE IF...ELSE
/**
 * Aturan penulisan :
 * if(condition){
 *     - taskCode
 * }else if(condition){
 *     - taskCode
 * }else{
 *     - taskCode
 * }
 */

let examGrade: number = 75;
let result: string = ""; // varible penampung output
if (examGrade >= 90) {
    result = "Grade A"
} else if (examGrade < 90 && examGrade >= 80) {
    result = "Grade B"
} else if (examGrade < 80 && examGrade >= 70) {
    result = "Grade C"
} else {
    result = "Grade D"
}

console.log(result);

// Ternary operator 
/**
 * Aturan penulisan :
 * let value : string = condition ? mainValue : optionValue;  
 */
// Cara 1
usia = 10;
let verified: string = usia > 17 ? 'Berhasil' : 'GAGAL';
message = `Verifikasi usia ${email} ${verified}`;
console.log(message);

// Cara 2
usia = 20;
message = `Verifikasi usia ${email} ${usia > 17 ? 'Berhasil' : 'GAGAL'}`;
console.log(message);

// SWITCH CASE
/**
 * Aturan penulisan :
 * switch(variableOfValue){
 *      case "A":
 *          - taskCode
 *      case "B":
 *          - taskCode
 *      default:
 *          - taskCode
 * }
 */
let job: string = "Doctor";

switch (job) {
    case "Coder":
        console.log("Build a software");
        break;
    case "Driver":
        console.log("Driving car");
        break;
    default:
        console.log("I don't know");
}


// Exercise :
// Soal 1 : - Buat program untuk menentukan harga tiket berdasarkan usia
//          - Usia dibawah 5 tahun maka gratis, usia 5 s/d 17 tahun 20.000,
//            usia 17 s/d 60 tahun 50.000 dan usia diatas 60 tahun gratis

// Soal 2 : Buat pengkondisian untuk memastikan suatu data merupakan email atau bukan
let Email: string = "abdi@gmail.com"
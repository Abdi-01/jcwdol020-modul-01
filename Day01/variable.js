// Variable : Penampung data
/**
 * Susunan penulisan variable --> keywordVariable namaVariable = dataVariable;
 * keywordVariable : var, let, const
 * namaVariable : - harus diawali dengan huruf atau diawali dengan symbol "_" atau symbol "$"
 *                - jika nama variable terdiri dari dua suku kata, maka disusun dengan mode
 *                  camelCase atau snake_case.
 * dataVariable : nilai yang ingin kita simpan berdasarkan tipe data yang tersedia, diantaranya
 *                string, number, boolean, null, undefined, array dan object.
 */

// Variable declaration
var message;

// Variable initialitation
var nama = "Abdi";

// fungsi JS, yang bertugas untuk menampilkan data dari suatu variable/function/data secara langsung
console.log(nama);

// Keyword var : Redeclare, Reassign
var city = "Malang";
console.log(city);
var city = "Bandung"; // Redeclare
console.log(city);
city = "Surabaya"; // Reassign
console.log(city);

// Keyword let : Non-redeclare, Reassign
let age = 40;
console.log(age);
// let age = 25; Non-redeclare
age = 30;
console.log(age);

// keyword const : Non-redeclare, Non-reassign
const PI = 3.14;
console.log(PI);

// const PI = 22 / 7; // Non-redeclare
// PI = 3.15; // Non-reassign

// Data Type : Kumpulan model tipe data pada javascript
// Primitive
let region = "East Java"; // string
let weight = 30.5; // number
let isActive = true; // boolean
const NoData = null; // null
const undefinedData = undefined; // undefined
// Non-Primitive
const product = ["Apel", "Jeruk", "Semangka"]; // Array
const job = {
  position: "Coder",
  salaryRate: 4000000,
}; // Object

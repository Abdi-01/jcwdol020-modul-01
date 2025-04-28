// Array
/**
 * - Definisi : Sebuah tipe data yang berisi sekumpulan data.
 *              Dan setiap data memiliki alamat index yang selalu 
 *              dimulai dari index ke - 0.
 * 
 * - Tujuan : untuk mempermudah pengelolaan data.
 * - Penulisan : data array ditandai dengan kurung siku [..., ...]
 * - Example : let numbs:number[] = [1, 2, 3, 4]  
 */

let headphone: string = "Headphone";
let laptop: string = "Laptop";

const gadgetList: string[] = ["Headphone", "Laptop", "TWS", "Pen"];
console.log(gadgetList);
// Cara memanggil data tertentu dari suatu array : namaVariable[index_yg_dipilih]
console.log(gadgetList[1]);
console.log(gadgetList[0]);

const gadgetPrice: number[] = new Array(850000, 4500000)
console.log(gadgetPrice);

console.log(typeof gadgetList);
console.log(typeof gadgetPrice);
console.log(typeof null);

// Cara mengganti salah satu data array secara langsung
gadgetList[1] = "Macbook";
console.log(gadgetList);
console.log(gadgetList[2]);
// Dari data array yang ada, coba rubah menjadi data string berbentuk list barang
// PROCESS
// - Gunakan for loop untuk mengakses setiap data array
// console.log(gadgetList[0]);
// console.log(gadgetList[1]);
// console.log(gadgetList[2]);
// console.log(gadgetList[3]);
let printList: string = "";
for (let i: number = 0; i < gadgetList.length; i++) {
    printList = printList + `${i + 1}. ${gadgetList[i]}\n`;
}
console.log(printList);


/**
 * Output :
 * 1. Headphone
 * 2. Macbook
 * 3. TWS
 * 4. Pen
 */

// Array function
// array.length : mengetahui jumlah data pada array
console.log(gadgetList.length);

// array.push(newData) : menambahkan data baru pada akhir array
gadgetList.push("Smartwatch");
console.log(gadgetList);
console.log(gadgetList.length);

// array.pop() : menghapus data terakhir suatu array
gadgetList.pop();
console.log(gadgetList);

// array.unshift(newData) : menambahkan data baru pada awal array
gadgetList.unshift("PC");
console.log(gadgetList);

// array.shift() : menghapus data awal suatu array
gadgetList.shift();
console.log(gadgetList);

// array.splice() : menghapus/menyisipkan/memperbarui data pada index tertentu
// 1. Menghapus data : array.splice(pilihanIndex, jumlahYangDihapus)
let carBrands: string[] = ["Toyota", "Mazda", "Nissan"];
console.log(carBrands);
carBrands.splice(1, 1);
console.log(carBrands);

// 2. Menyisipkan data : array.splice(pilihanIndex, jumlahYangDihapus, newData1, newData2,...)
carBrands.splice(1, 0, "Subaru", "Lexus");
console.log(carBrands);

// 3. Memperbarui data : array.splice(pilihanIndex, 1, newData)
carBrands.splice(2, 1, "Daihatsu");
console.log(carBrands);

// array.indexOf("data") : mencari index suatu data
console.log(carBrands.indexOf("Subaru"));

// array.reverse() : membalikkan urutan data
carBrands.reverse();
console.log(carBrands);

// array.sort() : mengurutkan data ASC
carBrands.sort();
console.log(carBrands);

// Penggabungan data Array
const studentsA: string[] = ["Andre", "Edo"];
const studentsB: string[] = ["Erica", "Steven"];
// array.concat(dataArray1, dataArray2,...);
const students: string[] = studentsA.concat(studentsB, "Ruben", "Sanadi");
console.log(students);

// Spread operator : menyalin data dari suatu array ke array yang baru dan menggabungkan dengan data array lain
const studentList: string[] = [...studentsA, ...studentsB, "Ruben"];
console.log(studentList);

// Array destructure : mengeluarkan nilai suatu array menjadi variable yang berdiri sendiri
const data: any[] = ["Ruben", "Diaz", 17];
const [firstName, lastName, age] = data;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(firstName);




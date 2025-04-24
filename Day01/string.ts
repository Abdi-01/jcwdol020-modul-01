// String : data yang terdiri dari huruf atau karakter text
let namaToko: string = "RUNNER SPORT"; // Double quotes
let alamatToko: string = `Jl. Pemuda No. 90-100`; // Template literal atau backthick

// Menggabungkan data string
// Cara 1 : Menggunakan operator penjumlahan +
let tokoKu: string = namaToko + " " + alamatToko;
console.log(tokoKu);

// Cara 2 : Menggunakan template literal with backthick
tokoKu = `${namaToko} ${alamatToko}`;
console.log(tokoKu);

// typeof : fungsi JS yang bertugas untuk mengetahui tipe data suatu variable atau data itu sendiri
console.log(typeof tokoKu);
console.log(typeof 10);

// FUNGSI BAWAAN TIPE DATA STRING
let greeting: string = "Hello, Purwadhika Student";

// length : menghitung panjang karakter pada data string
console.log(greeting.length);

// toLowerCase() : merubah semua karakter menjadi huruf kecil
console.log(greeting.toLowerCase());

// toUpperCase() : merubah semua karakter menjadi huruf besar
console.log(greeting.toUpperCase());

// includes() : memastikan suatu kata didalam string
console.log(greeting.includes("Student"));

// split() : merubah data string menjadi data array
console.log(greeting.split(" "));

// replace : mengganti kata tertentu
console.log(greeting.replace("Student", "Murid"));



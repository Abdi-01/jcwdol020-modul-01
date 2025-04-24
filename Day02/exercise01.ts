// Hitung total belanja
// INPUT : hargaBarang, jumlahBarang
let hargaBarang: number = 5000;
let jumlahBarang: number = 4;
// PROCESS : hargaBarang * jumlahBarang
const totalBelanja: number = hargaBarang * jumlahBarang
// OUTPUT : totalBelanja
console.log(totalBelanja.toLocaleString('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}));
// Soal 01





// Soal 02
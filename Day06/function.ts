// Function
/**
 * - Definisi : Sekumpulan program yang ditujukan untuk menyelesaikan suatu proses khusus.
 *              - Untuk menggunakan function, maka harus dibuat terlebih dahulu.
 *              - Function bersifat reusable dan modular
 * - Kategori : Built-in function dan User-defined function
 * - Aturan :
 *      - Nama function mengacu pada aturan penamaan variable
 *      - Format penulisan :
 *          - Declarative function :
 *                  function namaFunc(param1?, param2?,...){
 *                      - code
 *                  }
 *         - Function expression :
 *                  const namaFunc = function(param1?, param2?,...){
 *                      - code
 *                  }
 *         - Arrow function
 *                  a. const namaFunc = (param1?, param2?,...) => - code
 *                  b. const namaFunc = (param1?, param2?,...) => {
 *                          - code
 *                     }
 * - Function mungkin membutuhkan parameter. Parameter merupakan penampung value dari luar function,
 *   yang nantinya mungkin akan dibutuhkan untuk melengkapi proses didalam function.
 * - Function biasanya menghasilkan nilai output melalui return bisa juga tidak.
 */

// Declarative function
// Membuat function
function penjumlahan(angkaA: number, angkaB: number) {
    const result: number = angkaA + angkaB;

    return result
}

penjumlahan; // memanggil fungsi

// penjumlahan(); // menjalankan fungsi

console.log(penjumlahan(15, 2));

// CALLBACK FUNCTION : sebuah function yang dititipkan lewat parameter untuk dijalankan
//                     didalam function utama pemilik parameter

function renderCalculator(angkaC: number, angkaD: number, callbackFnOperation: any) {
    const hasil: number = callbackFnOperation(angkaC, angkaD);
    console.log(`Hasil perhitungan : ${hasil}`);
}

function pengurangan(valueA: number, valueB: number) {
    return valueA - valueB;
}
function perkalian(valueA: number, valueB: number) {
    return valueA * valueB;
}

renderCalculator(12, 5, pengurangan);
renderCalculator(12, 5, perkalian);
renderCalculator(12, 5, function (nilaiA: number, nilaiB: number) {
    return nilaiA / nilaiB;
});
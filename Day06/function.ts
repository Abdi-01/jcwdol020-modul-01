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
console.log(penjumlahan(10, 12));

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
// Callbackfn with Function expression
renderCalculator(12, 5, function (nilaiA: number, nilaiB: number) {
    return nilaiA / nilaiB;
});

// Callbackfn with Arrow function
renderCalculator(12, 5, (nilaiA: number, nilaiB: number) => {
    return nilaiA / nilaiB;
});

// array.forEach(), array.map()

// array.forEach(callback) : mengakses setiap value pada suatu array
const nameList: string[] = ["Edo", "Kevin", "Marsel"];

for (let i: number = 0; i < nameList.length; i++) {
    console.log(i);
    console.log(nameList[i]);
};

nameList.forEach(function (value: string, index: number) {
    console.log(index);
    console.log(value);
});

let numberList: number[] = [2, 3, 4, 5, 1];

numberList.forEach((data: number, i: number) => {
    console.log(data);
    console.log(i);
})

// array.map(callback) : mengakses setiap value pada array dan dijadikan data array baru
let priceList: number[] = [2000, 20000, 200000, 2500000];// --> ["Rp 2.000", "Rp 20.000", "Rp 200.000", "Rp 2.500.000"]
let currencyList: string[] = priceList.map((value: number) => {
    return value.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    })
});

console.log(currencyList);

// Exercise : Coba pahami cara kerja forEach, lalu duplikasi kedalam function yg kalian buat sendiri

let usia: number[] = [12, 17, 20];
usia.forEach((value: number, index: number) => {
    console.log(value);
});

function duplicateForEach(dataArray: any[], callback: any) {
    // what the code ?
    for (let i = 0; i < dataArray.length; i++) {
        callback(dataArray[i], i);
    }
};

duplicateForEach(usia, (value: number, index: number) => {
    console.log(value);
    console.log(index);
});

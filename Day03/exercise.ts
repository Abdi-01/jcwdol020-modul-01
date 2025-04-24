// Memeriksa suatu bilangan prima

// INPUT : numb
let numb: number = 20;
// Process :
/**
 * - Buat variable count = 0;
 * - Melakukan perulangan dari angka i = 1 hingga angka yang diinputkan
 * - Setiap terjadi perulangan maka angka dari numb akan kita mod dengan i
 * -    Jika numb % i === 0
 * -        count++
 * - Setelah perulangan selesai maka count akan diperiksa
 * -    Jika count === 2
 *          Tampilkan "Prime"
 * -    Else
 *          Tampilkan "Not Prime"
 */
let count: number = 0;
for (let i: number = 1; i <= numb; i++) {
    if (numb % i === 0) {
        count++;
    }
}

if (count === 2) {
    // OUTPUT : "Prime" jika bilangan prima dan "Not Prime" Jika bukan bilangan prima
    console.log("Prime");
} else {
    console.log("Not Prime");
}

// Boolean : tipe data yang hanya memiliki dua opsi nilai yaitu true atau false
let benar: boolean = true;
let salah: boolean = false;

// Comparison operator : >, <, >=, <=, ==, ===, !=
let valueA: string | number = 12;
let valueB: string | number = 15;

console.log(valueA > valueB);
console.log(valueA < valueB);
console.log(valueA >= 8);
console.log(valueB <= 15);
console.log(valueA != valueB);
console.log(valueA == valueB);
console.log(valueA === valueB);

// Logical operator : AND &&, OR ||, NOT !
// AND : logika yang akan menghasilkan nilai TRUE jika semua nilai boolean yang disimpulkan nilainya TRUE
console.log(true && true);
console.log(valueA === 12 && valueB < 20);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR : logika yang akan menghasilkan nilai TRUE jika salah satu nilai boolean yang disimpulkan nilainya TRUE
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// NOT : membalikkan nilai boolean
console.log(!false);
console.log(!(valueA === valueB));

// Nilai boolean berdasarkan data
// TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));















// Number : tipe data dalam bentuk angka

let jarak: number = 1500;// Nilai INT
let berat: number = 90.25; // Nilai Float

// Aritmethic : +, -, *, ?, %
let angkaA: number = 12;
let angkaB: number = 10;

let result: number;
result = angkaA / angkaB;
console.log(result);

// Increment
let count: number = 0;
count++; // Postfix count = count + 1;
count++; // Postfix
++count; // prefix
console.log(count);
console.log(++count);
console.log(count);


// Decrement
count--;
count--;
count--;
console.log(count);

// Math Object
const PI: number = Math.PI;
console.log(PI);

// Pembulatan
console.log(Math.round(25.4));
console.log(Math.round(25.6));
console.log(Math.ceil(25.1));
console.log(Math.floor(25.9));

// MIN and MAX
console.log(Math.max(12, 5, 9, 85, 75));
console.log(Math.min(0, -5, 78, 45));

// Random value
console.log(Math.random());

// Parsing data 
let angka: string = "123.456"
console.log(parseInt(angka));
console.log(parseFloat(angka));

let price: number = 525000;
console.log(price.toString());
console.log(price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}));


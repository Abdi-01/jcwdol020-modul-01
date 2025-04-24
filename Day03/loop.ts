// Looping : cara untuk menjalankan program berulang

/**
 * FOR LOOP : perulangan yang digunakan ketika dari awal sudah diketahui batas loopingnya
 * Aturan penulisan :
 * for(statement_1;statement_2;statement3){
 *      - taskCode
 * }
 * statement_1 : variable yang mendefinisikan nilai awal dari hitungan batas looping
 * statement_2 : kondisi untuk memeriksa bahwa statement_1 memiliki nilai sesuai kondisi yang diberikan
 * statement_3 : berisi perhitungan increment atau decrement yang dilakukan pada variable statement_1
 */

for (let i: number = 0; i < 5; i++) {
    console.log(`Loop Ke-${i}`);
}

/**
 * WHILE LOOP : secara umum digunakan untuk proses looping yang batasnya tidak pasti
 * Aturan penulisan :
 * while(condition){
 *      - taskCode
 * }
 */

let count: number = 0;

while (count < 5) {
    console.log(`Loop Ke-${count}`);
    count++;
}

/**
 * DO WHILE : secara umum sama cara kerjanya dengan while. 
 *            tetapi do while pasti minimal taskCodenya akan dieksekusi 1 Kali
 * 
 * Aturan penulisan :
 * do{
 *      - taskCode
 * }while(condition)
 */

let countB: number = 0;

do {
    console.log(`Loop Ke-${countB}`);
    countB++;
} while (countB < 5)
// Object : tipe data yang mampu menampung sekumpulan tipe data lain berdasarkan nama property

/**
 * Aturan penulisan :
 * const dataObject = {
 *      namaProperty : value,
 *      username: "Edi",
 *      age: 17,
 *      isActive: true
 * }
 */
type TStudent = {
    fullName: string;
    age: number;
    isActive: boolean;
    grade: string[];
    phone: string;
}

const student: TStudent = {
    fullName: "Abdi",
    age: 20,
    isActive: true,
    grade: ["A", "B", "C"],
    phone: ""
};

console.log(student.age);
console.log(student.fullName);
console.log(student["fullName"]);

console.log(student.grade[2]);


student.fullName = "Edo Guerero";
console.log(student);


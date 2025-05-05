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
    phone?: string;
}

const student: TStudent = {
    fullName: "Abdi",
    age: 20,
    isActive: true,
    grade: ["A", "B", "C"],
};

console.log(student.age);
console.log(student.fullName);
console.log(student["fullName"]);

console.log(student.grade[2]);


student.fullName = "Edo Guerero";
console.log(student);

// LOOPING OBJECT : for...in
for (const propertyName in student) {
    console.log(propertyName);
    console.log(student[propertyName]);
}

// ARRAY of OBJECT
const StudentList: TStudent[] = [
    {
        fullName: "Aldi",
        age: 15,
        isActive: true,
        grade: ["C", "B", "A"]
    },
    {
        fullName: "Edo",
        age: 16,
        isActive: true,
        grade: ["C", "B", "A"]
    }
];

StudentList.push({
    fullName: "Michel",
    age: 16,
    isActive: false,
    grade: []
});

console.log(StudentList);


// Exercise : Membuat list data murid dalam bentuk string
let printData: string = "";
for (let i = 0; i < StudentList.length; i++) {
    console.log(StudentList[i]);
    printData = printData + `${i + 1}. ${StudentList[i].fullName} berumur ${StudentList[i].age} tahun merupakan siswa ${StudentList[i].isActive ? "aktif" : "tidak aktif"}\n`;
}

console.log(printData);

// Output :
/**
 * 1. Aldi berumur 15 tahun merupakan siswa aktif
 * 2. Edo berumur 16 tahun merupakan siswa aktif
 * 3. Michel berumur 16 tahun merupakan siswa tidak aktif
 */

// CLASS OBJECT : blue print untuk membuat suatu object

/**
 * Aturan penulisan :
 * class ClassName{
 *      constructor(arg1, arg2,...){
 *          this.propertyArg1 = arg1;
 *          this.propertyArg2 = arg2;
 *      }
 * 
 *      method = function(){
 *          - taskCode
 *      }
 * }
 */

class Human {
    // Define public property
    name: string;
    gender: string;

    constructor(_name: string, _gender: string) {
        this.name = _name;
        this.gender = _gender;
    }

    introduce = function () {
        return `My name is ${this.name}`;
    }
}

// Without class
const humanA = {
    name: "aldo",
    gender: "Male"
}

// With class
const humanB = new Human("Edo", "Male");

const manusia: Human[] = [
    new Human("Edi", "Male"),
    new Human("Aldi", "Male"),
    new Human("Michel", "Female")
];

manusia.push(new Human("Halda", "Female"));

console.log(manusia[0].introduce());
console.log(manusia[2].introduce());

// INHERITANCE ==> pewarisan data dari class utama agar dapat digunakan oleh class turunannya
class Employee extends Human {
    salary: number;
    position: string;

    constructor(_name: string, _gender: string, _salary: number, _position: string) {
        super(_name, _gender);
        this.salary = _salary;
        this.position = _position;
    }
}

const pegawai = new Employee("Abdi", "Male", 3000000, "Coder");
console.log(pegawai);

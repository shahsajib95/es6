class student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Shaheen School"
    }
}

const student1 = new student(12, "Shuvo");
const student2 = new student(22, "Sajib");

// console.log(student1, student2)
console.log(student1.name)
const mark = 4.0;
const studentMarks = [3, 3, 4, 5];
class Student {
  constructor(name, course, university) {
    this.fullName = name;
    this.course = course;
    this.university = university;
    this.mar = [4, 3, 4, 5];
    this.student = true;
  }

  getInfo(studentName) {
    return (
      "Студент" +
      " " +
      this.course +
      "го" +
      " " +
      "курсу" +
      " " +
      this.university +
      " " +
      this.fullName
    );
  }
  get marks() {
    if (this.student) {
      return this.mar;
    } else {
      return null;
    }
  }
  set marks(mark) {
    if (this.student) {
      this.mar.push(+mark);
      console.log("Виправлені оцінки Максима Древецького:", this.mar);
    } else {
      return null;
    }
  }
  getAverage() {
    if (this.student === true) {
      let sum = 0;
      this.mar.forEach((el) => {
        sum += el;
      });

      return sum / this.mar.length;
    } else {
      return null;
    }
  }
  dismiss() {
    return (this.student = false);
  }
  recover() {
    return (this.student = true);
  }
}
const student = new Student("Максим Деревецький", "1", "ЛНУ");
console.log(student.getInfo("Максим Деревецький"));
console.log("Оцінки Максима Древецького", student.marks);

student.marks = prompt("Write the mark");
console.log("Середній бал", student.getAverage());
const marksF = student.mar;

student.dismiss();
console.log(student.marks);
student.addMarkFirsStudent = prompt("Write the mark");
console.log(student.marks);
student.recover();
console.log(student.marks);
class BudgetStudent extends Student {
  constructor(mar, name, course, university) {
    super(mar, name, course, university);
    this.mar = mar;
  }

  getScholarship() {
    if (this.getAverage() >= mark) {
      console.log(
        "Ви" +
          " " +
          "отримали" +
          " " +
          "1400" +
          " " +
          "грн." +
          " " +
          "стипендії"
      );
    } else {
      console.log("Sorry, your average mark is too low");
    }
  }
}
setInterval(() => {
  budgetStudent.getScholarship();
}, 30000);

const budgetStudent = new BudgetStudent(
  marksF,
  "Максим Деревецький",
  "1",
  "ЛНУ"
);

budgetStudent.getScholarship();

import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Who would you like to talk to:",
                choices: ["stuff", "student", "exit"]
            }
        ]);
        if (ans.select == "stuff") {
            console.log("You approach the stuff room feel free to ask any question..");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "which student do you want to talk to.."
                }
            ]);
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name} , nice to meet you!`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name} , nice to see you again!`);
                console.log(persons.students);
            }
        }
        if (ans.select == "exit") {
            console.log("Exiting the program..");
        }
    } while (true);
};
programStart(persons);

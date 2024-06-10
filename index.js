import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    enterStudent(obj) {
        this.student.push(obj);
    }
}
const person = new Person();
let studentDetail = async (person) => {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Please enter student name",
            choices: ["Staff", "student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("you approach the staff room.Please feel free to ask any question");
        }
        else if (ans.select == "student") {
            let res = await inquirer.prompt({
                name: "name",
                type: "input",
                message: "Enter your name"
            });
            const student = person.student.find((val) => val.name == res.name);
            if (!student) {
                const name = new Student(res.name);
                person.enterStudent(name);
                console.log(`hello i am ${name.name} .nice to meet you`);
                console.log("new student added");
                console.log("current student list");
                console.log(person.student);
            }
            else {
                console.log(`hello i am ${student.name} .nice to see you again`);
                console.log("Exiting student list");
                console.log(person.student);
            }
        }
        else if (ans.select === "Exit") {
            console.log("Exiting the program");
            process.exit();
        }
    } while (true);
};
studentDetail(person);

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("\n===== STUDENT MANAGEMENT =====");
  console.log("1. Insert Student");
  console.log("2. Display Students");
  console.log("3. Update Student");
  console.log("4. Delete Student");
  console.log("5. Exit");

  rl.question("Enter your choice: ", function (choice) {
    if (choice == 1) {
      insertStudent();
    } else if (choice == 2) {
      displayStudents();
    } else if (choice == 3) {
      updateStudent();
    } else if (choice == 4) {
      deleteStudent();
    } else if (choice == 5) {
      console.log("Thank You!");
      rl.close();
    } else {
      console.log("Invalid Choice");
      menu();
    }
  });
}

function insertStudent() {
  rl.question("Enter Roll No: ", function (roll) {
    rl.question("Enter Name: ", function (name) {
      rl.question("Enter Marks: ", function (marks) {
        let Student = `${roll},${name},${marks}\n`;
        fs.appendFileSync("studentDetails.txt", Student);

        console.log("Student Added Successfully");

        menu();
      });
    });
  });
}

function displayStudents() {
  let data = fs.readFileSync("studentDetails.txt", "utf8");

  console.log("\nRollNo\tName\tMarks");
  console.log("-------------------------");

  if (data.trim() === "") {
    console.log("No students found.");
  } else {
    let students = data.trim().split("\n");
    for (let i = 0; i < students.length; i++) {
      let details = students[i].split(",");
      if (details.length >= 3) {
        console.log(details[0] + "\t" + details[1] + "\t" + details[2]);
      }
    }
  }

  menu();
}

function updateStudent() {
  rl.question("Enter Roll No to Update: ", function (roll) {
    rl.question("Enter New Name: ", function (newName) {
      rl.question("Enter New Marks: ", function (newMarks) {
        let data = fs.readFileSync("studentDetails.txt", "utf8");

        let students = data.trim().split("\n");

        for (let i = 0; i < students.length; i++) {
          let details = students[i].split(",");

          if (details[0] == roll) {
            students[i] = `${roll},${newName},${newMarks}`;
          }
        }

        fs.writeFileSync("studentDetails.txt", students.join("\n"));

        console.log("Student Updated Successfully");

        menu();
      });
    });
  });
}

function deleteStudent() {
  rl.question("Enter Roll No to Delete: ", function (roll) {
    let data = fs.readFileSync("studentDetails.txt", "utf8");

    let students = data.trim().split("\n");

    let newData = [];
    let found = false;

    for (let i = 0; i < students.length; i++) {
      let details = students[i].split(",");

      if (details[0] != roll) {
        newData.push(students[i]);
      } else {
        found = true;
      }
    }

    fs.writeFileSync("studentDetails.txt", newData.join("\n"));

    if (found) {
      console.log("Student Deleted Successfully");
    } else {
      console.log("Student with Roll No " + roll + " not found.");
    }

    menu();
  });
}

menu();

const studentName = document.getElementById("studentName");
const studentMark = document.getElementById("studentMark");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const studentList = document.getElementById("studentList");


submitBtn.addEventListener("click", function () {

    const name = studentName.value.trim();
    const mark = parseInt(studentMark.value);

    // Validation
    if (name === "") {
        result.textContent = "Please enter a student name.";
        return;
    }

    if (isNaN(mark) || mark < 0 || mark > 100) {
        result.textContent = "Please enter a valid mark between 0 and 100.";
        return;
    }

    let grade = "";
    let status = "";

    if (mark >= 80) {
        grade = "Distinction";
        status = "PASS";
    } else if (mark >= 65) {
        grade = "Merit";
        status = "PASS";
    } else if (mark >= 50) {
        grade = "Pass";
        status = "PASS";
    } else {
        grade = "Fail";
        status = "FAIL";
    }

    result.textContent =
        `${name} scored ${mark}% - ${status} (${grade})`;

    const listItem = document.createElement("li");
    listItem.textContent =
        `${name} - ${mark}% - ${status} (${grade})`;

    studentList.appendChild(listItem);

    studentName.value = "";
    studentMark.value = "";
});
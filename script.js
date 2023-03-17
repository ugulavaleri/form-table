const markArray = [];

const container = document.getElementById("container");

const Name = document.getElementById("name");
const Surname = document.getElementById("surname");
const Age = document.getElementById("age");
const Marks = document.getElementById("marks");
const form = document.querySelector("form");
const table = document.getElementById("table");

const AccessButton = document.getElementById("AccessButton");
const tbody = document.getElementById("tbody");

const averageBtn = document.getElementById("averageBtn");
// averageBtn.style.marginTop = "50px";

AccessButton.addEventListener("click", () => {
    if (
        Name.value === "" ||
        Surname.value === "" ||
        Age.value === "" ||
        Marks.value === ""
    ) {
        alert("you must fill all gap");
    } else {
        addTableRow();
    }
});
// AccessButton.addEventListener("keypress", (event) => { // isn't working.
//     if (event.key === "Enter") {
//         addTableRow();
//     }
// });
const addTableRow = () => {
    const row = document.createElement("tr");

    const NameTd = document.createElement("td");
    const SurnameTd = document.createElement("td");
    const AgeTd = document.createElement("td");
    const MarksTd = document.createElement("td");

    NameTd.textContent = Name.value;
    SurnameTd.textContent = Surname.value;
    AgeTd.textContent = Age.value;
    AgeTd.style.textAlign = "center";
    MarksTd.textContent = Marks.value;
    markArray.push(Marks.value);
    MarksTd.style.textAlign = "center";

    row.appendChild(NameTd);
    row.appendChild(SurnameTd);
    row.appendChild(AgeTd);
    row.appendChild(MarksTd);

    tbody.appendChild(row);

    // enable buttons
    clearBtn.disabled = false;
    lastDeleteBtn.disabled = false;
    averageBtn.disabled = false;
    form.reset();
};

const tableRow = document.getElementsByTagName("tr");
const average = document.getElementById("average");
const clearBtn = document.getElementById("clearBtn");
const lastDeleteBtn = document.getElementById("lastDeleteBtn");

// calculate Average of marks
const calcAverage = () => {
    averageBtn.addEventListener("click", () => {
        const reduce = markArray.reduce((acc, cur) => {
            cur = Number(cur);
            return acc + cur;
        }, 0);
        average.textContent = `average of Marks: ${reduce / markArray.length}`;
        average.classList.remove("hide");
    });
    container.appendChild(average);
};
calcAverage();

// clear form
const clearTable = () => {
    clearBtn.addEventListener("click", () => {
        for (let index = tableRow.length - 1; index > 0; index--) {
            const element = tableRow[index];
            element.remove();
            markArray.splice(0, markArray.length);
        }
        clearBtn.disabled = true;
        lastDeleteBtn.disabled = true;
        averageBtn.disabled = true;

        average.classList.add("hide");
    });
};
clearTable();

// delete row of table
const deleteLastTr = () => {
    lastDeleteBtn.addEventListener("click", () => {
        for (let index = tableRow.length - 1; index > 0; index--) {
            const element = tableRow[index];
            element.remove();
            markArray.pop();
            break;
        }
        if (tableRow.length === 1) {
            clearBtn.disabled = true;
            lastDeleteBtn.disabled = true;
            averageBtn.disabled = true;
            average.classList.add("hide");
            // markArray.splice(0, markArray.length); // ესე მთლიანი მასივი სუფთავდება, აღარ გვჭირდება.
            // ზემოთ ისედათ ყველაფერი იშლება
        }
    });
};

deleteLastTr();

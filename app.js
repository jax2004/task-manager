let input = document.querySelector("#input-box");
let addBtn = document.querySelector(".addButton");
let list_container = document.querySelector(".ulTaskList");

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list_container.appendChild(li);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
    saveData();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addBtn.click();
  }
});

list_container.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});

function saveData() {
  try {
    localStorage.setItem("data", list_container.innerHTML);
  } catch (error) {
    alert("Something went wrong while saving data");
  }
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    list_container.innerHTML = localStorage.getItem("data");
  }
}
showTask();

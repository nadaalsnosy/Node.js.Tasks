(async function fetchTodoList() {
  //  ---------------- set main variables ----------------

  const response = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  //   console.log(data);
  let dataTitle = data.map((items) => items.title);
  //   console.log(dataTitle);
  let newArray = dataTitle.slice(0, 10);
  console.log(newArray);
  let myList = document.getElementById("myList");

  //  ---------------- add common function ----------------
  let addItem = function (itemValue) {
    let myitem = document.createElement("li");
    myitem.innerText = itemValue;
    myList.appendChild(myitem);
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    removeBtn.classList.add("removeBtn");
    myitem.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => {
      console.log("deleted");
      myitem.remove();
    });
  };

  //  ---------------- add loop ----------------

  newArray.forEach((item) => {
    addItem(item);
  });

  //  ---------------- add event ----------------

  let addBtn = document.getElementById("addBtn");
  let inputInfo = document.getElementById("myInput");
  addBtn.addEventListener("click", (newItem) => {
    newItem = inputInfo.value;
    addItem(newItem);
    inputInfo.value = "";
    console.log(newArray);
    console.log(newItem);
  });
})();

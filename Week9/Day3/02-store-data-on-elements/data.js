// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.getElementById("name");
  const type = document.getElementById("type");
  const addButton = document.getElementById("add");

  const shoppingList = document.getElementById("shopping-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("click event working");

    const listItem = document.createElement("li");
    listItem.innerText = input.value;
    listItem.dataset.type = type.value;
    shoppingList.appendChild(listItem);
    input.value = "";
    type.value = "dairy";
  });
});

// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("DOM is loaded");
  /*
    1. select elements
    2. listen for event 
    3. when input contains red change the background with style prop
      else remain transparent. 

*/
  const changeRed = (event) => {
    console.log("event ", event.target.value);
    if (redInput.value.toLowerCase().includes("red")) {
      redInput.style.background = "red";
    } else {
      redInput.style.background = "transparent";
    }
  };

  const redInput = document.getElementById("red-input");
  redInput.addEventListener("input", changeRed);

  /*
    1. select elements
    2. listen to event
    3. get value from list-add
    4. create li and set inner text to value from list add
    5. append li to the ul

  */
  const listInput = document.getElementById("list-add");
  const addItem = document.getElementById("add-item");
  const listContainer = document.querySelector("#section-2 > ul");

  const createList = () => {
    const listValue = listInput.value;
    const listItem = document.createElement("li");
    listItem.innerText = listValue;
    listContainer.appendChild(listItem);
    listInput.value = "";
  };
  addItem.addEventListener("click", createList);

  const colorSection = document.getElementById("section-3");
  const colorSelect = document.getElementById("color-select");

  const colorChange = (event) => {
    colorSection.style.background = event.target.value;
  };

  colorSelect.addEventListener("change", colorChange);

  const removeEventsButton = document.getElementById("remove-listeners");
  removeEventsButton.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRed);
    addItem.removeEventListener("click", createList);
    colorSelect.removeEventListener("change", colorChange);

  });
});

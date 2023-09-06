/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    // console.log("data ", data);
    const url = data.message; // URL of new dog image
    // console.log("url ", url);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const urlParts = url.split("/");
    // console.log("url parts ", urlParts);

    const breed = urlParts[4];
    // console.log("breed ", breed);
    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /*
         <li>
            <figure>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
                <figcaption>hound-afghan</figcaption>
            </figure>
        </li>

        1. create 4 elements 
        2. set attributes on elements
        3. set innerText value on appropriate element
        4. append or connect elements in order
        5. select live element (ul) and append the top level created element to it. 
    */
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    img.setAttribute("src", url);
    img.id = "dog-image";
    figCaption.innerText = breed;

    figure.append(img, figCaption);
    li.appendChild(figure);
    // li.style.border = "2px solid red";
    li.setAttribute('class', 'new-dogs')
    ul.appendChild(li);
    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  //1 select first item
  const firstDog = document.querySelector("ul > li");
  if (firstDog) firstDog.remove();
  //2 delete selected item
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  //1 select all dogs
  let lastDog;
  const allDogs = document.querySelectorAll("ul > li");
  //   allDogs[allDogs.length - 1].remove()
  console.log("all dogs ", allDogs);
  //2 iterate through dogs
  for (let i = 0; i < allDogs.length; i++) {
    if (i === allDogs.length - 1) lastDog = allDogs[i];
  }
  //3 select last dog
  if (lastDog) lastDog.remove();
  //   4 remove last dog
});

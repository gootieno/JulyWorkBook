// Your code here
const imageContainer = () => {
  // build the stuff here
  const container = document.createElement("div");
  const heading = document.createElement("h1");
  container.style.display = "flex";
  container.style.flexDirection = "column";

  container.appendChild(heading);
  // create image element
  // set the src from getCat function
  // append elements in order (to the body)
};

const getCat = async () => {
  // fetch for the cat image url from thecatapi
};

// const initializePage = () => {
//   imageContainer();
// };

window.onload = () => {
  imageContainer();
};

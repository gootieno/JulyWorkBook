const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seeded = document.querySelectorAll("li.seed");
  let seededArr = [];
  seeded.forEach((fruit) => seededArr.push(fruit.textContent));
  console.log("seeded array ", seededArr);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.querySelectorAll("li.seedless");
  console.log("seedless ", seedless);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = seedless[0];
  console.log("first seedless ", firstSeedless);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const div = document.getElementById("wrapper");
  console.log("you span ", div.children[0].children[0]);

  // 5. Get all children of element "wrapper"
  // Your code here
  const section2Children = document.getElementById("wrapper").children;
  console.log("section 2 children ", section2Children);

  // 6. Get all odd number list items in the list
  // Your code here
  const odds = document.querySelectorAll(".odd");
  odds.forEach((num) => console.log(num.innerText));
  // 7. Get all even number list items in the list
  // Your code here
  const allLiTags = document.querySelectorAll("ol > li");
  console.log(document.querySelectorAll("ol > li:not(.odd)"));
  for (let i = 0; i < allLiTags.length; i++) {
    if (i % 2 !== 0) console.log("even li ", allLiTags[i]);
  }
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const noClass = document.querySelectorAll("a:not([class])");
  console.log(document.querySelectorAll("#three a:not(.social, .shopping"));
  console.log("no class ", noClass);
  // 9. Get "Amazon" list element
  // Your code here
  console.log("amazon ", document.getElementsByClassName("shopping"));
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicornParents = [];
  document
    .querySelectorAll(".unicorn")
    .forEach((unicorn) => unicornParents.push(unicorn.parentElement));

  console.log(unicornParents);

  console.log("three li", three.querySelectorAll("li"));
  let listItems = document.querySelectorAll("#three li");
  let unicorns = Array.from(listItems).filter((item) => {
    let image = item.getElementsByTagName("img")[0];
    return image.getAttribute("class") === "unicorn";
  });
  console.log("unicorns ", unicorns);
};

window.onload = select;

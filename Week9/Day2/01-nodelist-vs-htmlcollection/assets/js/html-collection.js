export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log("body child elements ", bodyChildElements);

  const div = bodyChildElements[0];
  console.log("div ", div);
  const divChildElements = div.children; // HTMLCollection [span]
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  console.log("hello world ", helloWorld);
  const span = divChildElements[0]; // <span>Yes!</span>
  console.log("span ", span);
  // debugger
};

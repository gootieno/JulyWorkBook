// const ul = document.querySelector("ul");
// console.log("ul ", ul);
// const button = document.querySelector("button");
// const input = document.querySelector("input");

const upVote = document.querySelector("#upvote");
const downVote = document.querySelector("#downvote");

upVote.addEventListener("click", () => {
  const upVoteValue = upVote.innerText.split(" ")[1];
  console.log("upvote value", upVoteValue);
  upVote.dataset.count = +upVoteValue + 1;
  upVote.setAttribute("data-count", +upVoteValue + 1);
  upVote.innerText = upVote.dataset.count;

  console.log("upvote dataset ", upVote.dataset.count);
});

// button.addEventListener("click", () => {
//   const listItem = document.createElement("li");
//   listItem.innerText = input.value;

//   if (!input.value) {
//     listItem.dataset.empty = "empty";
//   } else {
//     listItem.dataset.empty = "not-empty";
//   }
//   ul.appendChild(listItem);
// });

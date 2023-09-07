console.log("this is working");
const createComments = (data) => {
  const commentDisplay = document.getElementById("comment-display");

  const comment = document.createElement("p");
  comment.innerText = data;
  commentDisplay.appendChild(comment);
};

const createCommentsContainer = () => {
  const container = document.createElement("div");

  const commentInput = document.createElement("input");
  const commentSubmitButton = document.createElement("button");

  commentSubmitButton.addEventListener("click", async () => {
    const response = await fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: commentInput.value }),
    });

    const data = await response.json();
    console.log("data ", data);
    createComments(data);
  });

  commentSubmitButton.innerText = "Submit";

  container.append(commentInput, commentSubmitButton);
  document.body.appendChild(container);
};

const createCommentDisplay = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "comment-display");

  document.body.appendChild(container);
};

const getComments = async () => {
  const response = await fetch("/comments");
  const {comments} = await response.json();
  
  for (const data of comments) {
    createComments(data);
  }
};

window.onload = async () => {
  createCommentsContainer();
  createCommentDisplay();
  getComments();
};

/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
fetch('/posts').then((response) => {
  console.log({
  stats: response.status,
  headers: response.headers.get('Content-Type'),
  ok: response.ok,
  url: response.url
})
return response.json()
}
)
.then(jsonBody => console.log(jsonBody))


async function getJson () {
  const response = await fetch('/posts');
  const json = await response.json();
  console.log(json);
}

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.



// Your code here
*/


fetch('/posts', {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, // application/json
  body: JSON.stringify({message: "new message"})
})
.then(response => response.json())
.then(jsonBody => console.log(jsonBody))

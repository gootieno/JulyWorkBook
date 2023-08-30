/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch('/products').then((response) => console.log(response))

async function responseStatus () {
  try {
    const response = await fetch('/products');
    console.log(response);
    console.log(response.status)
    console.log(response.ok);
    console.log(response.headers.get('Content-Type'))
  } catch (err) {
    console.log(err);
  }
}

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch('/products').then((response) => console.log({
  status: response.ok,
  ok: response.ok,
  headers: response.headers.get('Content-Type')
}))



/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch('/products').then((response) => console.log(response.headers.get('Content-Type')))


/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch('/products').then((response) => response.text()).then(resText => console.log(resText))

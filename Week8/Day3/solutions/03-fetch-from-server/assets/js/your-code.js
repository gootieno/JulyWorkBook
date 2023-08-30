export function getAllDogs() {
    // Your code here
    return fetch('/dogs')
}

export function getDogNumberTwo() {
    // Your code here
}

export function postNewDog() {
    // Your code here
    const dogBody = new URLSearchParams({name: "Snoop", age: '55'})

    return fetch ('/dogs', {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: dogBody
    })
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}

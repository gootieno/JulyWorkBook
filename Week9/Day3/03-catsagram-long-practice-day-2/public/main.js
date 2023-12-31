export const createMainContent = async () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    const kittenImageUrl =  await fetchImage();
    setKittenImage(kittenImageUrl)

};

const setKittenImage = (kittenImageUrl) =>{
    const kittenImage = document.querySelector('img')
    kittenImage.src = kittenImageUrl
}

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        console.log(kittenData);
       
        const kittenUrl = kittenData[0].url
        return kittenUrl;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

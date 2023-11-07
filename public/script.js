const showBrands = async() => {
    const brandsJSON = await getBrands();
    const brandsDiv = document.getElementById("brands-div");

    if (brandsJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    brandsJSON.forEach((brand) => {
        const section = document.createElement("section");
        brandsDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = brand.name;
        h3.classList.add("heading");
        section.append(h3);

        const genres = document.createElement("p");
        genres.innerHTML = brand.genres;
        genres.classList.add("heading");
        section.append(genres);

        const owner = document.createElement("p");
        owner.innerHTML = brand.owner;
        owner.classList.add("heading");
        section.append(owner);

        const img = document.createElement("img");
        img.src = "http://localhost:10000/" + brand.img;
        img.classList.add("image");
        section.append(img);

    });

}

const getBrands = async() => {
    try {
        return (await fetch("https://brands.onrender.com/api/brands")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showBrands();
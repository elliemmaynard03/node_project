const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.static("public"));

app.use(cors({
    origin: 'https://brand-website.onrender.com'
  }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});




app.get("/api/brands", (req, res) => {
    const brands = [];
    brands[0] = {
        name: "Rhode Skin",
        genres: ["Skin Care", " Makeup"],
        owner: "Hailey Bieber",
        img: "images/rhodeskin.jpg"
    };
    brands[1] = {
        name: "Skims",
        genres: ["Lounge Clothing", " Going Out Clothing", " Everyday Clothing"],
        owner: "Kim Kardashian",
        img: "images/skims.jpg"
    };
    brands[2] = {
        name: "One Size",
        genres: ["Makeup", " Skin Care"],
        owner: "Patrick Starr",
        img: "images/onesize.jpg"
    };
    brands[3] = {
        name: "Kylie Cosmetics",
        genres: ["Makeup", " Skin Care"],
        owner: "Kylie Jenner",
        img: "images/kyliecosmetics.jpg"
    };
    brands[4] = {
        name: "Fenty Beauty",
        genres: ["Makeup", " Skin Care"],
        owner: "Rihanna",
        img: "images/fentybeauty.jpg"
    };
    brands[5] = {
        name: "Drew House",
        genres: ["Lounge Clothing", " Everyday Clothing"],
        owner: "Justin Beiber",
        img: "images/drewhouse.jpg"
    };

    res.json(brands);
});

app.listen(3000, () => {
    console.log("listening");
});
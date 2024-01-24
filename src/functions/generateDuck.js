
const duckImages = [
    require("../assets/img/patos/pato1.jpeg"),
    require("../assets/img/patos/pato2.jpg"),
    require("../assets/img/patos/pato3.png"),
    require("../assets/img/patos/pato4.jpg"),
    require("../assets/img/patos/pato7.jpeg"),
    require("../assets/img/patos/pato5.jpg"),
    require("../assets/img/patos/pato8.jpeg"),
    require("../assets/img/patos/pato6.jpeg"),
    require("../assets/img/patos/pato9.png"),
    require("../assets/img/patos/pato10.jpg"),
    require("../assets/img/patos/pato11.png"),
];

export function generateDuck() {
    var randomNumber = parseInt(Math.random() * duckImages.length)
    var theDuck = duckImages[randomNumber]
    return theDuck;
}
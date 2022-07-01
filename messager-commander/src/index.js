const messages = [
    "Saori",
    "Helga",
    "Daniel",
    "Julian",
    "Sara",
    "Teresa",
    "Manuel"
];

const randomMessage = () => {
    const message = messages [Math.floor(Math.random() * messages.length)];
    console.log(message)
}

module.exports = {randomMessage}
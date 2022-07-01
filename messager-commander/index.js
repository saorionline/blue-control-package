const messages = [
    "saori",
    "helga",
    "daniel",
    "julian",
    "sara",
    "teresa"
];

const randomMessage = () => {
    const message = messages [Math.floor(Math.random() * messages.length)];
    console.log(message)
}

module.exports = {randomMessage}
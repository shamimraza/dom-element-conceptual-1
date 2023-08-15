const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        person: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    }
];


document.querySelector("#quote").addEventListener('click', function () {
    const p = document.getElementById("quote-p")
    const name = document.getElementById("name")
    const randomQuote = Math.floor(Math.random() * quotes.length);
    // p.innerText = quotes[randomQuote].quote;
    // name.innerText = quotes[randomQuote].person;
    const quotes1 = quotes[randomQuote];
    p.innerText = quotes1.quote;
    const quotes2 = quotes[randomQuote];
    name.innerText= quotes2.person;
});
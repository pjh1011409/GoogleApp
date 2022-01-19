const quotes = [
{
    quote: "1. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "2. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "3. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "4. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "5. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "6. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "7. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "8. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "9. Hi my name is Jack",
    author: "Jack"
},
{
    quote: "10. Hi my name is Jack",
    author: "Jack"
}







]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
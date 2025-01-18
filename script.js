const quoteDisplay = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random"); // Using http due to temporary SSL issues with the API.

        const data = await response.json();

        quoteDisplay.textContent = `"${data.content}" - ${data.author}`
    } catch (error) {
        quoteDisplay.textContent = "Oops, something went wrong. Try again later!";
        console.error("Error fetching quote:", error);
    };
}

newQuoteButton.addEventListener("click", fetchQuote);

fetchQuote();
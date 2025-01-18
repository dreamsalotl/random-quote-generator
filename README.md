# Random Quote Generator

A simple, elegant app that displays random inspirational quotes. Built using **HTML**, **CSS**, and **JavaScript**, this project fetches quotes dynamically from the [Quotable API](https://quotable.io/).

## Features
- Randomly generates a new quote at the click of a button.
- Centered and visually appealing layout with a focus on simplicity.
- Smooth hover effects for a zen-like user experience.
- Quotes are fetched dynamically from an external API.

## How It Works
1. Click the "Get Quote" button to fetch a new random quote.
2. The app uses the **Quotable API** for quote content.
3. If the API fails to load, an error message is displayed (error-handling FTW!).

## Installation and Usage
To run this project locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/dreamsalotl/random-quote-generator.git
   ```
2. Open the `index.html` file in your browser.
3. Click the "Get Quote" button to view a new random quote.
4. Enjoy the inspiration!

## Known Issues:
- Due to SSL certificate issues with the API, the app currently uses an http connection. This will be updated once the issue is resolved.

## Future Updates:
- Add a loading spinner while the quote is being fetched.
- Support multiple APIs for more diverse quote options.
- Implement a dark mode toggle.

## Technologies Used
- **HTML**: Structure and layout.
- **CSS**: Styling and animations.
- **JavaScript**: Fetching quotes and handling user interactions.

## Acknowledgements
- [Quotable API](https://quotable.io/) for providing the quotes used in this project.
# OMDB Telegram Bot

This is a Telegram bot built using Node.js that interacts with the Open Movie Database (OMDb) API. The bot allows users to search for movies and retrieve information such as the title, year, genre, and ratings. It provides a convenient way to access movie details directly from the Telegram messaging app.

## Features

- Search for movies by title
- View movie details including title, year, genre, ratings, and other information
- User-friendly interface in the Telegram messaging app

## Getting Started

To get started with the OMDB Telegram Bot, follow these steps:

1. Clone the repository:
```shell
git clone https://github.com/ShahadilMunawir/omdb_telegram_bot.git
```

2. Install the required dependencies:
```shell
npm install
```

3. Create a new Telegram bot and obtain an API token. You can follow the instructions in the [Telegram Bot documentation](https://core.telegram.org/bots/tutorial#obtain-your-bot-token) to create a bot and get the API token.

4. Create a new file named .env in the root directory of the project.

5. Open the .env file and add the following line, replacing <YOUR_API_TOKEN> with your actual Telegram bot API token:
```plaintext
TELEGRAM_API_TOKEN=<YOUR_API_TOKEN>
```

6. Run the bot:
```shell
npm start
```

## Usage

To use the OMDB Telegram Bot, follow these steps:

7. Start a chat with the bot by searching for its username on Telegram.

8. Enter the title of the movie you want to search for.

9. The bot will display the search result.

## Contributing

Contributions to the OMDB Telegram Bot are welcome! If you encounter any bugs, have suggestions for improvements, or would like to add new features, please feel free to open an issue or submit a pull request.

## Acknowledgements

The OMDB Telegram Bot was created by [Shahadil Munawir](https://github.com/ShahadilMunawir). Special thanks to the creators of the [OMDb API](http://www.omdbapi.com/) for providing the movie data used in this project.

If you find this project useful or have any feedback, please feel free to reach out or show your support by starring the repository.
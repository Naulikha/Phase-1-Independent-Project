# Phase-1-Independent-Project

Rick and Morty Character Search

This is a simple web application that allows you to search for Rick and Morty characters using their names. It uses the Rick and Morty API to fetch character data and renders it onto the webpage.

Features

Search for characters by name
View character information, including image, name, species, status, gender, first appearance, and origin
Like or dislike characters and see the total count of likes and dislikes

Technologies Used

HTML
CSS
JavaScript
Fetch API

Getting Started

To access this website simply click https://naulikha.github.io/Phase-1-Independent-Project/

To get started with this project, follow these steps:

Clone the repository to your local machine
Open the index.html file in your web browser
Use the search bar at the top of the page to search for characters by name
Click on a character to view their information
Click on the like or dislike button to register your opinion on the character

Code Overview

The HTML code for this project is stored in the index.html file. It defines the basic structure of the webpage, including the search bar, character list, and character cards.

The JavaScript code for this project is stored in the script.js file. It defines several functions that are responsible for fetching character data, rendering it onto the webpage, and handling user interactions. Here's a brief overview of each function:

renderOneCharacter: This function takes a single character object and renders it onto the webpage in a card format. It also adds event listeners to the like and dislike buttons to register user feedback.

getAllCharacters: This function fetches character data from the Rick and Morty API, stores it in an array, and renders each character onto the webpage using the renderOneCharacter function.

searchCharacters: This function filters the array of character data based on a user-entered query string and re-renders the filtered characters onto the webpage.

Contributions
Contributions to this project are welcome! If you notice any issues or have ideas for new features, please submit a pull request or open an issue.
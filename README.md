# MemSerwis

React-based app with memes stored by arrary which includes basic information (img url, title, upVotes, downvotes, and star).
Data flow is managed via Redux.

## Live preview

Available here https://chimny.github.io/memserwis/#/regular

## Local installation

-   Press the green code button and download it as zip file, clone via git clone command within the terminal or open with github desktop
-   Within the code editor when project will be downloaded type ,,npm i" within the terminal to download necessary node modules
-   Type ,,npm start" to star local server on your computer

## Used technology

-   React (version 17.0.2)
-   React-router (5.2.0)
-   Styled-components (5.3.0)
-   FontAwesome (5.15.3)
-   React-redux (7.2.4)

## How it works

-   Memes which diference between upVotes and downVotes is greater than 5 are moved to Hot Route
-   Each Meme include star button - if the heart turns pink it can be seen in ,,Star" route"
-   It's possible to include new Meme via Meme Creator route (image is kept without local storage - img url is necessary)

## Components folder include three major information

-   Mem which is a blueprint to display single mem
-   Navigation responsible for route menu and animation
-   Particular Routes which includes Memes (Hot, Route, Star) + Meme Creator.

## Styling

-   All the styling is made with styled-component usage
-   Styled components are kept in folder which styling regards to (e.g. in Mem folder you can find StyledMem file which includes styling)
-   Common styling data (e.g. main theme color) are kept by variables which are available in globalStyle folder (theme file)
-   Within globalStyle folder you can also find GlobalStyle component which is responsible for global styling

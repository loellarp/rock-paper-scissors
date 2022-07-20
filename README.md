# Rock Paper Scissors - Online Game

## Javascript Essentials Portfolio Project

![Mockup](assets/images/rock-paper-scissors-responsive.png)

Summary text

## [View the website live on GitHub Pages](https://loellarp.github.io/rock-paper-scissors/)

---

# Table of contents

- [UX](#ux)
    - [Website owner business goals](#website-owner-business-goals)
    - [User goals](#user-goals)
        - [New user goals](#new-user-goals)
        - [Returning user goals](#returning-user-goals)
        - [Website owner business goals](#website-owner-business-goals)
    - [User stories](#user-stories)
    - [Structure of the website](#structure-of-the-website)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
- [Features](#features)
- [Technology](#technology)
- [Testing](#testing)
    - [Functionality testing](#functionality-testing)
    - [Compatibility testing](#compatibility-testing)
    - [Code Validation](#code-validation)
    - [User stories testing](#user-stories-testing)
    - [Issues found during site development](#issues-found-during-site-development)
    - [Performance testing](#performance-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Screenshots](#screenshots)

# UX

## Website owner business goals

- To provide an easy, fun and playful game in minimal but colorful design to showcase the website owner's new JavaScript Essentials skills as well as some coding skills in HTML, CSS and Markup

## User goals

- User can find information and hints about how the game works
- User can intuitively navigate around the game through minimal design prompts
- User can keep track of the score of the game
- User get feedback from interacting with the game

## User stories

### As a business owner:
* I would like to provide an easy, fun, and playful game
* I would like the game to have a minimal but colorful design
* I would like to include elements that showcase my skills in JavaScript, HTML, and CSS

### As a user:
* I want to easily find information and hints about how the game works
* I want to be able to intuitively understand how to navigate through the game
* I want to keep track of the game to see who is winniing and loosing

## Structure of the website

The game is designed to be fun, easy to use, and provide a great experience on all device types. It is also designed to provide clear call to actions and feedback from interacting with the page. 

## Wireframes

I used [Balsamiq Wireframes](https://balsamiq.com/) to create the initial wireframes.

![Mockup](assets/images/rock-paper-scissors-wireframes.png)

## Design

I used [Sketch](https://sketch.com) to create the design of the website and created two screens within the game area.

### Designs for intro screen - desktop and mobile
![Design for Intro Screen](assets/images/rock-paper-scissors-design-intro-screen.png)

### Designs for intro screen - desktop and mobile
![Design for Game Screen](assets/images/rock-paper-scissors-design-game-screen.png)

## Surface

### Colors
The main colors used for this website:
* Fallback background color body: #302F2F
* Main font color: Black
* Game area background color: #A7FFC5
* Game area text box background color: #F6FFA9
* Game area border color: Black
* Score area color: Black
* Score area border color: #D814AB
* Button background color: #A7FFC5
* Button border color: #D814AB
* Button background color on click: #F6FFA9
* Footer background color: rgb(167, 255, 197, .6)

### Fonts

* The main font used on this website is [VT323](https://fonts.google.com/specimen/VT323) with sans-serif as backup font

### Images

* The background image was provided on courtesy of Zhala Rifat Pehrsson, Vervain AB
* The images used for the rock, paper, and scissors hands were created in [Adobe Illustrator](www.adobe.com) on the basis of pixel icons from [Adobe Stock](www.stock.adobe.com) and are credited in the [credits](#credits) section.

    <img src="assets/images/rock-paper-scissors-hands.png" alt="Hand images" width="200"/>
* The logo was created in [Adobe Illustrator](www.adobe.com) on the basis of a pixel typeface from [Adobe Stock](www.stock.adobe.com) and is credited in the [credits](#credits) section.

    <img src="assets/images/rock-paper-scissors-logo.png" alt="Logo" width="400"/>

[Back to Table of Contents](#table-of-contents)
___

# Features

The website consists of one page with the following features:

## Header

The header contains the logo of the website.

## Game area

The game area contains two different contents depending on the stage of the game - one intro screen and one game screen:

* The intro screen (including, from top to bottom):
    * A text area:
        * This section displays a welcome message to the user explaining the game and its rules
    * A button area:
        * This section includes a button to start the game
* The game screen (including, from top to bottom):
    * A result area: 
        * This section displays the result of each round of the game including the rule behind the result.
    * A hands area: 
        * This section displays the rock, paper, and scissors hands used in the game with the user's hand choice on the left and the random computer hand on the right. 
        * The default hands displayed when the user enters the game screen are two rock hands and these are later swapped to match the user's active choice and the random choice generated by the computer.
    * A controls area:
         * This section includes a CTA for the user to make a choice between rock, paper, and scissors by clicking on either of their three buttons. When DOM content has loaded and the user clicks on one of the buttons the functions of the game are called to initiate the game.

## Score area

Below the game area is the score area keeping track of the results of each round of the game. This section includes scores for won, lost, and draw that are incremented after each round depending on the result. 

## Footer

Below the score area is footer containing a short copywrite statement with the name of the business owner's company.

[Back to Table of Contents](#table-of-contents)
___
# Technologies used

### HTML5
* As a markup language to structure the content of the website

### CSS
* As a styling language

### JavaScript
* As a scripting language managing all the dynamic functions of the website

### Google fonts
* As a font resource

### Balsamiq Wireframes
* As a tool to create wireframes

### Sketch
* As a tool to create the final design

### Adobe Illustrator
* As a tool to create logos and hand images

### Photoshop
* As a tool to edit the background image

### Github
* As a software hosting platform to host the development project in a remote location

### Git
* As a distributed version control system

### Gitpod
* As a development platform

### Rapidtables.com
* As a tool to convert HEX to RGB

[Back to Table of Contents](#table-of-contents)
___
# Testing

## Functionality testing

I used Chrome developer tools throughout the development of the website to test the functions of the site and solve issues with styling and responsiveness. 

## Compatibility testing

The website was tested across multiple browsers (Chrome, Safari, Mozilla) on desktop (iOS) and mobile (iPhone 11) as well as across multiple virtual mobile screens through Chrome developer tools. 

## User story testing

### As a business owner:

- I would like to provide an easy, fun, and playful game
    > The classic game of Rock, Paper, Scissors is easy to understand and have been played by many for generations. Users who have never played it before can find short instructions and visual hints with hand designs and headers. The game is presented in a old school pixel game design with a modern touch.
- I would like the game to have a minimal but colorful design
    > The game uses bright, playful and colorful design with minimal elements on the page. 
- I would like to include elements that showcase my skills in JavaScript, HTML, and CSS
    > The website contains core coding elements from HTML and CSS and showcase Javascript Essentials skills through the use of functions to listen to events on the page, generate a random computer picks for each game rund, and swap content on the screen on user interaction.

### As a user:

- I want to easily find information and hints about how the game works
    > The intro screen provides the user with a brief intro to the game and its rules. The game screen provides an text screen that prompts the user to make its first move and the result of each round including the rule behind it.
- I want to be able to intuitively understand how to navigate through the game
    > The buttons, call to actions and headings provide simple but clear guidance to the user to move through the game
- I want to keep track of the game to see who is winniing and loosing
    > Score area increaces the scores of won, draw and lost after each round
___
## Issues found during website deployment:

### Mobile bugs:

I found two last minute bugs when testing on iPhone 11 (iOS 15.5 - Safari, Chrome, Firefox) after deployment:

<img src="assets/images/mobile-bugs.png" alt="Mobile bugs" width="300"/>

* #### Start game button text does not fit the button container on iPhone 11 (all browsers)
    > Can't replicate bug on iPhone 12 or through Chrome Developer Tools
    > Did not have time to fix this bug before project submission.

* #### Background image not displaying at the top of the screen (clock and status bars) on iPhone 11
    > Placeholder background color displaying instead
    > Did not have time to research a fix for the image to cover the whole screen but did a quick fix by adjusting the background color to a darker and less distracting color (#302F2F).

## Performance testing

I used the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) tool to check the performance of the website with great results for both desktop and mobile.

### Results for desktop
<img src="assets/images/lighthouse-score-desktop.png" alt="Lighthouse score desktop" width="400"/>

### Results for mobile
<img src="assets/images/lighthouse-score-mobile.png" alt="Lighthouse score mobile" width="400"/>

## Code validation

I used three websites to validate the code at the end of the development process, with no major remarks from either of the validations:

* The [W3 Markup Validation Service](https://validator.w3.org/) to validate the HTML
* The [W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate the CSS
* The [JSHint Code Quality Tool](https://jshint.com/) to validate the JavaScript

[Back to Table of Contents](#table-of-contents)
___
# Deployment

-> Insert deployment section with steps

[Back to Table of Contents](#table-of-contents)
___
# Credits

* When initiating the project I used Code Institute's student template for gitpod: [Gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

* Knowledge libraries:

    * [w3schools.com](https://www.w3schools.com)
    * [css-tricks.com](http://www.css-tricks.com)
    * Code Institute online course material for Diploma in Full Stack Software Development
    
### Code

* Score area html: [Love Maths](https://github.com/loellarp/love-maths)
* Hand alignment: Ideas from Ger Tobin from Code Institute's Student Care Team
* Hiding and unhiding divs with JavaScript: Ideas from Rebecca Timoney from Code Institute's Student Care Team 
* Background positioning: [Stackoverflow.com](https://stackoverflow.com/questions/17722239/full-screen-background-with-cover-but-focus-on-a-part-of-the-image)
* Double border css: [Youtube.com](https://www.youtube.com/watch?v=aEj1fu-aWbo)
* This README: [marcin-kli/MP1 README.md](https://github.com/marcin-kli/MP1/blob/Milestone-Projects/README.md)

### Images

* Pixel hands, before editing: [AdobeStock_126948604.ai](https://stock.adobe.com/se/images/pixel-art-8-bit-hands-icons-and-gestures-signs-set/126948604?continue-checkout=1&asset_id=126948604)
* Retro pixel typeface, before editing: [AdobeStock_268789024.ai](https://stock.adobe.com/se/images/pixel-vector-font-design-stylized-like-in-8-bit-games/268789024?asset_id=268789024)
* Background image: By Zhala Rifat Pehrsson, Vervain AB (not available online)

[Back to Table of Contents](#table-of-contents)
___

# Screenshots

### Intro screen - desktop
<img src="assets/images/intro-screen-desktop.png" alt="Intro screen desktop" width="800"/>

### Intro screen - mobile
<img src="assets/images/intro-screen-mobile.png" alt="Intro screen mobile" width="200"/>

### Game screen - desktop
<img src="assets/images/game-screen-desktop.png" alt="Game screen desktop" width="800"/>

### Game screen with results - mobile
<img src="assets/images/game-screen-mobile.png" alt="Game screen mobile" width="200"/>

### Game screen with results - desktop
<img src="assets/images/game-screen-results-desktop.png" alt="Game screen with results desktop" width="800"/>

### Game screen - mobile
<img src="assets/images/game-screen-results-mobile.png" alt="Game screen with results mobile" width="200"/>

<br>

## [View the website live on GitHub Pages](https://loellarp.github.io/rock-paper-scissors/)

[Back to Table of Contents](#table-of-contents)
___
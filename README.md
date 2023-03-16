• Bugs :
  [] Logic that allows the game to continue when matching card has been clicked on otherwise, game to fail if incorrect.
    • Create a new state that holds an array of numbers which will be the ID of each object that has been clicked on.
      - When user clicks on a card, the object ID is stored in state.
      - If user clicks on another card and is not the matching ID (last item in state array), then game is lost.
      - If user click on another card and IS the matching ID, then we pop both IDs from the state array.


  [] Have the playGame state decide on whether the game continues or ends and gives player option to restart.
  [] Logic that will reveal the cards for a set amount of time before it is 'hidden' from view.
  [] Get a set of random cards to display based on the game level.
  [] Clicking on a card that has been 'revealed' is causing the game to crash (no id found).

• Completed :
  [check] Clicking on a card for the first time reveals both cards with matching ids (bug). Also, clicking on that revealed card will crash the game.
    > Used `e.currentTarget` instead of `e.target` to resolve the issue.





• Objective => Player is given a set of cards (Higher the difficulty, the more set of cards are given) and must correctly pair the matching cards. Once game starts, the player will have 7 seconds to remember where the matching cards are located. After 7 seconds have passed, the images on the cards will be hidden until clicked on.

• Game Rules:
  • Easy difficulty:
    - Levels 1 - 3 => No. of cards: 6, 8, 10.

  • Medium Difficulty:
    - Levels 4 - 6 => No. of cards: 6, 8, 10.

  • Hard Difficulty:
    - Levels 7 - 10 => No. of cards: 12, 14, 16.

  • Timer keeps track of time and will be used to get best score.
    - If user does not select the correct matching card, timer ends as game is lost.
    - If user selects the last correct matching card on level 10, the timer ends as game is won.
    - If a better time is registered after game win, a new score will be introduced and saved.


• Game Setup:
  • Components:
    • Header.js
      - Display title.
    • Main.js
      • DisplayTimer.js
        - Display game timer.
      • DisplayLevel.js
        - Display current level.
      • DisplayScore.js
        - Display current score. => Every matching pair equates to 1 point.
      • Cards.js
        - Display each card.

  • Data Files:
    • cardData.js => Database containing all the images for the game.
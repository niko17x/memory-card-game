
••• Mar. 10 :
  • If you want to obtain all the id in an object array, you can use 'set' which creates a new 'set object'. For example, `const uniqueCards = new Set(cardData.map(card) => card.id)` will return a new array with the unique values pertaining to 'card.id' inside cardData.

••• Mar. 15 :
  • A bug had caused an issue where if player clicks on a single card, the other matching card with the same id were both revealed. The resolution was using 'UUID' to create an additional unique id for each card so that the click event can be targeted with the unique UUID. After revising the code, the click event reveals just the targeted card.
  • When you have a child element (i.e. => image element inside of a button) that needs to be the target for the click event, `e.target` might be better replaced with `e.currentTarget` as the ladder will allow the event to be specified by the attached element. In the example, that would be the image element that is attached to the currentTarget event. So anything that is applied to the event handler will be affected by the image element that is inside of the button element.
  • Note that when using `useEffect`, the code inside the React hook will cause it to initially render then re-render when the dependency requirements have been made.

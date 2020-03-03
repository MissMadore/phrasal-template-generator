var colour;
var creature;
var adjective;
var verbed;
var story;

alert('Let’s make a story together!');
colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verbed = prompt('A past tense verb (ran, burped, etc.)');
story = prompt("Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\n\nEnter the letter below:");

switch (story) {
  case 'a':
  document.write(`After snacking on ${adjective} treats, the ${colour} bellied ${creature} ${verbed} for hours.`);
  break;
  case 'b':
  document.write(`Amelia ${verbed} through the ${adjective} ${colour} nebula escaping the space ${creature}.`);
  break;
  case 'c':
  document.write(`Jackson chose his ${adjective}, ${colour} ${creature} card and ${verbed} it to the table knowing he won.`);
  break;
}

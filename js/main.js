var alertWindow = alert('Let’s make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adj = prompt('An adjective (beautiful, super, etc.)');
var pastVerb = prompt('A past tense verb (ran, burped, etc.)');
var wholeStory = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning');


switch (wholeStory) {

  case 'a' :
    document.write('After snacking on ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + pastVerb + ' for hours.');
    break;

  case 'b' :
    document.write('Ameilia ' + pastVerb + ' through the ' + adj + ' ' + colour + ' nebula escaping the space ' + creature + ' .');
    break;

  case 'c' :
    document.write('Jackson chose his ' + adj + ', ' + colour + ' ' + creature + ' card and ' + pastVerb + ' it to the table knowing he won.');
    break;
}
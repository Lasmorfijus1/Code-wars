// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return 
// "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
console.log('A wolf in sheeps clothing');

function warnTheSheep(queue) {
    if (queue[queue.length -1] === 'wolf') {
      return 'Pls go away and stop eating my sheep';
      } else {
       let index = queue.findIndex( (x) => x == 'wolf' );
       return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
      }
  }
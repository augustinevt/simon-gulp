// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

////// Simon

function Simon() {
  this.turn = 0;
  this.sequence = [];
}

Simon.prototype.GetTurn = function(turnNumber, colorAmount) {
  console.log("new turn");
  this.sequence = [];
  for (i = 0; i < turnNumber; i ++) {
    var random = Math.floor((Math.random() * colorAmount) + 1);
    sequence.push(random);
  }
  return sequence;
}

Simon.prototype.TakeTurn = function(userResponse) {
  if (this.sequence.equals(userResponse)) {
    Simon.GetTurn();
    return;
  } else {
    return;
  }
}

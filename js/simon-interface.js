var colors = [red, blue, yellow, green];

$(document).ready(function() {
  var newSimon = new Simon();
  var sequence = newSimon.GetTurn();
  var userSequence = [];
  var counter = 0;
  var takingTurn = function() {
  $('.colorDiv').click(function() {
    if ($(this).attr('id') == sequence[counter]) {
      userSequence.push($(this).attr('id'));
      //add to score
      if(userSequence[counter] !== sequence[counter])
      {
        //losing stuff;
      }
      counter ++;
      if (sequence.length === counter) {
        newSimon.TakeTurn(userSequence);
      }
    } else {
      counter = 0;
      //reset the pattern
    }
  });
  }
});

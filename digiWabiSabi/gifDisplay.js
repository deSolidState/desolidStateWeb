(function() {
  var i;
  var chosenGif;
  var remaining;
  var caseNum;
  var loopTimes;

  var tempArray = [];

  var gifArray = [
    'red-purple-wall.gif',
    'a-window.gif',
    'light-black-line.gif',
    'light-fixture.gif',
    'dots-of-yellow.gif ',
    'pink-wine.gif',
    'gold-oval-purple.gif',
    'kitchen.gif',
    'shelves.gif',
    'bannister1.gif',
    'brown-under-stairs.gif',
    'bent-wood-chair.gif',
    'calendar.gif',
    'gray-doorways.gif',
    'trees1.gif',
    'green-plants.gif',
    'black-squares.gif',
    'brown-on-brown.gif',
    'blue-brown-screen.gif',
    'beige-cross.gif',
    'yellow-red-framed.gif',
    'green-parallelogram.gif',
    'white-spot.gif',
    'blue-brown-specks-taupe.gif',
    'mint-loops-gray.gif',
    'window-light-gray.gif',
    'yellow-ochre-grid.gif',
    'seizure-purse.gif',
    'black-gray-viewport2.gif',
    'gray-black.gif',
    'pinkbars-slate.gif',
    'black-gray-viewport1.gif',
    'black-gray1.gif',
    'blinking-black-gray.gif',
    'blue-gray-corner.gif',
    'beiges-browns.gif',
    'washing-machine.gif',
    'black-white-specks.gif',
    'white-black-lines.gif',
    'mint-spill-couch.gif',
    'mint-over-brown.gif',
    'red-rocking-mint.gif',
    'gray-specks.gif',
    'lavender-hair.gif',
    'orange-blink-bedspread.gif',
    'greencushion.gif',
    'headboard.gif',
    'salmonwhitelines2.gif',
    'salmonwhitelines1.gif',
    'salmonscramble.gif',
    'seizurecushions.gif',
    'dresser.gif',
    'purplewall.gif',
    'greenwall.gif',
    'reddotwall.gif',
    'offwhitecrease.gif',
    'muddyforest.gif',
    'rockinghairline.gif'
  ];

  var caseNum = getRandomInt(2);

  var tempArray = gifArray;
  var remaining = tempArray.length - 1;

  switch (caseNum) {
    case 0:
      for (i = 0; i < 36; i++) {
        var chosenGif = placeChosenGif(remaining);
        removeChosenGif(remaining, chosenGif);
        var remaining = remaining - 1;
      }
      break;
    case 1:
      for (j = 0; j < 21; j++) {
        var chosenGif = placeChosenGif(remaining);

        /*
          You need to use the i index in the formula for X position with:
          W/2 - ((side / 2) + ((j - i/2) * side))

          for each increase in height [x]
          add height to remaining squares.
          1 0+1
          2 1+2
          3 3+3
          etc.
          */

        if (j === 0 || j === 2 || j === 5 || j === 9 || j === 14) {
          document.body.appendChild(document.createElement('br'));
        }

        removeChosenGif(remaining, chosenGif);
        var remaining = remaining - 1;
      }
      break;
    case 2:
      for (j = 0; j < 9; j++) {
        var chosenGif = placeChosenGif(remaining);

        if (j === 0 || j === 2 || j === 5 || j === 7) {
          document.body.appendChild(document.createElement('br'));
        }

        removeChosenGif(remaining, chosenGif);
        var remaining = remaining - 1;
      }
      break;
    default:
      console.log('error');
  }

  function removeChosenGif(remaining, chosenGif) {
    tempArray.splice(chosenGif, 1);
  }

  function placeChosenGif(remaining) {
    var chosenGif = getRandomInt(remaining);

    var domImg = document.createElement('img');
    domImg.src = 'img/' + tempArray[chosenGif];
    document.body.appendChild(domImg);
    return chosenGif;
  }

  setTimeout(function() {
    location.reload(true);
  }, 15 * 1000);

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
})();

window.onload = function() {
  'use strict';

  var printValue = function() {
    console.log(reverseSlider.value);

  }; //end printValue

  var makeValueNegative = function() {
    console.log(reverseSlider.value);

  }; //end printValue

  let reverseSlider = document.querySelector('#forwardSlider');

  reverseSlider.addEventListener('input', printValue);


};

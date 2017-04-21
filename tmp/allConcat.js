var Dino = require('./../js/dino.js').dinoModule;
var displayOutput = function (outputData){
  $('#output').text(outputData);
};

$(document).ready(function(){
  $('form#form').submit(function(event){
    event.preventDefault();
    var para = parseInt($('#para').val());
    var word = parseInt($('#word').val());
    var newDino = new Dino();
    newDino.output(para,word,displayOutput);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

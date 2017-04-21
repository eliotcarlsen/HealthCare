var Doctor = require('./../js/doctors.js').doctorModule;

var displayOutput = function (outputData){
  $('#output').text(outputData);
};

$(document).ready(function(){
  $('form#form').submit(function(event){
    event.preventDefault();
    var malady = $('#malady').val();
    var doctor = new Doctor();
    doctor.output(malady);
  });
});

var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctor = function (malady, doctorResults){
  $('#output').text("Here are the doctors in your area that can treat " + malady + doctorResults);
};

$(document).ready(function(){
  $('form#input').submit(function(event){
    event.preventDefault();
    var malady = $('#malady').val();
    var doctor = new Doctor();
    doctor.getDoctors(malady, displayDoctor);
  });
});

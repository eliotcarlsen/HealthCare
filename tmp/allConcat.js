var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctor = function (malady, doctorResults){
  $('#output').text("Here are the doctors in the Portland area that can help..." + "Your search word(s): " + "'" + malady + "'");
  doctorResults.forEach(function(doctor){
    $('.bios').append("<div class='row'><div class='col-md-12'><div class='well'><img alt='doctor_image' src=" + doctor.image_url + "><br><h4>Name: " + doctor.first_name + " " + doctor.last_name + ", " + doctor.title + "</h4> <h5>Gender: " + doctor.gender + "<div class='body'><h5>Bio: <br>" + doctor.bio + "</h5></div></div></div><br>");
  });
};

$(document).ready(function(){
  $('form#input').submit(function(event){
    event.preventDefault();
    $('.bios').empty();
    var malady = $('#malady').val();
    var doctor = new Doctor();
    doctor.getDoctors(malady, displayDoctor);
  });
});

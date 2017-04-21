var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctor = function (malady, doctorResults, specialtyResults, practiceResults){
  $('#output').text("Here are the doctors in the Portland area that can help..." + "Your search word(s): " + "'" + malady + "'");
  for (var i = 0; i < doctorResults.length; i++){
    $('.bios').append("<div class='row'><div class='col-md-12'><div class='well'><img alt='doctor_image' src=" + doctorResults[i].image_url + "><br><h4>Name: " + doctorResults[i].first_name + " " + doctorResults[i].last_name + ", " + doctorResults[i].title + "</h4> <h5>Gender: " + doctorResults[i].gender + "<br><div class='specialties" + i + "'>Specialties: </div><div class='practice" + i + "'>Office(s): </div><div class='body'><h5>Bio: <br>" + doctorResults[i].bio + "</h5></div></div></div><br>");
  }
  for (i = 0; i < specialtyResults.length; i++){
    for (var j = 0; j < specialtyResults[i].length; j++){
      $(".specialties" + i).append("<div class ='category'><ul><li> " + specialtyResults[i][j].actor + "</ul></li></div>");
    }
  }
  for (i = 0; i < practiceResults.length; i++){
    for (j = 0; j < practiceResults[i].length; j++){
      $(".practice" + i).append("<div class='practice'><ul><li> " + practiceResults[i][j].visit_address.city + "</ul></li></div>" + practiceResults[i][j].visit_address.state_long + practiceResults[i][j].visit_address.street + practiceResults[i][j].visit_address.zip);
    }
  }
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

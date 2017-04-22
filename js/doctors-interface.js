var Doctor = require('./../js/doctors.js').doctorModule;

var displayDoctor = function (malady, doctorResults, specialtyResults, practiceResults){
  $('#output').text("Here are the Portland doctors that can help..." + "Your search word(s): " + "'" + malady + "'");
  for (var i = 0; i < doctorResults.length; i++){
    $('.bios').append("<div class='container'><div class='well'><div class='row'><div class='col-md-12'><div class='col-md-4'><img alt='doctor_image' src=" + doctorResults[i].image_url + "><br><h4>Name: " + doctorResults[i].first_name + " " + doctorResults[i].last_name + ", " + doctorResults[i].title + "</h4> <h5>Gender: " + doctorResults[i].gender + "</h5></div><div class='col-md-4'><div class='specialties'><div class='specialties" + i + "'>Specialties: </div></div></div><div class='col-md-4'><div class='practice'><div class='practice" + i + "'>Office(s): </div></div></div><div class='col-md-12'><div class='body'>Bio: <br>" + doctorResults[i].bio + "</h5></div></div></div></div></div></div>");
  }
  for (i = 0; i < specialtyResults.length; i++){
    for (var j = 0; j < specialtyResults[i].length; j++){
      $(".specialties" + i).append("<div class ='categories'><ul><li> " + specialtyResults[i][j].actor + "</li></ul></div>");
    }
  }
  for (i = 0; i < practiceResults.length; i++){
    for (j = 0; j < practiceResults[i].length; j++){
      $(".practice" + i).append("<div class='practiceOffices'><ul><li> " + practiceResults[i][j].visit_address.city + ", " + practiceResults[i][j].visit_address.state_long + "</li></ul><ul><li>" + practiceResults[i][j].visit_address.street + ", " + practiceResults[i][j].visit_address.zip + "</ul></li></div>");
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

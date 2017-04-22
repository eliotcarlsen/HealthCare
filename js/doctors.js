
var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(malady, displayDoctors){
  doctorArray = [];
  specialtyArray = [];
  practiceArray = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + malady +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     result.data.forEach(function(doctor){
       doctorArray.push(doctor.profile);
       specialtyArray.push(doctor.specialties);
       practiceArray.push(doctor.practices);
     });
     displayDoctors(malady, doctorArray, specialtyArray, practiceArray);
    }).fail(function(error){
    $('.bios').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;

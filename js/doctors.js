var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(malady, displayDoctors){
  doctorArray = [];
  hospitalArray = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + malady +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     console.log(result.data);
     result.data.forEach(function(doctor){
       doctorArray.push(doctor.profile);
     });
     console.log(doctorArray);
     displayDoctors(malady, doctorArray);
    }).fail(function(error){
    $('.bios').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;

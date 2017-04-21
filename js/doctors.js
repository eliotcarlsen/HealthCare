function Doctor(){
}

Dino.prototype.output = function(,displayOutput){
  $.get('' + para + '&words=' + word).then(function(response){
    displayOutput(response);
  }).fail(function(error){
    $('#output').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;

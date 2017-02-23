let latitude = 42.35
let longitude = -71.07

// your code, here

fetch('/api/v1/forecast/38.753762,-104.834571')
  .then(response=>{
    if(response.ok){
      return response;
    } else {
      let errorMessage =`${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
    }
  })
  .then(response=>response.json())
  .then(body=>{
    var rightNow = body.minutely.summary
    var temp = body.currently.apparentTemperature
    var icon = body.currently.icon
    $('#test').append('<li>'+rightNow+'</li>');
    $('#test').append('<li>'+'The Current Temperature is: '+temp+' degrees(F).'+'</li>');

  })

  .catch(error=>console.error(`error in fetching data: ${error.message}`));

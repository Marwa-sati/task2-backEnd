const request = require( "request")
const forcast = (latitude , longtitude , callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=c1f279e0fc8b4c7bb80123400240503&q=" + latitude + "," + longtitude
    request ({url , json :true} , (error , response) => {
      
    
    if (error){
      callback ("unable to connect" , undefined)}
      else if (response.body.error){
      callback (response.body.error.message , undefined) 
      }
    else {
     callback (undefined + "it is" + response.body.location.name , response.body.current.condition.text  + "tempurture is " + response.body.current.temp_c)
    }
    })
    }
    

    module.exports = forcast
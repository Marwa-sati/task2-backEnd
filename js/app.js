const request = require ("request")
// const url = "https://api.weatherapi.com/v1/current.json?key=c1f279e0fc8b4c7bb80123400240503&q=Egypt"
// request ({url , json :true} , (error , response) => {
//   //  استخدمتها للتحويل ل جسون
// // console.log(response.body);
// if (error){
//   console.log ("Error has occured")}
//   else if (response.body.error){
//   console.log(response.body.error.message) 
//   }
// else {
// console.log(response.body.location.name , response.body.current.condition.text)
// }
// })
///////////////////////////////////////////////
// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
// request ({url :geocodeUrl , json :true} , (error , response) => {
// if (error){
//   console.log ("unable to connect")}
//   else if (response.body.message){
//   console.log(response.body.message) 
//   }
//   else if (response.body.features.length == 0){
//     console.log("unable to find location") 
//     }
// else {
//   const longtitude = response.body.features[0].center[0]
//   const latitude = response.body.features[0].center[1]
//   console.log(latitude , longtitude)
// }
// })

//////////////////////////////////////////////////////
// const forcast = (latitude , longtitude , callback) => {
// const url = "https://api.weatherapi.com/v1/current.json?key=c1f279e0fc8b4c7bb80123400240503&q=" + latitude + "," + longtitude
// request ({url , json :true} , (error , response) => {
  

// if (error){
//   callback ("unable to connect" , undefined)}
//   else if (response.body.error){
//   callback (response.body.error.message , undefined) 
//   }
// else {
//  callback (undefined + "it is" + response.body.location.name , response.body.current.condition.text)
// }
// })
// }

// const forcast = require("./data1/forecast")


// forcast(29.871903452398 , 26.4941838299718 , (error , data) =>{

//   console.log ("Error : " , error)
//   console.log ("dATA : " , data)

// })

/////////////////////////////////////////////////////////////////////////
// const geocode = ( address , callbacck) => {

// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
// request ({url :geocodeUrl , json :true} , (error , response) => {
// if (error){
//   callbacck ("unable to connect" , undefined)}
//   else if (response.body.message){
//   console.log(response.body.message , undefined) 
//   }
//   else if (response.body.features.length == 0){
//     console.log("unable to find location" , undefined) 
//     }
// else {
//   callbacck(undefined , {
//     longtitude : response.body.features[0].center[0],
//     latitude : response.body.features[0].center[1]
//   })
  
// }
// })

// }

// const  geocode = require("./data1/geocode")


// geocode( "china" , (error , data) =>{
//   console.log ("Error : " , error)
//   console.log ("dATA : " , data)
// } 
// )



const forcast = require("./data1/geocode")
const geocode = require("./data1/geocode")


const country = process.argv[2]

geocode( country , (error , data) =>{
  console.log ("Error : " , error)
  console.log ("dATA : " , data)


  forcast(data.latitude , data.longtitiode , (error , data) =>{

    console.log ("Error : " , error)
    console.log ("dATA : " , data)
  
  })
  
} 
)


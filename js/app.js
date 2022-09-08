
// const { error } = require('console')
const request = require('request')

// const url = 'https://api.weatherapi.com/v1/current.json?key=b11c3802d8104d1a8e571336220809&q=30.05,31.25'
// request({url,json:true},(error,response)=>{
//     // console.log(response.body)
//     // const data = JSON.parse(response.body)
//     // body >> دي الداتا الي موجوده في الي اللينك 
//     // console.log(response.body.location)


//     //error 
//     /*
//     - low level error --> internet connectivity / invalid error  /
    
//     */
//    if(error){
//     console.log('error has location')
//    }
//    else if(response.body.error){
//     console.log(response.body.error.message)
//    }
//    else{
//     console.log('in ' + response.body.location.name + ' temp is ' + response.body.current.temp_c)
//    }

// })


// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'

// request({url,json:true},(error,response)=>{

//     if(error){
//         console.log('error')
//     }
 
//     else if(response.body.message){
//         console.log(response.body.message)

//     }
//     else if(response.body.features.length == 0){
//         console.log('invalid search ')

//     }
//     else{
//         const lang = response.body.features[0].center[0]
//         const lat = response.body.features[0].center[1]

//         console.log(lang,lat)
//     }
// })

/////////////////////////
//version2 -- > function 

const forceCast = require('../tools/foreCast')
const geocode = require('../tools/geocode')


forceCast(30.05,31.25,(errorCallback,dataCallback)=>{
    if(errorCallback){
       return console.log(errorCallback)
    }
    console.log(dataCallback)
})

geocode("egypt",(errorCallback,dataCallback)=>{
    if(errorCallback){
       return console.log(errorCallback)
    }
    console.log(dataCallback)
})




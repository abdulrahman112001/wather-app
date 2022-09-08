
const request = require('request')

const geoCode = ((addr,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addr}.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw`

request({url,json:true},(error,response)=>{

    if(error){
        callback('error',undefined)
        // console.log('error')
    }
 
    else if(response.body.message){
        callback(response.body.message,undefined)
        // console.log(response.body.message)

    }
    else if(response.body.features.length == 0){
        callback('invalid search ',undefined)
        // console.log('invalid search ')

    }
    else{

    
        const lang = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        callback(undefined,{
            lang,lat
        })
        // console.log(lang,lat)
    }
})
})

module.exports = geoCode
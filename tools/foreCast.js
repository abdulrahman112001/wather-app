// const require = require()

const request = require('request')

const forceCast = (lat,long,callback)=>{
    const url = 'https://api.weatherapi.com/v1/current.json?key=b11c3802d8104d1a8e571336220809&q='+lat+','+long
   request({url,json:true},(error,response)=>{
       if(error){
        callback('enter has ocured')
        // console.log('error has location')
       }
       else if(response.body.error){
        callback(response.body.error.message,undefined)
        // console.log()
       }
       else{
        callback(undefined,'in ' + response.body.location.name + ' temp is ' + response.body.current.temp_c)
        // console.log('in ' + response.body.location.name + ' temp is ' + response.body.current.temp_c)
       }
    
    })
}

module.exports = forceCast


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




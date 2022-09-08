
const forceCast = require('../tools/foreCast')
const geocode = require('../tools/geocode')


// forceCast(30.05,31.25,(errorCallback,dataCallback)=>{
//     if(errorCallback){
//        return console.log(errorCallback)
//     }
//     console.log(dataCallback)
// })

// geocode("egypt",(errorCallback,dataCallback)=>{
//     if(errorCallback){
//        return console.log(errorCallback)
//     }
//     console.log(dataCallback)
// })




const process = require('process');

geocode(process.argv[2],(errorCallback,dataCallback)=>{
    if(errorCallback){
       return console.log(errorCallback)
    }
    // console.log(dataCallback)
    forceCast(dataCallback.lang,dataCallback.lat,(errorCallback,dataCallback)=>{
        if(errorCallback){
           return console.log(errorCallback)
        }
        console.log(dataCallback)
    })
})

// console.log(process.argv)
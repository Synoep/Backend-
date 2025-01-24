// for dabase connection 

const mongoose = require('mongoose')

    const connection = mongoose.connect('mongodb://0.0.0.0/men').then (() =>{
    console.log("connected to data base")
})
// for locally connection upper code 

module.exports = connection
const mongoose = require('mongoose')

let uri = 'mongodb+srv://URL_Shortener:Malaysia2021@cluster0.9d5y0.mongodb.net/USS_Database?retryWrites=true&w=majority'

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports = mongoose
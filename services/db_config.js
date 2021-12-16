const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports = mongoose
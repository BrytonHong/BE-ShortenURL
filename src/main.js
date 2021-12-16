const ShortUrl = require('../models/short_url_schema')

let req_create = {
    body:{
        fullUrl:'https://getbootstrap.com/docs/5.1/getting-started/download/#cdn-via-jsdelivr'
    }
}

let req_existing = {
    params:{
        shortUrl:'h1cbFpL16qFv04dihnP9B'
    }
}

async function retrieveValues(){
    const shortUrls = await ShortUrl.find()

    return shortUrls
}

async function createValues(req){
    const shortUrls = await ShortUrl.create({full: req.body.fullUrl})

    return shortUrls
}

async function findExisting(req){
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})

    shortUrl.clicks++
    shortUrl.save()

    return shortUrl.full
}


retrieveValues()

createValues(req_create)

findExisting(req_existing)
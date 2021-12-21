const ShortUrl = require('../models/short_url_schema')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.get('/', async(req, res) => {
    try{
        const shortUrls = await ShortUrl.find()
        res.sendStatus(200)
        res.render('index', {shortUrls: shortUrls})
    }
    catch(err){
        throw err
    }

})

app.post('/shortenUrls', async(req,res)=>{
    try{
        if(req.body.fullUrl == null || req.body.fullUrl =='') {
            res.sendStatus(404)
        }else{
            await ShortUrl.create({full: req.body.fullUrl})
            res.sendStatus(200)
            res.redirect('/')
        }
    }
    catch(err){
        throw err
    }

})  

app.get('/:shortUrl', async(req,res)=>{
    try{
        const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})

        if(shortUrl == null) return res.sendStatus(404)
    
        shortUrl.clicks++
        shortUrl.save()
        res.sendStatus(200)
        res.redirect(shortUrl.full)
    }
    catch(err){
        throw err
    }

})

app.listen(process.env.PORT || 8080);

module.exports = app;
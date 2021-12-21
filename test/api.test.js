const request = require('supertest');
const app = require('../src/main');

test("Testing POST API", async()=>{
    await request(app)
    .post('/shortenUrls')
    .send({ 
        req: {
            body: {
                fullUrl: ''
            }
        }
    })
    .expect(404)
})


test("Testing GET ShortUrl", async()=>{
    await request(app)
    .get('/:shortUrl')
        .send({ 
        req: {
            params: {
                shortUrl: ''
            }
        }
    })
    .expect(404)
})

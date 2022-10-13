const express = require('express')
const router = express.Router()

router.get('/', (request, response)=> {
    response.render('index')
})

// We need to export something from this file
module.exports = router
const express = require('express');
const cors = require('cors');

const logRoutes = require('./middleware/logger')
const diaryRouter = require('./routers/diary')

const api = express()

api.use(cors())
api.use(express.json())
api.use(logRoutes)

api.get('/', (req,res)=>{
    res.json({
        title: 'Diary',
        description: 'Your secret diary'
    })
})

api.use('/diary', diaryRouter)

module.exp

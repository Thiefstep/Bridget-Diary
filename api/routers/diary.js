const {Router} = require('express')

const diaryController = require ('./controllers/diary')

const diaryRouters = Router()

diaryRouters.get('/diary', diaryController.index)
diaryRouters.get('/diary/:id', diaryController.show)

module.exports = diaryRouters

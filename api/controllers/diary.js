const Diary = require('../models/diary')

async function index(req,res){
    try{
        const diary = await Diary.getAll();
        res.status(200).json(diary)
    }catch(err){
        res.status(500).json({
            'Error': err
        })
    }
}

async function show(req,res){
    try{
        const idx = parseInt(req.params.idx)
        const diary = await Diary.getOneById(idx)
        res.status(200).json(diary)
    }catch(err){
        res.status(404).json({
            'Error': err
        })
    }
}




module.exports = {
    index, show
}

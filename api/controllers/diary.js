const Diary = require("../models/diary")
const index = async (req, res) => {
    try {
        console.log("hit")
        const diary = await diary.getAll()
        res.status(200).json({
            success: true,
            diary: diary,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to retrieve input",
            error: err,
        })
    }
}
const show = async (req, res) => {
    try {
        const idx = parseInt(req.params.id)
        const diary = await diary.getOne(idx)
        res.status(200).json({
            success: true,
            diary: diary,
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to retrieve input",
            error: err,
        })
    }
}
const create = async (req, res) => {
    try {
        const data = req.body
        const diary = await diary.create(data)
        res.status(201).json({
            success: true,
            diary: diary,
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to create input for diary",
            error: err,
        })
    }
}
const update = async (req, res) => {
    try {
        const idx = parseInt(req.params.id)
        const data = req.body
        const diary = await diary.getOne(idx)
        const result = await diary.update(data)
        res.status(200).json({
            success: true,
            diary: diary,
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to update diary",
            error: err,
        })
    }
}
const destroy = async (req, res) => {
    try {
        const idx = parseInt(req.params.id)
        const diary = await diary.getOne(idx)
        const result = await diary.destory()
        res.status(204).json({
            success: true,
            diary: diary,
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to delete diary",
            error: err,
        })
    }
}
module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
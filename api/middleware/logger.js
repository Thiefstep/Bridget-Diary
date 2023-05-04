function logRoutes(req,res,next){
    console.log(req.method, req.originalURl)
    next()
}

module.exports = logRoutes

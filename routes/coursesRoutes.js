const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
    res.json({
        success:true,
        msg:"aqui se traeran todos los cursos"
    })
})

router.get('/:id', function(req,res){
    res.json({
        success:true,
        msg:`aqui se traera el cursos cuyo id es :${req.params.id}`
    })
})

router.post ('/',function (req,res){
    res.json({
        success:true,
        msg: `aqui se creara un cursos`
    })
})

router.put ('/:id',function (req,res){
    res.json({
        success:true,
        msg: `aqui se editara un curso`
    })
})

router.delete ('/:id', function(req,res){
    res.json({
        success:true,
        msg:`aqui se eliminara el cursos cuyo id es :${req.params.id}`
    })
})

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
    res.json({
        success:true,
        msg:"aqui se traeran todos los bootcamps"
    })
})

router.get('/:id', function(req,res){
    res.json({
        success:true,
        msg:`aqui se traera el bootcamp cuyo id es :${req.params.id}`
    })
})
router.put ('/:id',function (req,res){
    res.json({
        success:true,
        msg: `aqui se editara un bootcamp`
    })
})
router.post ('/',function (req,res){
    res.json({
        success:true,
        msg: `aqui se creara un bootcamp`
    })
})

router.delete ('/:id', function(req,res){
    res.json({
        success:true,
        msg:`aqui se eliminara el bootcamp cuyo id es :${req.params.id}`
    })
})

module.exports = router
const express = require('express')
const bootcampModel = require("../models/bootcampModel")
const router = express.Router()
const mongoose = require('mongoose')


router.get('/', async (req,res) => {
    //traigo todos los bootcamps
    try {
        const bootcamps = await bootcampModel.find()
        if (bootcamps.length=== 0) {
            res.
                status(400).
                json({
                    success:false,
                    msg: 'No hay bootcamps'
                })
        }else{
            res.
                status(200).
                json({
                    success:true,
                    data: bootcamps
                })
        }
    } catch (error) {
        res.
            status(500).
            json({
                success: false,
                msg: `Error interno del servidor ${error.message}`
            })
    }

    
})

//Traer bootcamp por id: 
router.get('/:id', async (req,res)=>{
    try {
        //Validar id para mongo
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            res.
                status(400).json({
                success: false,
                msg:'Id invalido bbecito'
                })
        }else{
            //Traer el bootcamp con id
            const bootcamp = await bootcampModel.findById(req.params.id)
            if (!bootcamp) {
                //sino existe el bootcamp
                res.
                    status(400).
                    json({
                        success:false,
                        msg: `No existe bootcamp con id ${req.params.id}, mmguebo `
                    })
            }else{
                //si exitse el bootcamp
                res.
                    status(200).
                    json({
                        msg: `El id que consultaste es: ${req.params.id}, perro hpta!`,
                        success:true,
                        data: bootcamp
                    })
            }
        }
    }catch (error) {
        res.
            status(500).
            json({
                success: false,
                msg: `Error interno del servidor ${error.message}`
            })
    }        
})

router.put ('/:id', async(req,res)=>{
    try {
        //Validar id para mongo
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            res.
                status(400).json({
                success: false,
                msg:'Id invalido bbecito'
                })
        }else{
            //Traer el bootcamp con id
            const updateBootcamp = await bootcampModel.findByIdAndUpdate(req.params.id, req.body,{new: true})
            if (!updateBootcamp) {
                //sino existe el bootcamp
                res.
                    status(400).
                    json({
                        success:false,
                        msg: `No existe bootcamp con id ${req.params.id}, mmguebo `
                    })
            }else{
                //si exitse el bootcamp
                res.
                    status(200).
                    json({
                        msg: `El id que actualizaste es: ${req.params.id}, perro hpta!`,
                        success:true,
                        data: updateBootcamp
                    })
            }
        }
    }catch (error) {
        res.
            status(500).
            json({
                success: false,
                msg: `Error interno del servidor ${error.message}`
            })
    } 
})

router.post ('/', async (req,res)=>{
    // Registar nuevo Bootcamp
    try {
        //Traer el bootcamp con id
        const newBootcamp = await bootcampModel.create(req.body)
            res.
                status(200).
                json({
                    success:true,
                    data: newBootcamp
                })
    }catch (error) {
        res.
            status(500).
            json({
                success: false,
                msg: ` ${error.message}`
            })
    } 
})

router.delete ('/:id', async(req,res)=>{
    try {
        //Validar id para mongo
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            res.
                status(400).json({
                success: false,
                msg:'Id invalido bbecito'
                })
        }else{
            //Traer el bootcamp con id
            const deleteBootcamp = await bootcampModel.findByIdAndDelete(req.params.id)
            if (!deleteBootcamp) {
                //sino existe el bootcamp
                res.
                    status(400).
                    json({
                        success:false,
                        msg: `No existe bootcamp con id ${req.params.id}, mmguebo `
                    })
            }else{
                //si exitse el bootcamp
                res.
                    status(200).
                    json({
                        msg: `El id que eliminaste es: ${req.params.id}, perro hpta!`,
                        success:true,
                        data: deleteBootcamp
                    })
            }
        }
    }catch (error) {
        res.
            status(500).
            json({
                success: false,
                msg: `Error interno del servidor ${error.message}`
            })
    } 
})

module.exports = router
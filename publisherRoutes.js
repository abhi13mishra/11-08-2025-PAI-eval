const express = require('express');
const Publisher = require('../models/publisherModel');
const router = express.Router();

router.post('/', async (req , res) => {
    try{
        const publisher = await Publisher.create(req.body);
        res.status(201).json(publisher);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get('/', async (req , res) =>{
     const publishers = await Publisher.find()
     res.json(publishers);
});

router.get('/:id', async (req , res) =>{
     const publisher = await Publisher.findById(req.params.id);
     if(!publisher) return res.status(404).json({error:'not found'});
     res.json(publishers);
});

router.put('/:id', async (req , res) =>{
     const publisher = await Publisher.findByIdAndUpdate(res.params.id, req.body, {new:true});
     res.json(publisher);
});

router.delete('/id', async (req , res) =>{
     await Publisher.findByIdAndDelete(req.params.id);
     res.json({message:"publisher deleted"});
});

module.exports = router;
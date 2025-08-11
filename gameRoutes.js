const express = require('express');
const Game = require('../models/gameModel');
const router = express.Router();

router.post('/', async (req , res) => {
    try{
        const game = await Game.create(req.body);
        res.status(201).json(game);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get('/', async (req , res) =>{
     const game = await Game.find().populate('publisher', 'name location');
     res.json(games);
});

router.get('/:id', async (req , res) =>{
     const game = await Game.findById(req.params.id).populate('publisher', 'name location');
     if(!game) return res.status(404).json({error:'not found'});
     res.json(games);
});

router.put('/:id', async (req , res) =>{
     const game = await Game.findByIdAndDelete(res.params.id, req.body, {new:true});
     res.json(games);
});

router.delete('/id', async (req , res) =>{
     await Game.findByIdAndDelete(req.params.id);
     res.json({message:"game deleted"});
});

module.exports = router;
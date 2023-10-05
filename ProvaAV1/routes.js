const express = require('express');
const router = express.Router();
const Marker = require('./marker'); 

router.get('/location', async (req, res) => {
  try {
    const locations = await Marker.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar as localizações' });
  }
});

router.get('/location/:id', async (req, res) => {
  try {
    const location = await Marker.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar a localização' });
  }
});


router.post('/newlocation', async (req, res) => {
  try {
    const newLocation = new Marker(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao inserir a localização' });
  }
});


router.put('/updatelocation/:id', async (req, res) => {
  try {
    const location = await Marker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!location) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a localização' });
  }
});


router.delete('/deletelocation/:id', async (req, res) => {
  try {
    const location = await Marker.findByIdAndRemove(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    res.json({ message: 'Localização excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a localização' });
  }
});

module.exports = router;
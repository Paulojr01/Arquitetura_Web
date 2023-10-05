const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3000, function(){
    console.log('APP rodando na porta 3000');
  });
// src/app.js
const express = require('express');
const app = express();

// note que é importante declarar antes do endpoint GET `/chocolates/:id`
// para não haver conflito nas rotas
app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

// app.get('/chocolates/:id', async (req, res) => {
// ...
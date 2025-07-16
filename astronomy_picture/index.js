const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.static('public'));


app.get('/api/apod', async (req, res) => {
  const date = req.query.date; 
  
  if (!date) {
    return res.status(400).json({ error: 'Data é obrigatória' });
  }

  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.CHAVE}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erro ao buscar dados da NASA' });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

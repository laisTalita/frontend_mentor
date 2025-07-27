import fetch from 'node-fetch';
export default async function handler(req, res) {
  const  date  = req.query.date;
  const apiKey = process.env.NASA_API_KEY; 

  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`);

  if (!response.ok) {
     return res.status(response.status).json({ error: 'Erro ao buscar dados da NASA' });
  
  }
  const data = await response.json();
  res.json(data);
}

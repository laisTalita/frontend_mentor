export default async function handler(req, res){

  const date = req.query.date;

  if (!date) {
    return res.status(400).json({ error: 'Data é obrigatória' });
  }

  try {
     const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}

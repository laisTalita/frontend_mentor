export default async function handler(req, res) {
  const date = req.query.date;
  const apiKey = process.env.NASA_API_KEY;

  if (!date) {
    return res.status(400).json({ error: 'Data é obrigatória' });
  }

  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erro ao buscar dados da NASA' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}

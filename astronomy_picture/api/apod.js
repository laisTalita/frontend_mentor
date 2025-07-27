export default async function handler(req, res) {
  const { date } = req.query;
  const apiKey = process.env.NASA_API_KEY; 

  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`);

  const data = await response.json();

  res.status(200).json(data);
}

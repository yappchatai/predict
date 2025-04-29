export default async function handler(req, res) {
  const { address, location } = req.query;

  if (!address || !location) {
    return res.status(400).json({ error: 'Missing address or location parameters' });
  }

  try {
    const response = await fetch(`https://zillow-com1.p.rapidapi.com/people/searchByAddress?address=${encodeURIComponent(address)}&location=${encodeURIComponent(location)}&format=full`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.ZILLOW_API_HOST,
        'x-rapidapi-key': process.env.ZILLOW_API_KEY,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Zillow API error:', error);
    res.status(500).json({ error: 'Failed to fetch Zillow data' });
  }
}

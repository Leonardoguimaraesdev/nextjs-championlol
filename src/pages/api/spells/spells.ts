// pages/api/[summonerName].ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const champion = req.query.name

  try {
    const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion/${champion}.json`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar informações dos campeões:', error);
    res.status(500).json({ error: 'Erro ao buscar informações dos campeões.' });
  }
}

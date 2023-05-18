// pages/api/[summonerName].ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const RIOT_API_KEY = 'RGAPI-64ba5722-dfb3-4b79-b8fd-5b2e6e8c2408'; // Substitua 'YOUR-API-KEY' pela sua chave de API

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.10.1/data/pt_BR/champion.json`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar informações dos campeões:', error);
    res.status(500).json({ error: 'Erro ao buscar informações dos campeões.' });
  }
}

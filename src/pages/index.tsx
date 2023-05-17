import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface SummonerInfo {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

const Summoner = () => {
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo | null>(null);
  const [champions, setChampions] = useState<any>([])

  useEffect(() => {
    fetchSummonerInfo('truetank');
  }, []);

  const fetchSummonerInfo = async (summonerName: string) => {
    try {
      const response = await fetch(`/api/${encodeURIComponent(summonerName)}`);
      const data: any = await response.json();

      setSummonerInfo(data);
      setChampions(Object.keys(data.data));
    } catch (error) {
      console.error('Erro ao buscar informações do invocador:', error);
    }
  };

  return (
    <div>
      <div>
        {champions.map((champion: any, i: any) => {
          return <Image key={i} alt='Champion' width={100} height={200} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}/>
        })}
      </div>

    </div>
  );
};

export default Summoner;

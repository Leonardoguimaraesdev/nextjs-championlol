import React, { useEffect, useState } from 'react';
import styles from '../styles/Body.module.scss'
import ChampionCard from './ChampionCard';
import Search from './Search';

export default function Summoner() {

  const [championsInfo, setChampionsInfo] = useState<any>([])
  const [championsName, setChampionsName] = useState<any>([])

  useEffect(() => {
    fetchSummonerInfo();
  }, []);

  const fetchSummonerInfo = async () => {
    try {
      const response = await fetch('api/champions');
      const data: any = await response.json();

      setChampionsInfo(data.data);
      setChampionsName(Object.keys(data.data));
    } catch (error) {
      console.error('Erro ao buscar informações do invocador:', error);
    }
  };

  return (
    <>
      <div className={styles.body}>
        <Search />
        {championsName.map((name: any, i: any) => {
          return <ChampionCard key={i} championName={name} championInfo={championsInfo[name]} />
        })}
      </div>
    </>
  );
};
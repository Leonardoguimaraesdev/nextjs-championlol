import React, { useEffect, useState } from 'react';
import styles from '../styles/Body.module.scss'
import ChampionCard from './ChampionCard';
import Search from './Search';

export default function Summoner() {

  const [championsInfo, setChampionsInfo] = useState<any>([])
  const [championsName, setChampionsName] = useState<any>([])
  const [searchTerm, setSearchTerm] = useState<any>('')


  const fetchSummonerInfo = async () => {
    try {
      const response = await fetch('api/champions/champions');
      const data: any = await response.json();

      setChampionsInfo(data.data);
      setChampionsName(Object.keys(data.data));
    } catch (error) {
      console.error('Erro ao buscar informações do invocador:', error);
    }
  };
  
  useEffect(() => {
    fetchSummonerInfo();
  }, []);

  const filteredChampions = championsName.filter((name: any) => name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <div className={styles.body}>
        <Search onSearch={(value: any) => {
          setSearchTerm(value);
        }} />
        {filteredChampions.map((name: any, i: any) => {
          return <ChampionCard key={i} championName={name} championInfo={championsInfo[name]} />
        })}
      </div>
    </>
  );
};
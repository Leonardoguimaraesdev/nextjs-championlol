import React, { useState } from 'react';
import styles from '../styles/Body.module.scss'
import ChampionCard from './ChampionCard';
import Search from './Search';
import { SummonerProps } from '../pages/index'
import { Champion } from '../pages/index'

export default function Summoner({ initialChampionsInfo, initialChampionsName }: SummonerProps) {

  const [championsInfo, setChampionsInfo] = useState<Champion>(initialChampionsInfo)
  const [championsName, setChampionsName] = useState<string[]>(initialChampionsName || [])
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredChampions = championsName.filter((name: string) => name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <div className={styles.body}>
        <Search onSearch={(value: string) => {
          setSearchTerm(value);
        }} />
        {filteredChampions.map((name: string, i: number) => {
          return <ChampionCard key={i} championName={name} championInfo={championsInfo[name]} />
        })}
      </div>
    </>
  );
};

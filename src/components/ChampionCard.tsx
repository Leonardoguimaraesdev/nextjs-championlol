import Image from 'next/image'
import styles from '../styles/ChampionCard.module.scss'
import { useState } from 'react'
export default function ChampionCard(props: any) {

    const [championName, setChampionName] = useState(props.championName)
    const [championiInfo, setChampionInfo] = useState(props.championInfo)


    const tagsArray = championiInfo.tags

    return (
        <div className={styles.card}>
            <Image alt='Champion' width={200} height={360} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`} />
            <div className={styles.name}>{championName.toUpperCase()}</div>
            <div className={styles.type}>
                {tagsArray.map((tag: string, i: number) => {
                   return <Image className={styles.category} key={i} alt='Category' width={20} height={20} src={`/${tag}.png`} />
                })}
            </div>
        </div>
    )
}
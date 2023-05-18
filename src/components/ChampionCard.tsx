import Image from 'next/image'
import styles from '../styles/ChampionCard.module.scss'
export default function ChampionCard(props:any) {

    const championName = props.championName
    const championinfo = props.championInfo

    return (
        <div className={styles.card}>
            <Image alt='Champion' width={200} height={360} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`} />
            <div className={styles.name}>{championName.toUpperCase()}</div>
        </div>
    )
}
import Image from 'next/image'
import styles from '../styles/ChampionCard.module.scss'
import { useRouter } from 'next/router'

interface ChampionCardProps {
    championName: string;
    championInfo: {
      tags: string[];
    };
  }

export default function ChampionCard(props: ChampionCardProps) {
    const router = useRouter()

    const championName = props.championName
    const championInfo = props.championInfo

    const tagsArray = championInfo.tags
    
    const handleClick = () => {
        router.push({
            pathname: `/champion/${championName}`,
            query: { name: championName },
          });
    }

    return (
        <div className={styles.card} onClick={handleClick}>
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
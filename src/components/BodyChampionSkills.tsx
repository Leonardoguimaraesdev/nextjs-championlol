import { useEffect, useState } from 'react';
import styles from '../styles/BodyChampionSkills.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'



export default function BodyChampionSkills(props: any) {
    const router = useRouter()


    const [info, setInfo] = useState<any>({})

    const [spells, setSpells] = useState<any>('')
    const [passiveName, setPassiveName] = useState<any>('')

    const [spellP, setSpellsSpellP] = useState<any>('')
    const [spellQ, setSpellsSpellQ] = useState<any>('')
    const [spellW, setSpellsSpellW] = useState<any>('')
    const [spellE, setSpellsSpellE] = useState<any>('')
    const [spellR, setSpellsSpellR] = useState<any>('')

    const [hoveringPassive, setHoveringPassive] = useState(false);
    const [hoveringQ, setHoveringQ] = useState(false);
    const [hoveringW, setHoveringW] = useState(false);
    const [hoveringE, setHoveringE] = useState(false);
    const [hoveringR, setHoveringR] = useState(false);

    let infoChanged = info.title ? info.title.charAt(0).toUpperCase() + info.title.slice(1) : '';


    const championName = props.championName

    const fetchSummonerInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/spells/spells?name=${championName}`);
            const data: any = await response.json();
            const info = data.data

            const championPassive = info[championName].passive.image.full
            const championPassiveName = info[championName].passive.name
            const championSpells = info[championName].spells
            const championInfo = info[championName]
            setInfo(championInfo)
            setSpells(championSpells)
            setPassiveName(championPassiveName)
            setSpellsSpellP(championPassive)
            setSpellsSpellQ(championSpells[0].id)
            setSpellsSpellW(championSpells[1].id)
            setSpellsSpellE(championSpells[2].id)
            setSpellsSpellR(championSpells[3].id)

        } catch (error) {
            console.error('Erro ao buscar informações do invocador:', error);
        }
    };

    useEffect(() => {
        fetchSummonerInfo();
    }, []);

    const goToChampionList = () => {
        router.push(`/`)

    }

    return (
        <>
            <div className={styles.bodyContainer}>
                <button onClick={goToChampionList}>Voltar</button>
                <div className={styles.cardChampionSkills}>
                    <div className={styles.leftContainer}>
                        <Image className={styles.img} alt='Champion' width={230} height={410} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`} />
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.title}>{infoChanged}</div>
                        <div className={styles.skills}>
                            <div className={styles.skillsP}
                                onMouseEnter={() => setHoveringPassive(true)}
                                onMouseLeave={() => setHoveringPassive(false)}
                            >
                                <p>P</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/passive/${spellP}`} />
                                {hoveringPassive && (
                                    <div className={styles.tooltip}>
                                        {passiveName}
                                    </div>
                                )}
                            </div>
                            <div className={styles.skillsQ}
                             onMouseEnter={() => setHoveringQ(true)}
                             onMouseLeave={() => setHoveringQ(false)}
                            >
                                <p>W</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellQ}.png`} />
                                {hoveringQ && (
                                    <div className={styles.tooltip}>
                                        {spells[0].name}
                                    </div>
                                )}
                            </div>
                            <div className={styles.skillsW}
                             onMouseEnter={() => setHoveringW(true)}
                             onMouseLeave={() => setHoveringW(false)}
                            >
                                <p>Q</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellW}.png`} />
                                {hoveringW && (
                                    <div className={styles.tooltip}>
                                        {spells[1].name}
                                    </div>
                                )}
                            </div>
                            <div className={styles.skillsE}
                             onMouseEnter={() => setHoveringE(true)}
                             onMouseLeave={() => setHoveringE(false)}
                            >
                                <p>E</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellE}.png`} />
                                {hoveringE && (
                                    <div className={styles.tooltip}>
                                        {spells[2].name}
                                    </div>
                                )}
                            </div>
                            <div className={styles.skillsR}
                             onMouseEnter={() => setHoveringR(true)}
                             onMouseLeave={() => setHoveringR(false)}
                            >
                                <p>R</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellR}.png`} />
                                {hoveringR && (
                                    <div className={styles.tooltip}>
                                        {spells[3].name}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.championDescription}>{info.lore}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
import { useEffect, useState } from 'react';
import styles from '../styles/BodyChampionSkills.module.scss'
import Image from 'next/image'


export default function BodyChampionSkills(props: any) {

    const [spellP, setSpellsSpellP] = useState<any>('')
    const [spellQ, setSpellsSpellQ] = useState<any>('')
    const [spellW, setSpellsSpellW] = useState<any>('')
    const [spellE, setSpellsSpellE] = useState<any>('')
    const [spellR, setSpellsSpellR] = useState<any>('')

    const championName = props.championName
    const championInfo = props.championInfo


    console.log(spellP)



    const fetchSummonerInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/spells/spells?name=${championName}`);
            const data: any = await response.json();
            const info = data.data

            const championPassive = info[championName].passive.image.full
            const championSpells = info[championName].spells
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

    return (
        <>
            <div className={styles.bodyContainer}>
                <div className={styles.cardChampionSkills}>
                    <div className={styles.leftContainer}>
                        <Image alt='Champion' width={230} height={410} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`} />
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.title}>{championInfo.title}</div>
                        <div className={styles.skills}>
                            <div className={styles.skillsP}>
                                <p>P</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/passive/${spellP}`} />

                            </div>
                            <div className={styles.skillsQ}>
                                <p>W</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellQ}.png`} />

                            </div>
                            <div className={styles.skillsW}>
                                <p>Q</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellW}.png`} />

                            </div>
                            <div className={styles.skillsE}>
                                <p>E</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellE}.png`} />

                            </div>
                            <div className={styles.skillsR}>
                                <p>R</p>
                                <Image className={styles.image} alt='Champion' width={50} height={50} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellR}.png`} />

                            </div>
                        </div>
                        <div className={styles.championDescription}>{championInfo.blurb}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
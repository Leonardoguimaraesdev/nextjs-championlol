import { useState } from 'react';
import styles from '../styles/BodyChampionSkills.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'



export default function BodyChampionSkills(props: any) {
    const router = useRouter()

    const championData = props.championData

    const obj = championData.data
    const firstObject: any = Object.values(obj)[0];

    const [loading, setLoading] = useState(false);

    const [hoveringPassive, setHoveringPassive] = useState(false);
    const [hoveringQ, setHoveringQ] = useState(false);
    const [hoveringW, setHoveringW] = useState(false);
    const [hoveringE, setHoveringE] = useState(false);
    const [hoveringR, setHoveringR] = useState(false);

    const championName = firstObject.id
    const title = firstObject.title.charAt(0).toUpperCase() + firstObject.title.slice(1)
    const spells = firstObject.spells
    const passiveName = firstObject.passive.name
    const spellP = firstObject.passive.image.full
    const spellQ = spells[0].id
    const spellW = spells[1].id
    const spellE = spells[2].id
    const spellR = spells[3].id

    const goToChampionList = () => {
        setLoading(true);
        setTimeout(() => {
            // Substitua esta linha pelo seu código para mudar de página.
            router.push(`/`);
        }, 2000);

    }

    return (
        <>
            <div className={styles.bodyContainer}>
                <div className={styles.cardChampionSkills}>
                    {loading && (
                        <div className={styles.overlay}>
                            <div className={styles.spinner}></div>
                        </div>
                    )}
                    <button onClick={goToChampionList}>Voltar</button>
                    <div className={styles.leftContainer}>
                        <Image className={styles.img} alt='Champion' width={230} height={410} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`} />
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.title}>{title}</div>
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
                                <p>Q</p>
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
                                <p>W</p>
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
                        <div className={styles.championDescription}>{firstObject.lore}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
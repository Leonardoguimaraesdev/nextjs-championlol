import styles from '../styles/ChampionSkills.module.scss'
import Header from '../../components/Header'
import Footer from '@/components/Footer';
import BodyChampionSkills from '@/components/BodyChampionSkills';
import { useRouter } from 'next/router'

export default function ChampionSkills() {
    const router = useRouter()
    const { champion } = router.query  

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <BodyChampionSkills championName={champion}/>
            <Footer />
        </div>
    );
};

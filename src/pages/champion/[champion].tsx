import Header from '../../components/Header'
import Footer from '@/components/Footer';
import BodyChampionSkills from '@/components/BodyChampionSkills';
import axios from 'axios';


export async function getServerSideProps(context:any) {

    const { query } = context;
    const name = query.name;

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/spells/spells?name=${name}`);
    const championData = data

    return { props: { championData } };
}

export default function ChampionSkills({ championData }: any) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <BodyChampionSkills championData={championData} />
            <Footer />
        </div>
    );
};

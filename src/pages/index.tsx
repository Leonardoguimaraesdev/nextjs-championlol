import styles from '../styles/ListChampions.module.scss'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '@/components/Footer';
import axios from 'axios';

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/champions/champions`);

    const initialChampionsInfo: Champion = data.data;
    const initialChampionsName: string[] = Object.keys(data.data);

    return {
      props: {
        initialChampionsInfo,
        initialChampionsName,
      },
    };

  } catch (error) {
    console.error('Erro ao buscar informações do invocador:', error);
    return {
      props: {},
    }
  }
}

export interface Champion {
  [key: string]: any;
}

export interface SummonerProps {
  initialChampionsInfo: Champion;
  initialChampionsName: string[];
}
export default function ListChampions({ initialChampionsInfo, initialChampionsName }: SummonerProps) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Body initialChampionsInfo={initialChampionsInfo} initialChampionsName={initialChampionsName} />
      <Footer />
    </div>
  );
};

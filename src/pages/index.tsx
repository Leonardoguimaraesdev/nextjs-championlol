import styles from '../styles/ListChampions.module.scss'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '@/components/Footer';

export default function ListChampions() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', height:'100vh'}}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

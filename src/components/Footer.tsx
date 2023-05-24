import styles from '../styles/Footer.module.scss'
export default function Footer() {

    return (
        <footer className={styles.footer}>Todos os direitos reservador por <p style={{ color: 'red', marginLeft: '5px' }}>Riot Games</p>
        </footer>
    )
}
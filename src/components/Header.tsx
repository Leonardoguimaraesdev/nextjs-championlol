import Image from 'next/image'
import styles from '../styles/Header.module.scss'
export default function Header() {

    return (
        <div className={styles.header}>
            <Image alt='Champion' width={120} height={50} src={'/LogoLol.png'} />
        </div>
    )
}
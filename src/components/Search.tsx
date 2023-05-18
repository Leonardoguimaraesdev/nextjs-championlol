import styles from '../styles/Search.module.scss'
export default function Search() {

    return (
        <div className={styles.search}>
            <div className={styles.relative}>
                <input type='text'></input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className={styles.iconSearch}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
        </div>
    )
}
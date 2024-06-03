import styles from './styles.module.css'
import Header from '@components/layouts/header/header'

export default function Main() {
    return (
        <main className={styles.main}>
            <Header/>
        </main>
    )
}
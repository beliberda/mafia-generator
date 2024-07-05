import { Button, ButtonIcon } from '@/components/UI/buttons/buttons'
import styles from './styles.module.css'
import settings from '@assets/icons/settings.svg'
import { useNavigate } from 'react-router-dom'
import store from '@/components/store/store'



export default function Header() {
    const nav = useNavigate()

    const handleClick = () => {
        store.setIsmodalShown()
    }

    const navigateRules = () =>{
        nav('/rules')
    }

    return (
        <header className={styles.header}>
            <div className={styles.empty}></div>
            <Button handleClick={navigateRules} width={187} height={39} text="правила"  />
            <ButtonIcon isAnimate={true} handleClick={handleClick} image={settings}/>
        </header>
    )
}
import { Button, ButtonIcon } from '@/components/UI/buttons/buttons'
import styles from './styles.module.css'
import settings from '@assets/icons/settings.svg'
import { useNavigate } from 'react-router-dom'



export default function Header() {
    const nav = useNavigate()

    const handleClick = () => {
        console.log('click')
    }

    const navigateRules = () =>{
        nav('/rules')
    }

    return (
        <header className={styles.header}>
            <div className={styles.empty}></div>
            <Button handleClick={navigateRules} width={187} height={39} text="правила"  />
            <ButtonIcon handleClick={handleClick} image={settings}/>
        </header>
    )
}
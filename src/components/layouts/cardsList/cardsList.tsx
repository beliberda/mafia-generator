import { FunctionComponent, useState } from "react";
import styles from "./cardsList.module.css"
import eyeOpen from "@assets/icons/openEye.svg"
import eyeClose from "@assets/icons/closeEye.svg"
import { ButtonIcon } from "@/components/UI/buttons/buttons";
import { observer } from "mobx-react-lite";
import store from "@/components/store/store";

interface CardsListProps {
    
}
 
const CardsList: FunctionComponent<CardsListProps> = observer(() => {
    const [isVisible, setIsVisible] = useState(true)
    return ( 
    <section className={styles.cards_list}>
        <ButtonIcon handleClick={()=>setIsVisible(!isVisible)} image={isVisible? eyeOpen: eyeClose} isAnimate={false}/>
        {isVisible && <div className={styles.card_item}>
        <img src={store.currentCard.img} alt={store.currentCard.title} />
        </div>}
    </section>
     );
})
 
export default CardsList;
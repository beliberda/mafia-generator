
import styles from "./styles.module.css";
import Footer from "@/components/layouts/footer/footer";
import Settings from "@/components/layouts/settings";
import CardsList from "@/components/layouts/cardsList/cardsList";
import { ButtonIcon } from "@/components/UI/buttons/buttons";
import exit from "@assets/icons/exit.svg"
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  const nav = useNavigate()
  const navMain = ()=>{
    nav("/")
  }
  return (
    <div className={styles.main}>
      <div className={styles.button_exit}>
        <ButtonIcon handleClick={navMain} isAnimate={false} image={exit}/>
      </div>
      <CardsList/>
      <Settings />
      <Footer />
    </div>
  );
}

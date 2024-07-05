import store from "@/components/store/store";
import { ButtonIcon } from "@/components/UI/buttons/buttons";
import { observer } from "mobx-react-lite";
import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";

import next from "@assets/icons/next.svg"
import prev from "@assets/icons/prev.svg"

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = observer(() => {
  const [activeCard, setActiveCard] = useState(1);
  return <footer className={styles.footer}><ButtonIcon image={prev} isAnimate={false}/> <div className={styles.footer_info}>
    {activeCard} / {store.roleList.length}</div>  <ButtonIcon image={next} isAnimate={false}/></footer>;
});

export default Footer;

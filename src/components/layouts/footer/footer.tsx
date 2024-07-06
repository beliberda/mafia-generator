import store from "@/components/store/store";
import { ButtonIcon } from "@/components/UI/buttons/buttons";
import { observer } from "mobx-react-lite";
import { FunctionComponent, useState } from "react";
import styles from "./index.module.css";

import next from "@assets/icons/next.svg"
import prev from "@assets/icons/prev.svg"

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = observer(() => {

  return <footer className={styles.footer}><ButtonIcon handleClick={()=>store.prevCard()} image={prev} isAnimate={false}/> <div className={styles.footer_info}>
    {store.indexRole+1} / {store.roleList.length}</div>  <ButtonIcon handleClick={()=>store.nextCard()} image={next} isAnimate={false}/></footer>;
});

export default Footer;

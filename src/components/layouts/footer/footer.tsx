import { useState } from "react";
import styles from "./index.module.css";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const [activeCard, setActiveCard] = useState(1);
  return <footer className={styles.footer}>{activeCard} / 5</footer>;
};

export default Footer;

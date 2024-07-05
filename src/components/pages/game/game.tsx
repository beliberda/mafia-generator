
import styles from "./styles.module.css";
import Footer from "@/components/layouts/footer/footer";
import Settings from "@/components/layouts/settings";
import CardsList from "@/components/layouts/cardsList/cardsList";

export default function GamePage() {
  return (
    <div className={styles.main}>
      <CardsList/>
      <Settings />
      <Footer />
    </div>
  );
}

import Main from "@/components/layouts/main/main";
import styles from "./styles.module.css";
import Header from "@components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import Settings from "@/components/layouts/settings";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <Header />
      <Main />
      <Settings />
      <Footer />
    </div>
  );
}

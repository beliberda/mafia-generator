import styles from "./index.module.css";
import { Button } from "@/components/UI/buttons/buttons";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <main className={styles.main}>
      <Button width={339} height={71} text="Начать" />
    </main>
  );
};

export default Main;

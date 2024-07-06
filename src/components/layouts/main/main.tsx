import styles from "./index.module.css";
import { Button } from "@/components/UI/buttons/buttons";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import store from "@/components/store/store";

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  const nav = useNavigate()
  const Navigate = () => {
    if (store.roleList.length>0) {
      store.randomizeRoles()
      nav("/game");
      
    }
  };
  return (
    <main className={styles.main}>
      <Button handleClick={Navigate} isAnimate={false} width={339} height={71} text="Начать" />
    </main>
  );
};

export default Main;

import { ButtonIcon } from "@/components/UI/buttons/buttons";
import styles from "./index.module.css";
import close from "@assets/icons/close.svg";
import { useRef } from "react";
interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  const modalRef = useRef(null);
  const closeModal = () => {
    modalRef.current.close();
  };
  return (
    <dialog open ref={modalRef} className={styles.modal}>
      <ButtonIcon image={close} handleClick={closeModal} />
    </dialog>
  );
};

export default Settings;

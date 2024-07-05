import { ButtonIcon } from "@/components/UI/buttons/buttons";
import styles from "./index.module.css";
import close from "@assets/icons/close.svg";
import plus from "@assets/icons/plus.svg";

import { Select } from "@/components/UI/inputs/input";
import { observer } from "mobx-react-lite";
import store from "@/components/store/store";
import { FunctionComponent } from "react";
import * as React from "react";
interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = observer(() => {

if (!store.isModalShown) {
  return <></>
}

return (
    <div className={styles.modal}>
      <div className={styles.close_button}>
      <ButtonIcon image={close} isAnimate={true} handleClick={()=>{
        store.setIsmodalShown()
      }} />
      </div>
      {
        store.roleList.map((role,i)=>{

          return (
            <React.Fragment key={i}>
              <Select index={i} role={role}/>
              {/* <Todo prop={role}/> */}
              {/* <button style={{color:"white"}} onClick={()=>{
                store.deleteRoleList(role)
              }}>{role}</button> */}
            </React.Fragment>
          )
          
        })
      }
      <ButtonIcon handleClick={()=>{
        store.addRoleList("Мирный")
      }} image={plus} isAnimate={false} />
    </div>
  );
});

export default Settings;

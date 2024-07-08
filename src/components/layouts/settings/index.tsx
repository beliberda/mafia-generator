import { ButtonIcon } from "@/components/UI/buttons/buttons";
import styles from "./index.module.css";
import close from "@assets/icons/close.svg";
import plus from "@assets/icons/plus.svg";

import { Select } from "@/components/UI/inputs/input";
import { observer } from "mobx-react-lite";
import store from "@/components/store/store";
import { FunctionComponent } from "react";
import * as React from "react";
import { toJS } from "mobx";
import { getUnicId } from "@/components/utils/uniqId";
interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = observer(() => {
  if (!store.isModalShown) {
    return <></>;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.close_button}>
        <ButtonIcon
          image={close}
          isAnimate={true}
          handleClick={() => {
            store.setIsmodalShown();
          }}
        />
      </div>
      {store.roleList.map((role) => {
        return (
          <React.Fragment key={role.id}>
            <Select id={role.id} title={role.title} />
          </React.Fragment>
        );
      })}
      <ButtonIcon
        handleClick={() => {
          const randId = getUnicId(toJS(store.roleList));
          store.addRoleList({
            id: randId,
            title: "Мирный",
            img: "./cards/Мирный.png",
          });
        }}
        image={plus}
        isAnimate={false}
      />
    </div>
  );
});

export default Settings;

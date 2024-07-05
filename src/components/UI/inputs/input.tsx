import store from "@/components/store/store";
import { ButtonIcon } from "@/components/UI/buttons/buttons";
import minus from "@assets/icons/minus.svg";
import { observer } from "mobx-react-lite";
import { FunctionComponent, useState } from "react";
import styles from "./input.module.css";
interface InputProps {
  role: string;
  index: number;
}

const roles = [
  "Маньяк",
  "Мафия",
  "Мирный",
  "Коммисар",
  "Красотка",
  "Врач",
];

const Select = observer(({role,index}:InputProps) => {
  // const [value, setValue] = useState(role)

  return (
    <div className={styles.input_wrapper}>
      {/* <input
        onChange={(e)=>{
          setValue(e.target.value)
        }}
        autoComplete="off"
        type="text"
        list="role-list"
        value={value}
      /> */}
      <select onChange={(e)=> store.editRoleList(e.target.value,index)} defaultValue={role}>
        {roles.map((elem) => {
          return (
            <option key={elem} value={elem}>
              {elem}
            </option>
          );
        })} 
      </select>
      <ButtonIcon handleClick={()=>{
        store.deleteRoleList(role)
      }} image={minus} isAnimate={false} />
    </div>
  );
});
export {Select}
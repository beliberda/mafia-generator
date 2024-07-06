import { Role } from "@/components/interfaces/interface";
import store from "@/components/store/store";
import { ButtonIcon } from "@/components/UI/buttons/buttons";
import minus from "@assets/icons/minus.svg";
import { observer } from "mobx-react-lite";
import styles from "./input.module.css";


const roles = [
  "Маньяк",
  "Мафия",
  "Мирный",
  "Коммисар",
  "Красотка",
  "Врач",
];

const Select = observer(({title, id}:Role) => {
  return (
    <div className={styles.input_wrapper}>
      <select onChange={(e)=> store.editRoleList(e.target.value,id)} defaultValue={title}>
        {roles.map((elem) => {
          return (
            <option key={elem} value={elem}>
              {elem}
            </option>
          );
        })} 
      </select>
      <ButtonIcon handleClick={()=>{
        
        store.deleteRoleList(id)
      }} image={minus} isAnimate={false} />
    </div>
  );
});
export {Select}
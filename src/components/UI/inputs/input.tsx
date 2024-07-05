import { ButtonIcon } from "@/components/UI/buttons/buttons";
import minus from "@assets/icons/minus.svg";
import styles from "./input.module.css";
interface InputProps {}

const roles = [
  "Маньяк",
  "Мафия",
  "Мирный",
  "Коммисар",
  "Красотка",
  "Врач",
  "Мафия",
];

const Select: FunctionComponent<InputProps> = () => {
  const selectValue = () => {
    console.log("selectValue");
  };

  return (
    <div className={styles.input_wrapper}>
      <input
        onChange={selectValue}
        autoComplete="off"
        type="text"
        list="role-list"
      />
      <datalist id="role-list">
        {roles.map((role) => {
          return (
            <option key={role} value={role}>
              {role}
            </option>
          );
        })}
      </datalist>
      <ButtonIcon image={minus} />
    </div>
  );
};

export { Select };

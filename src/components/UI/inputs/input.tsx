import styles from "./input.module.css";
interface InputProps {}

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
        <option value="Маньяк">Маньяк</option>
        <option value="Мафия">Мафия</option>
        <option value="Мирный">Мирный</option>
        <option value="Коммисар">Коммисар</option>
        <option value="Красотка">Красотка</option>
        <option value="Врач">Врач</option>
      </datalist>
    </div>
  );
};

export { Select };

import styles from "./styles.module.css";

interface ButtonProps {
  width?: number | null;
  height?: number | null;
  text?: string | null;
  handleClick?: () => void | null;
  image?: ImgHTMLAttributes | null;
  isAnimate?: boolean | null;
}

function Button({ width, height, text, handleClick }: ButtonProps) {
  return (
    <button
      style={{
        width: width + "px",
        height: height + "px",
      }}
      onClick={handleClick}
      className={styles.button_primary}
    >
      {text}
    </button>
  );
}
function ButtonIcon({ image, handleClick, isAnimate=true }: ButtonProps) {
  return (
    <button onClick={handleClick} className={!isAnimate ? styles.button_icon : styles.button_icon +" "+ styles.anim_icon}>
      <img src={image} alt="" />
    </button>
  );
}
export { Button, ButtonIcon };

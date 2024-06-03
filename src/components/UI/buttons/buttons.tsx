import styles from "./styles.module.css"

interface ButtonProps {
    width?: number | null,
    height?: number | null,
    text?: string | null,
    handleClick?: () => void | null,
    image?: ImgHTMLAttributes | null,
}

function Button({width,height,text,handleClick}:ButtonProps){
    return (
        <button style={{
            width:width + "px",
            height:height + "px",

        }} onClick={handleClick} className={styles.button_primary}>{text}</button>
    )
}
function ButtonIcon({image,handleClick}:ButtonProps) {
    return <button onClick={handleClick} className={styles.button_icon}>
        <img src={image} alt="" />
    </button>   
}
export {Button, ButtonIcon}
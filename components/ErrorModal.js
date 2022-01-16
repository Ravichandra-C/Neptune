import styles from "../styles/Home.module.css";
export default function ErrorModal({errors}){

    return (
        <div id='error'>
            {errors.map(item=><span className={styles.err} >{item}</span>)}
        </div>

    )
}
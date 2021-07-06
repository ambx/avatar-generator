import styles from "./styles.module.scss";
import SVG from '/public/images/SVG'

export default function Avatar(){
    return(
        <div className={styles.container}>
            <SVG width="300" height="300"/>
                       
            <br />
            <button className={styles.button} onClick={downloadSVG}>Download</button>
        </div>
    )
}

function downloadSVG(){
    console.log('hey');
}
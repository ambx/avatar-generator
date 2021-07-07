import styles from "./styles.module.scss";
import SVG from '/public/images/SVG'
import Button from '../RandomButton'

export default function Avatar(){
    return(
        <div className={styles.container}>
            <SVG width="300" height="300"/>
                       
            <br />
            <div className={styles.buttons}>
            <button className={styles.button}>Download</button>
            <Button />
            </div>
            <br />
            
        </div>
    )
}
function randomColors(){
     const randomColor={
        bg:randomRGB(),
        skin: randomRGB(),
        hair: randomRGB(),
        tshirt: randomRGB(),
     }
     
    //const r=randomColor.bg[0];
    //const g=randomColor.bg[1];
    //const b=randomColor.bg[2];
    //var color = `rgb(${r}, ${g}, ${b})`;
    //document.getElementById('button').style.background=color;
    document.body.style.backgroundColor = color;
     
 }

 function randomRGB(){
    var r = Math.random() * 256 >> 0;
    var g = Math.random() * 256 >> 0;
    var b = Math.random() * 256 >> 0;
    return [r,g,b]
 }

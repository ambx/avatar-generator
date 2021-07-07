import styles from "./styles.module.scss";
import SVG from '../SVG/base'
import RandomButton from '../RandomButton'
import { useColorContext } from '../../context/ColorContext'

export default function Avatar(){
    const {
        skinColor,
        hairColor,
        backgroundColor,
        tshirtColor,
        setBackgroundColor,
        setSkinColor,
        setHairColor,
        setTshirtColor
      } = useColorContext();

    return(
        <div className={styles.container}>
            <SVG
                width="300" 
                height="300" 
                backgroundColor={backgroundColor} 
                skinColor={skinColor} 
                hairColor={hairColor}
                tshirtColor={tshirtColor}
                />         
            <br />
            <div className={styles.buttons}>
            <button className={styles.button}>Download</button>
            <RandomButton />
            </div>
            <br />
            
        </div>
    )
}
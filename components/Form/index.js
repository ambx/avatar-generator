import styles from "./styles.module.scss";
import { useFeaturesContext } from '../../context/FeaturesContext'
import SelectInput from '../FormSelectInput.js'
import ColorInput from '../FormColorInput.js'


export default function Form(){

    const {
        backgroundColor,
        setBackgroundColor,
        skinColor,
        setSkinColor,
        hairColor,
        setHairColor,
        tshirtColor, 
        setTshirtColor,
        hair,
        setHair,
        facialHair,
        setFacialHair,
        accessories,
        setAccessories,
        hairList,
        facialHairList,
        accessoriesList
      } = useFeaturesContext();


    return(
        <div className={styles.container}>
            <table>
                <ColorInput title="Background Color" color={backgroundColor}  />
                <ColorInput title="Skin Color" color={skinColor} />
                <SelectInput title="Hair" value={hair} list={hairList} />
                <ColorInput title="Hair Color" color={hairColor} />
                <SelectInput title="Facial Hair" value={facialHair} list={facialHairList} />
                <ColorInput title="T-Shirt Color" color={tshirtColor} />
                <SelectInput title="Accessories" value={accessories} list={accessoriesList} /> 
            </table>
        </div>
    )
}

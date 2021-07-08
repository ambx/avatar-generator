import styles from "./Form/styles.module.scss";
import { useFeaturesContext } from '../context/FeaturesContext'
import ColorPicker from './Color-Picker/index'


export default function formColorInput(props){

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
        <tr>
            <td>{props.title}</td>
            <td className={styles.input}>
                <ColorPicker
                    color={props.color}
                    onChange={(value) => 
                        {
                            if (props.title==="Background Color")
                                return setBackgroundColor(value)
                            else if(props.title==="Skin Color")
                                return setSkinColor(value)
                            else if(props.title==="Hair Color")
                                return setHairColor(value)
                            else if(props.title==="T-Shirt Color")
                                return setTshirtColor(value)
                        }
                    }  />
            </td>
        </tr>
    )
}
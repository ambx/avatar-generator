import styles from "./Form/styles.module.scss";
import { useFeaturesContext } from '../context/FeaturesContext'


export default function FormSelectInput(props){

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
        <tr >
            <td >{props.title}</td>
            <td  className={styles.input}>
                <select 
                    name={props.title} 
                    value={props.value} 
                    onChange={(value) => 
                        {
                            if (props.title==="Hair")
                                setHair(value)
                            else if(props.title==="Facial Hair")
                                setFacialHair(value)
                            else if(props.title==="Accessories")
                                setAccessories(value)
                        }
                    } >
                        <optgroup>
                            {props.list.map((hair) => (
                                <option value={hair}>
                                    {hair}
                                </option>
                            ))}
                        </optgroup>
                </select>
            </td>
        </tr>
    )
}
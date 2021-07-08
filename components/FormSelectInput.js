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
                    key={props.title} 
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
                            {props.list.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </optgroup>
                </select>
            </td>
        </tr>
    )
}
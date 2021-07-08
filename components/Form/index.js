import styles from "./styles.module.scss";
import ColorPicker from '../Color-Picker/index'
import { useContext } from 'react'
import { useFeaturesContext } from '../../context/FeaturesContext'

//to do - should change drop down options to automatically update as new svg additions integrated

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
        setAccessories
      } = useFeaturesContext();

      const Hair=['Bob','Short','Long'];
      const FacialHair=['Mustache','Beard' ,'None'];
      const Accessories=['Glasses','Mask','Hat'];

    return(
        <div className={styles.container}>
            <table>
                <tr>
                    <td>Background Color</td>
                    <td className={styles.input}>
                        <ColorPicker
                            color={backgroundColor}
                            onChange={(color) => setBackgroundColor(color)}
            />      </td>
                </tr>
                <tr>
                    <td>Skin Color</td>
                    <td className={styles.input}>
                    <ColorPicker 
                        color={skinColor}
                        onChange={(color) => setSkinColor(color)}/>
                    </td>
                </tr>
                <tr >
                    <td >Hair</td>
                    <td  className={styles.input}>
                    <select name="hair" id="hair" value={hair} onChange={(value) => setHair(value)} >
                    <optgroup>
                        {Hair.map((Hair) => (
                            <option value={Hair}>
                            {Hair}
                            </option>
                        ))}
                    </optgroup>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Hair Color</td>
                    <td className={styles.input}>
                    <ColorPicker 
                        color={hairColor}
                        onChange={(color) => setHairColor(color)}/>
                    </td>
                </tr>
                <tr>
                    <td>Facial Hair</td>
                    <td className={styles.input}>
                    <select name="facial-hair" id="facial-hair" value={facialHair} onChange={(value) => setFacialHair(value)}>
                    <optgroup>
                        {FacialHair.map((FacialHair) => (
                            <option value={FacialHair}>{FacialHair}</option>
                        ))}
                    </optgroup>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>T-Shirt Color</td>
                    <td className={styles.input}>
                    <ColorPicker 
                        color={tshirtColor}
                        onChange={(color) => setTshirtColor(color) }
                    />
                    </td>
                </tr>
                <tr>
                    <td>Accessories</td>
                    <td className={styles.input}>
                    <select name="accessories" id="accessories" value={accessories} onChange={(value) => setAccessories(value)}>
                    <optgroup>
                        {Accessories.map((Accessories) => (
                            <option value={Accessories}>{Accessories}</option>
                        ))}
                    </optgroup>
                    </select>
                    </td>
                </tr>
                
            </table>
        </div>
    )
}

function trial(){
    document.getElementById("hair").value = "Bob";
}
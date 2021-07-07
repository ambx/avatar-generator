import styles from "./styles.module.scss";
import ColorPicker from '../Color-Picker/index'
import { useContext } from 'react'
import { useColorContext } from '../../context/ColorContext'

//to do - should change drop down options to automatically update as new svg additions integrated

export default function Form(){
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
                    <select name="hair" id="hair">
                    <optgroup>
                        <option value="" disabled selected>Select your option</option>
                        <option value="bob">Bob</option>
                        <option value="long">Long</option>
                        <option value="short">Short</option>
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
                    <select name="facial-hair" id="facial-hair">
                    <optgroup>
                        <option value="" disabled selected>Select your option</option>
                        <option value="bob">Beard</option>
                        <option value="long">Mustache</option>
                        <option value="short">None</option>
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
                    <select name="accessories" id="accessories">
                    <optgroup>
                        <option value="" disabled selected>Select your option</option>
                        <option value="bob">Glasses</option>
                        <option value="long">Hat</option>
                        <option value="short">Mask</option>
                    </optgroup>
                    </select>
                    </td>
                </tr>
                
            </table>
        </div>
    )
}


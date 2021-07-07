import styles from "./styles.module.scss";
import ColorPicker from '../Color-Picker/index'
import { useContext } from 'react'
import { ColorContext } from '../../context/ColorContext'

export default function Form(){
    const [colors, setColors]=useContext(ColorContext);

    return(
        <div className={styles.container}>
            <table>
                <tr>
                    <td>Background Color</td>
                    <td className={styles.input}><ColorPicker r={colors['bg'][0]} g={colors['bg'][1]} b={colors['bg'][2]} /></td>
                </tr>
                <tr>
                    <td>Skin Color</td>
                    <td className={styles.input}><ColorPicker r={colors['skin'][0]} g={colors['skin'][1]} b={colors['skin'][2]}/></td>
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
                    <td className={styles.input}><ColorPicker r={colors['hair'][0]} g={colors['hair'][1]} b={colors['hair'][2]}/></td>
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
                    <td className={styles.input}><ColorPicker r={colors['tshirt'][0]} g={colors['tshirt'][1]} b={colors['tshirt'][2]}/></td>
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


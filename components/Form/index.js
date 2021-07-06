import styles from "./styles.module.scss";
import Button from '../Color-Picker/index'

export default function Form(){
    return(
        <div className={styles.container}>
            <button className={styles.button}> Generate Random</button>
            <br />
            <br />
            <table>
                <tr>
                    <td>Background Color</td>
                    <td className={styles.input}><Button /></td>
                </tr>
                <tr>
                    <td>Skin Color</td>
                    <td className={styles.input}><Button /></td>
                </tr>
                <tr>
                    <td>Hair</td>
                    <td className={styles.input}>
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
                    <td className={styles.input}><Button /></td>
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
                    <td className={styles.input}><Button /></td>
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


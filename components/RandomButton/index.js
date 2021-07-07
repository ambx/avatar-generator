import {useContext} from 'react';
import {useColorContext} from '../../context/ColorContext'

export default function RandomButton(){

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

    //updating color context
    function getNewColors() {
        setBackgroundColor(randomRGB());
        setSkinColor(randomRGB());
        setHairColor(randomRGB());
        setTshirtColor(randomRGB());
    }
    
    return(
        <button className="button" onClick={getNewColors}>Random</button>
        
    )
}

function randomRGB(){
    var r = Math.random() * 256 >> 0;
    var g = Math.random() * 256 >> 0;
    var b = Math.random() * 256 >> 0;
    return [r,g,b]
 }
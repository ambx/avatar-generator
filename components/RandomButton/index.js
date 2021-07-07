import {useContext} from 'react';
import {ColorContext} from '../../context/ColorContext'

export default function RandomButton(){

    const [colors, setColors]=useContext(ColorContext);

    //updating color context
    function getNewColors() {
        setColors({bg:randomRGB(), skin:randomRGB(), hair:randomRGB(), tshirt:randomRGB()});
        console.log(colors);
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
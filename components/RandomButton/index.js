import {useContext} from 'react';
import {ColorContext} from '../../context/ColorContext'

export default function RandomButton(){

    const [colors, setColors]=useContext(ColorContext);

    function getRandomColors() {
        const bg=randomRGB();
        const skin=randomRGB();
        const hair=randomRGB();
        const tshirt=randomRGB();
        setColors({bg:bg, skin:skin, hair:hair, tshirt:tshirt});
        console.log(colors);
    }
    
    return(
        <button className="button" onClick={getRandomColors}>Random</button>
        
    )
}

function randomRGB(){
    var r = Math.random() * 256 >> 0;
    var g = Math.random() * 256 >> 0;
    var b = Math.random() * 256 >> 0;
    return [r,g,b]
 }
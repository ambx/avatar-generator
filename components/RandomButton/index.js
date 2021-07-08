import {useContext} from 'react';
import {useFeaturesContext} from '../../context/FeaturesContext'

export default function RandomButton(){

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


    //updating context
    function getNewValues() {
        setBackgroundColor(randomRGB());
        setSkinColor(randomRGB());
        setHairColor(randomRGB());
        setTshirtColor(randomRGB());
        setHair(randomOption(Hair));
        setFacialHair(randomOption(FacialHair));
        setAccessories(randomOption(Accessories));
    }
    
    return(
        <button className="button" onClick={getNewValues}>Random</button>
        
    )
}

function randomRGB(){
    var r = Math.random() * 256 >> 0;
    var g = Math.random() * 256 >> 0;
    var b = Math.random() * 256 >> 0;
    return [r,g,b]
 }

 function randomOption(items){
    return items[Math.floor(Math.random()*items.length)];
 }
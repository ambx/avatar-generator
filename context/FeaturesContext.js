import { useState, useContext, createContext } from 'react';

export const FeaturesContext = createContext();

export const FeaturesProvider = props => {

    const hairList = props.hairList;
    const facialHairList = props.facialHairList;
    const accessoriesList = props.accessoriesList;

    //initial states
    const [backgroundColor, setBackgroundColor] = useState([250, 200, 300]);
    const [skinColor, setSkinColor] = useState([100, 200, 200]);
    const [hairColor, setHairColor] = useState([100, 250, 300]);
    const [tshirtColor, setTshirtColor] = useState([100, 200, 100]);
    const [hair, setHair] = useState(randomOption(hairList));
    const [facialHair, setFacialHair] = useState(randomOption(facialHairList));
    const [accessories, setAccessories] = useState(randomOption(accessoriesList));

    //container for all child components (consumers)
    const value = {
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
    };

    return(
        <FeaturesContext.Provider value={value}>
            {props.children}
        </FeaturesContext.Provider>
    );
}

export const useFeaturesContext = () => {
    //context contains the value
  const context = useContext(FeaturesContext);
  if (context === undefined) {
    throw new Error(`useItem must be used within a FeaturesProvider`);
  }
  return context;
};


function randomOption(items){
    return items[Math.floor(Math.random()*items.length)];
 }

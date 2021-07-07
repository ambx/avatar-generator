import { useState, useContext, createContext } from 'react';

export const ColorContext = createContext();

export const ColorProvider = props => {

    //initial color states
    const [backgroundColor, setBackgroundColor] = useState([250, 200, 300]);
    const [skinColor, setSkinColor] = useState([100, 200, 200]);
    const [hairColor, setHairColor] = useState([100, 250, 300]);
    const [tshirtColor, setTshirtColor] = useState([100, 200, 100])

    //container for all child components (consumers)
    const value = {
        backgroundColor,
        setBackgroundColor,
        skinColor,
        setSkinColor,
        hairColor,
        setHairColor,
        tshirtColor, 
        setTshirtColor
    };

    return(
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
}

export const useColorContext = () => {
    //context contains the value
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error(`useItem must be used within a ColorProvider`);
  }
  return context;
};

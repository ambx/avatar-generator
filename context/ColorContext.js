import { useState, useContext, createContext } from 'react';

export const ColorContext = createContext();

export const ColorProvider = props => {

    const [colors, setColors]= useState(
        //initial values-should change it to initial svg colors later
        {
            bg:[250,200,300],
            skin:[100,200,200],
            hair:[100,250,300],
            tshirt:[100,200,100]
        }
)  

//container for all child components (consumers)
    return(
        <ColorContext.Provider value={[colors, setColors]}>
            {props.children}
        </ColorContext.Provider>
    );
}



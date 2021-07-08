import { useState, useContext, createContext } from 'react';
import fs from 'fs'
import path from 'path'

export const HairOptionsContext = createContext()

export const HairOptionsProvider = () => {
    
    //get svg/hair directory path
    const hairDirectory = path.join('/', 'components/SVG/Hair')
    //store array of all filenames present in svg/hair (bob,long,short...)
    const fileNames=fs.readdirSync(hairDirectory)
    //next we need to remove the .svg extention
    const hair=fileNames.map((fileNames) => (fileNames.replace(/\.svg$/, '')))

    const [hairOptions, setHairOptions] = useSet(hair);

    return(
        <HairOptionsContext.Provider value={[hairOptions, setHairOptions]}>
            {props.children}
        </HairOptionsContext.Provider>
    )
}

export const useGetHairOptionsContext = () => {
    //context contains the value
  const context = useContext(HairOptionsContext);
  if (context === undefined) {
    throw new Error(`useItem must be used within a FeaturesProvider`);
  }
  return context;
};

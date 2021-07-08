import fs from 'fs'
import path from 'path'

//get svg/Facial-Hair directory path
const facialHairDirectory = path.join(process.cwd(), 'components/SVG/Facial-Hair')

 export function getFacialHairOptions() {
       //store array of all filenames present in svg/hair (bob,long,short...)
       const fileNames=fs.readdirSync(facialHairDirectory)
       //next we need to remove the .js extention
       const facialHairList=fileNames.map((fileNames) => (fileNames.replace(/\.js$/, '')))
       //return the fileNames array
     return(
            facialHairList
     )
 }



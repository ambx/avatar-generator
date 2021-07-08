import fs from 'fs'
import path from 'path'

//get svg/Accessories directory path
const AccessoriesDirectory = path.join(process.cwd(), 'components/SVG/Accessories')

 export function getAccessoriesOptions() {
       //store array of all filenames present in svg/hair (bob,long,short...)
       const fileNames=fs.readdirSync(AccessoriesDirectory)
       //next we need to remove the .js extention
       const accessoriesList=fileNames.map((fileNames) => (fileNames.replace(/\.js$/, '')))
       //return the fileNames array
     return(
            accessoriesList
     )
 }



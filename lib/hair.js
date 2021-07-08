import fs from 'fs';
import path from 'path'

const hairDirectory = path.join(process.cwd(), 'components/SVG/Hair');

const fileNames=fs.readdirSync(hairDirectory);

 export default function hair() {
    const fileNames=fs.readdirSync(hairDirectory);

     return(
            fileNames
     )
 }

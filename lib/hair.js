import fs from "fs";
import path from "path";

//get svg/hair directory path
const hairDirectory = path.join(process.cwd(), "components/SVG/Hair");

export function getHairOptions() {
  //store array of all filenames present in svg/hair (bob,long,short...)
  const fileNames = fs.readdirSync(hairDirectory);
  //next we need to remove the .js extention
  const hairList = fileNames.map((fileNames) => fileNames.replace(/\.js$/, ""));
  //return the fileNames array
  return hairList;
}

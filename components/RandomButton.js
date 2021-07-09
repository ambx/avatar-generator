import { useFeaturesContext } from "../context/FeaturesContext";

export default function RandomButton() {
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
    setAccessories,
    hairList,
    facialHairList,
    accessoriesList,
  } = useFeaturesContext();

  //updating context
  function getNewValues() {
    setBackgroundColor(randomRGB());
    setSkinColor(randomRGB());
    setHairColor(randomRGB());
    setTshirtColor(randomRGB());
    setFacialHair(randomOption(facialHairList));
    setAccessories(randomOption(accessoriesList));
    setHair(randomOption(hairList));
  }

  return (
    <button className="button" onClick={getNewValues}>
      Generate Random
    </button>
  );
}

function randomRGB() {
  var r = (Math.random() * 256) >> 0;
  var g = (Math.random() * 256) >> 0;
  var b = (Math.random() * 256) >> 0;
  return [r, g, b];
}

function randomOption(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomSkinColor() {
  const brown = [233, 75, 22];
  return brown.map((brown) => (((Math.random() * 5) >> 0) * brown) / 10);
}

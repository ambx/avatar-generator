import BG from "./SVG/bg";
import Skin from "./SVG/skin";
import Clothes from "./SVG/clothes";
import Hair from "./SVG/hair";
import { useFeaturesContext } from "../context/FeaturesContext";

export default function SVGDisplay(props) {
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
  } = useFeaturesContext();

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <BG color={backgroundColor} />
      <Clothes color={tshirtColor} />
      <Skin />
      <Hair color={hairColor} />
    </svg>
  );
}

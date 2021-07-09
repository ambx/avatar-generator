import styles from "./styles.module.scss";
import SVG from "../SVG/base";
import RandomButton from "../RandomButton";
import { useFeaturesContext } from "../../context/FeaturesContext";

export default function Avatar() {
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
    <div className={styles.container}>
      <SVG
        width="300"
        height="300"
        backgroundColor={backgroundColor}
        skinColor={skinColor}
        hairColor={hairColor}
        tshirtColor={tshirtColor}
      />
      <br />
      <div className={styles.buttons}>
        <RandomButton />
      </div>
      <br />
    </div>
  );
}

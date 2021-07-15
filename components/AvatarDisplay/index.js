import styles from "./styles.module.scss";
import AvatarSVG from "../Avatar";
import RandomButton from "../RandomButton";

export default function Avatar() {
  return (
    <div className={styles.container}>
      <AvatarSVG />
      <br />
      <div className={styles.buttons}>
        <RandomButton />
      </div>
      <br />
    </div>
  );
}

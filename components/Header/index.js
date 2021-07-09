import styles from "./styles.module.scss";
import Image from "next/image";
import GithubLogo from "/public/images/github.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Avatar Generator</h1>
      <br />
      <br />
      <a href="https://github.com/ambx/avatar-generator">
        <Image src={GithubLogo} alt="GitHub Repo" width="30" height="30" />
      </a>
    </div>
  );
}

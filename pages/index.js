import Head from "next/head";
import styles from "../styles/index.module.scss";
import Header from "../components/Header";
import Avatar from "../components/AvatarDisplay";
import Form from "../components/Form/index";
import Footer from "../components/Footer/index";
import { getHairOptions } from "../lib/hair";
import { getFacialHairOptions } from "../lib/facialHair";
import { getAccessoriesOptions } from "../lib/accessories";
import { FeaturesProvider } from "../context/FeaturesContext";

export default function Home(props) {
  return (
    <FeaturesProvider
      hairList={props.hairList}
      facialHairList={props.facialHairList}
      accessoriesList={props.accessoriesList}
    >
      <div className={styles.container}>
        <Header />
        <hr />
        <div className={styles.main}>
          <Avatar />
          <Form />
        </div>
        <br />
        <br />
        <div className={styles.downloadButtons}>
          <button className={styles.button}>Download PNG</button>
          <button className={styles.button}>Download SVG</button>
        </div>
      </div>

      <Footer />
    </FeaturesProvider>
  );
}

export async function getStaticProps() {
  const hairList = getHairOptions();
  const facialHairList = getFacialHairOptions();
  const accessoriesList = getAccessoriesOptions();
  return {
    props: {
      hairList,
      facialHairList,
      accessoriesList,
    },
  };
}

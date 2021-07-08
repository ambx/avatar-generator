import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Avatar from '../components/Avatar/index'
import Form from '../components/Form/index'
import Footer from '../components/Footer/index'
import { getHairOptions } from '../lib/hair'


export default function Home(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Avatar Generator</h1><br /><br />
      <div className={styles.main}>
        <Avatar />
        <Form /> 
      </div>
      
    </div>
  )
}

export async function getStaticProps(){
  const hairOptions=getHairOptions()
  return{
    props:{
      hairOptions
    }
  }
}
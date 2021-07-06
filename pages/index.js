import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import Avatar from '../components/Avatar/index'
import Form from '../components/Form/index'
import Footer from '../components/Footer/index'


export default function Home() {
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

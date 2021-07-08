import '../styles/globals.scss'
import { FeaturesProvider } from '../context/FeaturesContext'
import { getHairOptions } from '../lib/hair'


export default function MyApp({ Component, pageProps }) {
  return (
      <FeaturesProvider hairOption={pageProps.hairOptions}>
        <Component {...pageProps} />
      </FeaturesProvider>
    
  )
}

export async function getStaticProps(){
  const hairOptions=getHairOptions()
  return{
    pageProps:{
      hairOptions
    }
  }
}
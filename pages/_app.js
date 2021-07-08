import '../styles/globals.scss'
import { FeaturesProvider } from '../context/FeaturesContext'

export default function MyApp({ Component, pageProps }) {
  return (
      <FeaturesProvider>
        <Component {...pageProps} />
      </FeaturesProvider>
    
  )
}
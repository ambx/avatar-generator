import '../styles/globals.scss'
import { ColorProvider } from '../context/ColorContext'

export default function MyApp({ Component, pageProps }) {
  return (
      <ColorProvider>
      <Component {...pageProps} />
      </ColorProvider>
    
  )
}
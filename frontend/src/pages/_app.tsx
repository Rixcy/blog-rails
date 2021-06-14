import { AnimateSharedLayout } from 'framer-motion'
import type { AppProps } from 'next/app'

import '../styles/global.css'
import '@fontsource/inter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
export default MyApp

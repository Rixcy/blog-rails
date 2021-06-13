import '../styles/global.css'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AnimateSharedLayout>
			<Component {...pageProps} />
		</AnimateSharedLayout>
	)
}
export default MyApp

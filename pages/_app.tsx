import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import { Theme } from 'theme'
import Layout from '@components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<Head>
				<title>Just Go</title>
			</Head>
			<StyledEngineProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</StyledEngineProvider>
		</ThemeProvider>
	)
}

export default MyApp

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className='text-gray-700 bg-white text-14 sm:text-16'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
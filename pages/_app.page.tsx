import '../styles/_variables.css'

import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import App from 'pages/src/app'
import { ReactElement, ReactNode, useRef } from 'react'
import { RecoilRoot } from 'recoil'

import { GlobalStyle } from '../styles/global-style'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const queryClientRef = useRef<QueryClient>()
    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                },
            },
        })
    }

    const getLayout = Component.getLayout ?? ((page) => <App>{page}</App>)

    return (
        <>
            <Head>
                <title>OKKY - All that developer</title>
            </Head>
            <QueryClientProvider client={queryClientRef.current}>
                <Hydrate state={pageProps.dehydratedState}>
                    <RecoilRoot>
                        <GlobalStyle />
                        {getLayout(<Component {...pageProps} />)}
                    </RecoilRoot>
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}

export default MyApp

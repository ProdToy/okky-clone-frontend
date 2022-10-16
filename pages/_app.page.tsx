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
import { ReactElement, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from 'styles/global-style'

import App from '~/layout/app'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 3,
            },
        },
    })

    const getLayout = Component.getLayout ?? ((page) => <App>{page}</App>)

    return (
        <>
            <Head>
                <title>OKKY - All that developer</title>
            </Head>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <RecoilRoot>
                        <GlobalStyle />
                        {getLayout(<Component {...pageProps} />)}
                    </RecoilRoot>
                </Hydrate>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}

export default MyApp

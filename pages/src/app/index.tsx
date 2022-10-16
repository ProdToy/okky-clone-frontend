import { ReactNode } from 'react'

import Footer from './footer'
import Header from './header'
import { AppWrapper, MainField } from './style'

interface Props {
    children: ReactNode
}

const App = ({ children }: Props) => {
    return (
        <AppWrapper>
            <Header />
            <MainField>{children}</MainField>
            <Footer />
        </AppWrapper>
    )
}

export default App

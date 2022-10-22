import { ReactNode } from 'react'

import Footer from './footer'
import Header from './header'
import { AppWrapper, BodyField } from './style'

interface Props {
    children: ReactNode
}

const App = ({ children }: Props) => {
    return (
        <AppWrapper>
            <Header />
            <BodyField>{children}</BodyField>
            <Footer />
        </AppWrapper>
    )
}

export default App

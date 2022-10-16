import logo from '~/assets/common/okky-munchkin-logo.svg'

import {
    HeaderActionField,
    HeaderMainField,
    HeaderWrapper,
    InfoField,
    LogoImage,
    NavigationBox,
    NavigationLink,
} from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderMainField>
                <InfoField>
                    <LogoImage>
                        <img src={logo.src} />
                    </LogoImage>
                    <NavigationBox>
                        <NavigationLink>Q&A</NavigationLink>
                        <NavigationLink>지식</NavigationLink>
                        <NavigationLink>커뮤니티</NavigationLink>
                        <NavigationLink>이벤트</NavigationLink>|
                        <NavigationLink>JOBS</NavigationLink>|
                        <NavigationLink>공지사항</NavigationLink>
                    </NavigationBox>
                </InfoField>
                <HeaderActionField></HeaderActionField>
            </HeaderMainField>
        </HeaderWrapper>
    )
}

export default Header

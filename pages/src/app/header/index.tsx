import Link from 'next/link'

import logo from '~/assets/common/okky-munchkin-logo.svg'
import CommonButton from '~/common/button/common-button'

import {
    HeaderActionField,
    HeaderMainField,
    HeaderWrapper,
    InfoField,
    LogoImage,
    NavigationBox,
    NavLinkUnit,
} from './style'

const Header = () => {
    const navList = [
        { href: '/questions', name: 'Q&A' },
        { href: '/knowledge', name: '지식' },
        { href: '/community', name: '커뮤니티' },
        { href: '/jobs/contract', name: 'JOBS' },
        { href: '/notice/info', name: '공지사항' },
    ]

    return (
        <HeaderWrapper>
            <HeaderMainField>
                <InfoField>
                    <Link href="/">
                        <LogoImage>
                            <img src={logo.src} alt="" />
                        </LogoImage>
                    </Link>

                    <NavigationBox>
                        {navList.map(({ href, name }) => (
                            <NavLinkUnit key="name">
                                <Link href={href}>{name}</Link>
                            </NavLinkUnit>
                        ))}
                    </NavigationBox>
                </InfoField>
                <HeaderActionField>
                    <CommonButton variant="outline" radius="lg">
                        로그인
                    </CommonButton>
                    <CommonButton radius="lg">회원가입</CommonButton>
                </HeaderActionField>
            </HeaderMainField>
        </HeaderWrapper>
    )
}

export default Header

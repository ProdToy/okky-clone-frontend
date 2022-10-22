import styled from 'styled-components'
import { Typography } from 'styles/theme'

export const HeaderWrapper = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid var(--divider-main);
`

export const LogoImage = styled.a`
    display: flex;
    align-items: center;
    width: 115px;
    cursor: pointer;
`

export const HeaderMainField = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
`

export const HeaderActionField = styled.div`
    display: flex;
    gap: 10px;
`

export const InfoField = styled.div`
    display: flex;
`

export const NavigationBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 105px;
    gap: 28px;
`

export const NavLinkUnit = styled.div`
    ${Typography.text_sm}
    cursor: pointer;
    &:hover {
        color: var(--primary-main);
    }
`

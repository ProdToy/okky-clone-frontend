import styled, { css } from 'styled-components'

const defaultFieldStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SideBarField = styled.div`
    ${defaultFieldStyle};
    max-width: 100px;
`

export const MainField = styled.div`
    ${defaultFieldStyle};
    padding: 40px;
    max-width: 1080px;
`

export const SupportField = styled.div`
    ${defaultFieldStyle};
    max-width: 100px;
`

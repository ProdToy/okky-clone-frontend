import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { SizeType } from '~/types/style'

type ButtonType = 'contain' | 'text' | 'outline'

interface Props {
    variant?: ButtonType
    size?: SizeType
    radius?: SizeType
    disabled?: boolean
    fullWidth?: boolean
    href?: string
    children?: string | ReactNode
}

const CommonButton = (props: Props) => {
    return (
        <CommonButtonWrapper {...props}>{props.children}</CommonButtonWrapper>
    )
}

export default CommonButton

CommonButton.defaultProps = {
    variant: 'contain',
    size: 'md',
    radius: 'md',
    disabled: 'false',
}

const CommonButtonWrapper = styled.button<Omit<Props, 'children'>>`
    display: flex;
    padding: 12px 24px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${({ variant }) => {
        switch (variant) {
            case 'contain':
                return css`
                    color: var(--white);
                    background-color: var(--primary-main);
                `
            case 'text':
                return css`
                    color: var(--text-secondary);
                `
            case 'outline':
                return css`
                    color: var(--primary-main);
                    background-color: var(--white);
                    border: 1px solid var(--primary-main);
                `
        }
    }}

    ${({ size }) => {
        switch (size) {
            case 'sm':
                return css`
                    min-width: 1.5rem;
                    min-height: 1.5rem;
                `
            case 'md':
                return css`
                    min-width: 2.5rem;
                    min-height: 2.5rem;
                `
            case 'lg':
                return css`
                    min-width: 3rem;
                    min-height: 3rem;
                `
            default:
                return css`
                    min-width: ${size}px;
                    min-height: ${size}px;
                `
        }
    }}

    border-radius: ${({ radius }) => {
        switch (radius) {
            case 'sm':
                return '0.125rem'
            case 'md':
                return '0.375rem'
            case 'lg':
                return '1.5rem'
            default:
                return radius
        }
    }}
`

import { css, CSSProp, DefaultTheme } from 'styled-components'

type BreakPointValue =
    | 'maximum'
    | 'xl'
    | 'lg'
    | 'md'
    | 'sm'
    | 'xs'
    | 'minimum'
    | number

const up = (value: BreakPointValue): CSSProp => `
    @media only screen and (min-width: ${
        typeof value === 'number' ? value : breakpoints.values[value]
    }px)
  `

const down = (value: BreakPointValue): CSSProp => `
@media only screen and (max-width: ${
    typeof value === 'number' ? value : breakpoints.values[value]
}px)
`

const between = (
    minValue: BreakPointValue,
    maxValue: BreakPointValue
): CSSProp => `
    @media only screen and (min-width: ${
        typeof minValue === 'number' ? minValue : breakpoints.values[minValue]
    }px) and (max-width: ${
    typeof maxValue === 'number' ? maxValue : breakpoints.values[maxValue]
}px)
  `

export const BreakPoint = {
    maximum: 2560,
    xl: 1560,
    lg: 1400,
    md: 1024,
    sm: 768,
    xs: 640,
    minimum: 360,
}

export const breakpoints = {
    values: BreakPoint,
    up,
    down,
    between,
}

export const defaultTheme: DefaultTheme = {
    breakpoints: breakpoints,
}

export const Typography = {
    text_xs: css`
        font-size: var(--text-xs-size);
        line-height: var(--text-xs-line-height);
    `,
    text_sm: css`
        font-size: var(--text-sm-size);
        line-height: var(--text-sm-line-height);
    `,
    text_md: css`
        font-size: var(--text-md-size);
        font-size: var(--text-md-line-height);
    `,
    text_lg: css`
        font-size: var(--text-lg-size);
        font-size: var(--text-lg-line-height);
    `,
    text_xl: css`
        font-size: var(--text-xl-size);
        font-size: var(--text-xl-line-height);
    `,
}

import { CSSProp } from 'styled-components'

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

export const breakpoints = {
    values: {
        maximum: 2560,
        xl: 1560,
        lg: 1400,
        md: 1024,
        sm: 768,
        xs: 640,
        minimum: 360,
    },
    up,
    down,
    between,
}

export const defaultTheme = {
    breakpoints,
}

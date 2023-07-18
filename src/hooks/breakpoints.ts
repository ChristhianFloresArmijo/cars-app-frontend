import { createBreakpoint } from 'react-use'
import config from 'tailwind.config.cjs'

export const breakpoints = {
  ...config.theme.screens,
}

const useBreakpoint = createBreakpoint(breakpoints) as () => keyof typeof breakpoints

export default useBreakpoint

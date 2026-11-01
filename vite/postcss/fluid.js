import {
  FLUID_CALL,
  FLUID_NAME,
  RAMP_PROPERTIES,
  RAMP_STEP_DIGITS,
} from '../constants.js'

function getRampTerm(from, to, property) {
  const step = Number((to - from).toFixed(RAMP_STEP_DIGITS))

  if (step < 0) return `- ${-step} * var(${property})`

  return `+ ${step} * var(${property})`
}

function expandFluid(_, mobile, laptop, desktop) {
  const terms = []

  if (Number(laptop) !== Number(mobile)) {
    terms.push(getRampTerm(mobile, laptop, RAMP_PROPERTIES.mobileToLaptop))
  }

  if (Number(desktop) !== Number(laptop)) {
    terms.push(getRampTerm(laptop, desktop, RAMP_PROPERTIES.laptopToDesktop))
  }

  if (terms.length === 0) return `${mobile}px`

  return `calc(${mobile}px ${terms.join(' ')})`
}

export function fluid() {
  return {
    postcssPlugin: 'futuretech-fluid',
    Declaration(declaration) {
      if (!declaration.value.includes(FLUID_NAME)) return

      declaration.value = declaration.value.replace(FLUID_CALL, expandFluid)

      if (declaration.value.includes(FLUID_NAME)) {
        throw declaration.error(
          'fluid() takes three unitless numbers: the px at 390, 1440 and 1920',
        )
      }
    },
  }
}

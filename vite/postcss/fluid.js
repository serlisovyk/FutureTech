import { FLUID_CALL, FLUID_NAME, RAMP_PROPERTIES } from '../constants.js'

function getRampTerm(from, to, property) {
  return `(${to} - ${from}) * var(${property})`
}

function expandFluid(_, mobile, laptop, desktop) {
  const terms = [`${mobile}px`]

  if (Number(laptop) !== Number(mobile)) {
    terms.push(getRampTerm(mobile, laptop, RAMP_PROPERTIES.mobileToLaptop))
  }

  if (Number(desktop) !== Number(laptop)) {
    terms.push(getRampTerm(laptop, desktop, RAMP_PROPERTIES.laptopToDesktop))
  }

  if (terms.length === 1) return terms[0]

  return `calc(${terms.join(' + ')})`
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

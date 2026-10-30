import { FormField } from '@scripts/components/FormField.js'
import { SELECTORS } from '@scripts/constants.js'

export class ContactFormController {
  #root
  #fields
  #phoneField
  #number
  #country
  #flags
  #status

  constructor(root) {
    this.#root = root
    this.#country = root.querySelector(SELECTORS.formCountry)
    this.#flags = [...root.querySelectorAll(SELECTORS.formFlag)]
    this.#status = root.querySelector(SELECTORS.formStatus)

    const fieldRoots = [...root.querySelectorAll(SELECTORS.formField)]
    const phoneRoot = this.#country.closest(SELECTORS.formField)

    this.#fields = fieldRoots.map((fieldRoot) => new FormField(fieldRoot))
    this.#phoneField = this.#fields[fieldRoots.indexOf(phoneRoot)]
    this.#number = phoneRoot.querySelector(SELECTORS.formControl)
  }

  start() {
    this.#root.noValidate = true

    for (const field of this.#fields) {
      field.start()
    }

    this.#country.addEventListener('change', () => this.#handleCountryChange())
    this.#root.addEventListener('input', () => this.#clearStatus())
    this.#root.addEventListener('submit', (event) => this.#handleSubmit(event))

    this.#renderCountry()
  }

  #handleSubmit(event) {
    event.preventDefault()

    for (const field of this.#fields) {
      field.validate()
    }

    const firstInvalid = this.#fields.find((field) => field.isInvalid)
    if (firstInvalid) {
      firstInvalid.focus()
      return
    }

    this.#complete()
  }

  #handleCountryChange() {
    this.#renderCountry()
    this.#phoneField.revalidate()
  }

  #complete() {
    this.#root.reset()

    for (const field of this.#fields) {
      field.reset()
    }

    this.#renderCountry()
    this.#renderStatus()
  }

  #renderCountry() {
    const selectedOption = this.#country.selectedOptions[0]
    const { country, pattern, error } = selectedOption.dataset

    this.#number.pattern = pattern
    this.#number.dataset.errorPatternMismatch = error

    for (const flag of this.#flags) {
      const isOtherCountry = flag.dataset.formFlag !== country

      flag.hidden = isOtherCountry
    }
  }

  #renderStatus() {
    this.#status.textContent = this.#status.dataset.message
  }

  #clearStatus() {
    this.#status.textContent = ''
  }
}

import { ARIA, INPUT_TYPES, SELECTORS, VALIDITY_ERRORS } from '@constants'

export class FormField {
  #control
  #error
  #isTouched
  #isInvalid

  constructor(root) {
    this.#control = root.querySelector(SELECTORS.formControl)
    this.#error = root.querySelector(SELECTORS.formError)
    this.#isTouched = false
    this.#isInvalid = false
  }

  get isInvalid() {
    return this.#isInvalid
  }

  start() {
    this.#control.addEventListener('blur', () => this.validate())
    this.#control.addEventListener('input', () => this.#handleChange())
    this.#control.addEventListener('change', () => this.#handleChange())
  }

  validate() {
    this.#isTouched = true
    this.#trimValue()
    this.#check()
  }

  revalidate() {
    if (!this.#isTouched) return

    this.#check()
  }

  reset() {
    this.#isTouched = false
    this.#renderValid()
  }

  focus() {
    this.#control.focus()
  }

  #handleChange() {
    if (!this.#isInvalid) return

    this.#check()
  }

  #trimValue() {
    const isCheckbox = this.#control.type === INPUT_TYPES.checkbox
    if (isCheckbox) return

    this.#control.value = this.#control.value.trim()
  }

  #check() {
    if (this.#control.validity.valid) {
      this.#renderValid()
      return
    }

    this.#renderInvalid()
  }

  #getMessage() {
    const { validity, dataset, validationMessage } = this.#control

    const failedKey = Object.keys(VALIDITY_ERRORS).find((key) => validity[key])

    const text = dataset[VALIDITY_ERRORS[failedKey]]

    const message = text || validationMessage

    return message
  }

  #renderInvalid() {
    this.#isInvalid = true

    this.#control.setAttribute(ARIA.invalid, 'true')
    this.#error.textContent = this.#getMessage()
  }

  #renderValid() {
    this.#isInvalid = false

    this.#control.removeAttribute(ARIA.invalid)
    this.#error.textContent = ''
  }
}

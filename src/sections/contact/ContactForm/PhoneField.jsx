import { Icon } from '@components'
import { countries, defaultDialCode } from '@data/countries.js'
import { getPhoneError, getPhonePattern } from '@utils'
import { FormField } from './FormField.jsx'
import './PhoneField.css'

export function PhoneField(props) {
  const {
    id,
    errorId,
    name,
    label,
    placeholder,
    autoComplete,
    countryName,
    countryLabel,
    digitsError,
    errors,
  } = props

  const { valueMissing } = errors

  const initialCountry = countries.find(
    ({ dialCode }) => dialCode === defaultDialCode,
  )
  const initialPattern = getPhonePattern(initialCountry.digits)
  const initialError = getPhoneError(
    digitsError,
    initialCountry.name,
    initialCountry.digits,
  )

  return (
    <FormField id={id} errorId={errorId} label={label}>
      <div className="phone-field">
        <div className="phone-field__code">
          {countries.map(({ code }) => {
            const isHidden = code !== initialCountry.code

            return (
              <div
                key={code}
                className="phone-field__flag"
                hidden={isHidden}
                data-form-flag={code}
              >
                <Icon name={`flag/${code}`} className="phone-field__flag-icon" />
              </div>
            )
          })}

          <Icon name="ui/chevron-down" className="phone-field__chevron" />

          <select
            className="phone-field__select"
            name={countryName}
            aria-label={countryLabel}
            autoComplete="tel-country-code"
            defaultValue={defaultDialCode}
            data-form-country
          >
            {countries.map((country) => {
              const { code, name: countryTitle, dialCode, digits } = country

              return (
                <option
                  key={code}
                  value={dialCode}
                  data-country={code}
                  data-pattern={getPhonePattern(digits)}
                  data-error={getPhoneError(digitsError, countryTitle, digits)}
                >
                  {`${countryTitle} (${dialCode})`}
                </option>
              )
            })}
          </select>
        </div>

        <input
          className="form-field__control phone-field__number"
          id={id}
          name={name}
          type="tel"
          inputMode="tel"
          placeholder={placeholder}
          autoComplete={autoComplete}
          pattern={initialPattern}
          aria-describedby={errorId}
          required
          data-form-control
          data-error-value-missing={valueMissing}
          data-error-pattern-mismatch={initialError}
        />
      </div>
    </FormField>
  )
}

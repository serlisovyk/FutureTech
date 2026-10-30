import { Icon } from '@components'
import { FormError } from './FormError.jsx'
import './ConsentField.css'

export function ConsentField({ id, errorId, name, label, errors }) {
  const { valueMissing } = errors

  return (
    <div className="consent-field" data-form-field>
      <label className="consent-field__label">
        <span className="consent-field__box">
          <input
            className="consent-field__input"
            id={id}
            name={name}
            type="checkbox"
            aria-describedby={errorId}
            required
            data-form-control
            data-error-value-missing={valueMissing}
          />
          <Icon name="ui/check" className="consent-field__check" />
        </span>

        <span>{label}</span>
      </label>

      <FormError id={errorId} />
    </div>
  )
}

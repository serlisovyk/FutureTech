import { FormError } from './FormError.jsx'
import './FormField.css'

export function FormField({ id, errorId, label, children }) {
  return (
    <div className="form-field" data-form-field>
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>

      {children}

      <FormError id={errorId} />
    </div>
  )
}

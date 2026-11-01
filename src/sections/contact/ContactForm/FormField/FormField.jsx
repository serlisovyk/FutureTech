import { FormError } from '../FormError'
import { RequiredMark } from '../RequiredMark'
import './FormField.css'

export function FormField({ id, errorId, label, children }) {
  return (
    <div className="form-field" data-form-field>
      <label className="form-field__label" htmlFor={id}>
        {label}
        <RequiredMark />
      </label>

      {children}

      <FormError id={errorId} />
    </div>
  )
}

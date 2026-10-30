import { FormField } from './FormField.jsx'

export function MessageField(props) {
  const { id, errorId, name, label, placeholder, errors } = props

  const { valueMissing } = errors

  return (
    <FormField id={id} errorId={errorId} label={label}>
      <textarea
        className="form-field__control form-field__control--message"
        id={id}
        name={name}
        placeholder={placeholder}
        aria-describedby={errorId}
        required
        data-form-control
        data-error-value-missing={valueMissing}
      />
    </FormField>
  )
}

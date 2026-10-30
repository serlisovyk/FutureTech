import { FormField } from './FormField.jsx'

export function TextField(props) {
  const {
    id,
    errorId,
    name,
    label,
    placeholder,
    autoComplete,
    errors,
    pattern,
    type = 'text',
  } = props

  const { valueMissing, typeMismatch, patternMismatch } = errors

  return (
    <FormField id={id} errorId={errorId} label={label}>
      <input
        className="form-field__control"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        pattern={pattern}
        aria-describedby={errorId}
        required
        data-form-control
        data-error-value-missing={valueMissing}
        data-error-type-mismatch={typeMismatch}
        data-error-pattern-mismatch={patternMismatch}
      />
    </FormField>
  )
}

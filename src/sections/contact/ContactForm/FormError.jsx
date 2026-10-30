import './FormError.css'

export function FormError({ id }) {
  return <p className="form-error" id={id} data-form-error hidden></p>
}

import { clsx } from 'clsx'
import './FormError.css'

export function FormError({ id, isFloating = false }) {
  const classNames = clsx('form-error', isFloating && 'form-error--floating')

  return <p className={classNames} id={id} data-form-error></p>
}

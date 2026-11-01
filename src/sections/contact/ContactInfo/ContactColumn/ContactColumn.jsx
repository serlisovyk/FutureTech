import './ContactColumn.css'

export function ContactColumn({ title, children }) {
  return (
    <div className="contact-column">
      <h2 className="contact-column__title">{title}</h2>

      {children}
    </div>
  )
}

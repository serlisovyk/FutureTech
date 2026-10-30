export function FeatureCard({ title, text }) {
  return (
    <li className="feature-group__card" data-reveal>
      <h4 className="feature-group__card-title">{title}</h4>
      <p>{text}</p>
    </li>
  )
}

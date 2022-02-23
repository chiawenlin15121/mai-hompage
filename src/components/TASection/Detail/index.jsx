import './index.scss'

export default function index(props) {
  const { iconClass, title, subtitle } = props
  return (
    <div className="detail">
      <div className="icon-wrapper">
      <i className={iconClass} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  )
}

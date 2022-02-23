import './index.scss'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__img-wrapper">
        <img
          className="nav__logo"
          src="https://www.mai.ai/wp-content/uploads/2021/08/MAI_Logo.svg"
          alt="MAI"
        />
      </div>
      <input id="menu__btn" className="menu__btn" type="checkbox" />
      <label className="menu__icon" htmlFor="menu__btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li><a href="/">BodyMap</a></li>
        <li><a href="/">AcuMap</a></li>
        <li><a href="/">DigiTwin</a></li>
        <li><a href="/">Custom Projects</a></li>
      </ul>
    </nav>
  )
}

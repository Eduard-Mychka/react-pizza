import { Link } from 'react-router-dom';
import logoSvg from '../assets/images/others/logo10.svg';

const Header = () => {
  return (
    <Link to="/">
      <div className="header__logo">
        <img src={logoSvg} alt="Pizza logo" />
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </Link>
  )
}

export default Header;

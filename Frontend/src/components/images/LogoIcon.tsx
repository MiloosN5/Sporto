// plugins
import { NavLink } from "react-router-dom"

// assets
import Logo from '../../assets/images/icons/LogoIcon.svg'

const LogoIcon = () => {

  return (
    <NavLink to="/">
      <div
        className="logo"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
    </NavLink>
  );
};

export default LogoIcon;
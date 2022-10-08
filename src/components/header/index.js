import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import TextLink from "../textLink";
import "./styles.scss";
import logo from '../../logo.svg'

const Link = ({item, onClick}) => (
  <TextLink text={item} classes={"header__container__link__text"} handler={() => (onClick(item))}/>
);

const links = ['login', 'todos']

function Index() {
  const navigate = useNavigate();
  const handleLink = (item) => {
    navigate(item);
  };

  return (
    <div className="header__container">
      <div className="header__container__logo__container App-logo">
        <img
          src={logo}
          alt="My logo"
          className="header__container__logo__container__logo"
        />
      </div>
      <div>
        {links.map((item, key) => <Link key={key} item={item} onClick={handleLink}/>)}
      </div>
    </div>
  );
}

export default Index;

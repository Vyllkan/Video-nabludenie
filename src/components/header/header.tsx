import React from "react";
import "./index.css";
import KratosLogo from "../../assets/images/logo-kratos.png";
import UserSvg from "../../assets/images/user.svg";
import PhonePng from "../../assets/images/phone.png";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-container">
            <div className="header-img-container">
              <img src={KratosLogo} alt="icon" className="header-logo" />
            </div>
            <div className="header-phone-section">
              <div className="header-personal-area">
                <img className="fa-user" src={UserSvg} alt="user" />
                <div className="personal-are-title">Личный кабинет</div>
              </div>
              <div className="phone-area">
                <img
                  className="fa-user"
                  src={PhonePng}
                  alt="phone"
                  height={26}
                />
                <a href="tel:+380686543663" className="header-phone">(096)6543667</a>
              </div>
            </div>
            <div className="btn-group">
                <button className="deal-button pointer"><div className="btn-title">Заказать</div> <div>Звонок</div></button>
                <button className="order-button pointer" ><div className="btn-title">Оставить</div> <div>Заявку</div> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
                
      </div>
    </header>
  );
};

export default Header;

import { FC } from "react";
import "./style.css";
import KratosLogo from "../../assets/images/label.png";


const Footer:FC = () => {
    return(
        <div className="footer-container"><img src={KratosLogo} alt="icon" className="header-logo" height={65} width={60} /></div>
    )
}

export default Footer
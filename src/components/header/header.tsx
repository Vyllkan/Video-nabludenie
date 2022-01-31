import React, { useState} from "react";
import "./index.css";
import KratosLogo from "../../assets/images/label.png";
import PhonePng from "../../assets/images/phone.png";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
import OrderDialog from "../orderDialog";
import { useHideOnScroll } from "./hook";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container: {
    padding: '0px',
    height: 'auto',
    minHeight: '550px',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:576px)']: {
      innerHeight: '100%',
      height: '100%',
    },
  },
  paperFullWidth: {
    width: '100%',
  },
  paperWidthSm: {
    maxWidth: 'unset',
  },
  paper: {
    margin: '0px',
    border: '16px',
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);


  const openSentEmail = () => {
    setOpenDialog(true)
  }
  const shouldHide = useHideOnScroll();
  
  const closeSentEmail = () => {
    setOpenDialog(false)
  }
  return (
    <header className={`hide-container ${shouldHide? 'dNone': ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-container">
            <div className="header-img-container">
              <img src={KratosLogo} alt="icon" className="header-logo" height={120} width={115} />
              <div className="header-img-title">Вулкан</div>
            </div>
            <div className="header-phone-section">
              <div className="phone-area">
                <img
                  className="fa-user"
                  src={PhonePng}
                  alt="phone"
                  height={22}
                />
                <a href="tel:+380971867569" className="header-phone">(097)1867569</a>
              </div>
            </div>
            <div className="btn-group">
                <button className="deal-button pointer"><div className="btn-title">Заказать</div> <div>Звонок</div></button>
                <button className="order-button pointer" onClick={openSentEmail}><div className="btn-title">Оставить</div> <div>Заявку</div> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
                
      <Dialog open={openDialog} classes={{
          root: classes.root,
          container: classes.container,
          paper: classes.paper,
        }}
        onClose={closeSentEmail}
        >
        <DialogContent>
          <OrderDialog closeWindow={closeSentEmail}/>
        </DialogContent>
      </Dialog>
      </div>
    </header>
  );
};

export default Header;

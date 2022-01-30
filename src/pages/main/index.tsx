import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";

import Vigil from "../../assets/images/vigil.png";
import Carousel from "../../components/3DSlider";
import Warn1 from "../../assets/images/warn1.jpg";
import Warn2 from "../../assets/images/warn2.jpg";

import "./style.css";
const MainPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [animation, setAnimation] = useState({
    descriptionClass: "opacity",
    imageClass: "opacity",
  });

  const [openDialog, setOpenDialog] = useState(false)

  const checkScroll = (event: any) => {
    if (window.scrollY > 150 && animation.descriptionClass === "opacity") {
      setAnimation({
        ...animation,
        descriptionClass: "description-warn-animation",
        imageClass: "vigil-image-animation",
      });
    }  
  };

  return (
    <div>
      <section className="main-image-container">
        <div className="main-section">
          <div>
            <div className="main-row-1">Защитите свои активы с помощью</div>
            <div className="main-row-2">
              Услуг удаленного наблюдения в реальном времени
            </div>
            <button className="main-row-3">
              Борьба с преступностью сейчас
            </button>
          </div>
        </div>
      </section>

      <section className="description-section">
        <div className="description-title">
          Камеры без слежения показывают только уже совершенные преступления
        </div>
        <div className="description-warn-section">
          <div className={`warn-image ${animation.descriptionClass}`}>
            <img src={Warn1} alt="" width={300} height={150} />
            <img src={Warn2} alt="" width={300} height={150} />
          </div>
          <div className={`description-warn`}>
            Наша компания сочетает в себе высокотехнологичные камеры и передовое
            программное обеспечение с видеонаблюдением в реальном времени,
            осуществляемым виртуальным охранником, чтобы выявлять и
            останавливать преступления по мере их совершения
          </div>
          <div className={`vigil-image ${animation.imageClass}`}>
            <img src={Vigil} alt="" width={300} height={300} />
          </div>
        </div>
      </section>

      <Carousel />
      {/* <Dialog open={openDialog}  >
            <DialogContent></DialogContent>
      </Dialog> */}
    </div>
  );
};

export default MainPage;

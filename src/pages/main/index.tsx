import React, { useEffect, useState } from "react";

import Vigil from "../../assets/images/vigil.png";
import Carousel from "../../components/3DSlider";
import Warn1 from "../../assets/images/warn1.jpg";
import Warn2 from "../../assets/images/warn2.jpg";
import Desc from "../../assets/images/desc.png";
import PriceTable from "../../components/priceList";

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
      <div className="main-image-wrapper">
      <section className="main-image-container">
        <div className="main-section">
          <div>
            <a href="#priceTable" rel="noopener noreferrer">
              <button className="main-row-3">
               Стоимость услуг
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="main-section-mobile">
          <div>
            <a href="#priceTable" rel="noopener noreferrer">
              <button className="main-row-3">
               Стоимость услуг
              </button>
            </a>
          </div>
        </div>
      </div>

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
      <div>
            <img src={Desc} alt="" className="price-image"/>
          </div>
      <div id="priceTable">
        <PriceTable />
      </div>
    </div>
  );
};

export default MainPage;

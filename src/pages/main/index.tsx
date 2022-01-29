import React, { useEffect, useState } from "react";
import "./style.css";
import Vigil from "../../assets/images/vigil.png";
import Carousel from "../../components/3DSlider";

const MainPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
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
          <div className={`description-warn ${animation.descriptionClass}`}>
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
    </div>
  );
};

export default MainPage;

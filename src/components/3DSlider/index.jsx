import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import One from "../../assets/images/sliderImages/one.jpg";
import Two from "../../assets/images/sliderImages/two.jpg";
import Three from "../../assets/images/sliderImages/three.jpg";
import Four from "../../assets/images/sliderImages/four.jpg";
import Five from "../../assets/images/sliderImages/five.jpg";
const data = [
  { key: 1, url: One },
  { key: 2, url: Two },
  { key: 3, url: Three },
  { key: 4, url: Four },
  { key: 5, url: Five },
];
class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      },
    };
    M.Carousel.init(this.Carousel, options);   
  }

  renderThis = () => {
    return data.map((i) => (
      <div key={i.key} className="carousel-item">
        <img src={i.url} alt=""/>
      </div>
    ));
  };

  render() {
    return (
      <div
        ref={(Carousel) => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
        {this.renderThis()}
      </div>
    );
  }
}

export default Carousel;

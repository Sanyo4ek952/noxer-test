import Slider from "react-slick";
import "./bannerSlider.css";
export const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className={"slider-banner"}>
      <div className={"slick-slide-banner"}>
        <img className={"image-banner"} src="/banner.png" alt="" />
      </div>
      <div className={"slick-slide-banner"}>
        <img className={"image-banner"} src="/banner.png" alt="" />
      </div>
      <div className={"slick-slide-banner"}>
        <img className={"image-banner"} src="/banner.png" alt="" />
      </div>
    </Slider>
  );
};

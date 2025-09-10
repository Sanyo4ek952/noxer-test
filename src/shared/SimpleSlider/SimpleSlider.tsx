import Slider from "react-slick";
import { SliderItem } from "../SliderItem/SliderItem.tsx";
import type { Category } from "../../type/type.ts";
import "./simple-slider.css";
interface Props {
  items: Category[];
}
export default function SimpleSlider({ items }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200, // до 1200px
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 700, // до 900px
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600, // до 600px
        settings: {
          slidesToShow: 4,
        },
      },
    ],
    arrows: false,
  };
  return (
    <Slider {...settings} className={"slider"}>
      {items.map((item) => (
        <SliderItem
          className={"slick-slide"}
          key={item.Category_ID}
          categoryId={item.Category_ID}
          categoryImage={item.Category_Image || ""}
          categoryName={item.Category_Name}
        />
      ))}
    </Slider>
  );
}

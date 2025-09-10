import type { Product } from "../../../type/type.ts";
import "./productItem.css";
import { Button } from "../../Button/Button.tsx";
interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  const { images, parameters, Product_Name, marks } = product;
  const mark = marks.map((mark) => mark.Mark_Name);
  return (
    <div className={"product-item"}>
      <div className={"box-sale"}>
        {mark.includes("hit") && <div className={"hit"}>ХИТ</div>}
        {mark.includes("new") && <div className={"new"}>NEW</div>}
        {mark.includes("sale") && <div className={"sale"}>SALE</div>}
        {mark.includes("premium") && <div className={"premium"}>Премиум</div>}
      </div>
      <div className={"product-image-wrapper"}>
        <img
          loading="lazy"
          className={"product-image"}
          src={images?.[0]?.Image_URL}
          alt=""
        />
      </div>
      <div className={"product-price"}>{parameters[0].price} ₽</div>
      <h1 className={"product-name"}>{Product_Name}</h1>
      <Button>Button</Button>
    </div>
  );
};

import { ProductItem } from "../ProductItem/ProductItem.tsx";
import { Button } from "../../Button/Button.tsx";
import "./productsItems.css";
import type { Product } from "../../../type/type.ts";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  loading: boolean;
  filteredProducts: Product[];
  setPage: Dispatch<SetStateAction<number>>;
}
export const ProductsItems = ({
  loading,
  setPage,
  filteredProducts,
}: Props) => {
  const handleNextPage = () => {
    setPage((prev: number) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };
  const handlePrevPage = () => {
    setPage((prev: number) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <div className="products">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="products-items">
            {filteredProducts.map((product) => (
              <ProductItem key={product.Product_ID} product={product} />
            ))}
          </div>
          <div className="pagination">
            <Button onClick={handlePrevPage}>Prev</Button>
            <Button onClick={handleNextPage}>Next</Button>
          </div>
        </>
      )}
    </div>
  );
};

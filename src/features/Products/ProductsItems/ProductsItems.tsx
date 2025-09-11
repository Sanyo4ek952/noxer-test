import { ProductItem } from "../ProductItem/ProductItem.tsx";
import "./productsItems.css";
import type { Product } from "../../../type/type.ts";

interface Props {
  loading?: boolean;
  filteredProducts: Product[];
}
export const ProductsItems = ({ loading, filteredProducts }: Props) => {
  return (
    <div className="products">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-items">
          {filteredProducts.map((product) => (
            <ProductItem key={product.Product_ID} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

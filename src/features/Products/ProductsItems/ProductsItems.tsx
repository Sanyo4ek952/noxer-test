import { ProductItem } from "../ProductItem/ProductItem.tsx";
import "./productsItems.css";
import type { Product } from "../../../type/type.ts";

interface Props {
  loading?: boolean;
  products: Product[];
}
export const ProductsItems = ({ loading, products }: Props) => {
  return (
    <div className="products">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-items">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductItem key={product.Product_ID} product={product} />
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

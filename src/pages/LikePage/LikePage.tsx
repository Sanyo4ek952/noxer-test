import { useEffect, useState } from "react";
import { getProducts } from "../../api/products.ts";
import type { Product } from "../../type/type.ts";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";
import { ProductsItems } from "../../shared/Products/ProductsItems/ProductsItems.tsx";

export const LikePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const allLikes = useSelector((state: RootState) => state.likes);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) =>
        setProducts(
          res.products.filter((product: Product) =>
            allLikes.likedIds.includes(product.Product_ID)
          )
        )
      )
      .finally(() => setLoading(false));
  }, [allLikes]);

  // Фильтруем продукты по лайкам
  const likedProducts = products.filter((product) =>
    allLikes.likedIds.includes(product.Product_ID)
  );
  console.log(products);
  return (
    <div>
      <ProductsItems loading={loading} filteredProducts={likedProducts} />
    </div>
  );
};

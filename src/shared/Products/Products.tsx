import { useEffect, useState } from "react";
import { getProducts } from "../../api/products.ts";
import type {
  Category,
  Product,
  ProductsOnMAinResponseProps,
} from "../../type/type.ts";
import { Input } from "../Input/Input.tsx";
import { getPopularSearchTerms } from "../../utils/getPopularSearchTerms.ts";
import { ProductsItems } from "./ProductsItems/ProductsItems.tsx";
import SimpleSlider from "../SimpleSlider/SimpleSlider.tsx";
import "./products.css";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [popular, setPopular] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>();

  useEffect(() => {
    getProducts({ on_main: true }).then((res: ProductsOnMAinResponseProps) =>
      setAllCategories(res.categories)
    );
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    getProducts({ page })
      .then((res) => {
        setProducts(res.products);
      })
      .finally(() => setLoading(false));
    // setProducts(baseProduct.products);
  }, [page]);

  const filteredProducts = products.filter((product) =>
    product.Product_Name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  useEffect(() => {
    setPopular(getPopularSearchTerms(products, 5));
  }, [products, setPopular]);
  return (
    <div className={"products-wrapper"}>
      <Input
        setSearch={setSearch}
        search={search}
        popular={popular}
        onSelect={(term) => setSearch(term)}
      />

      <div className="slider">
        <SimpleSlider items={allCategories || []} />
      </div>

      <ProductsItems
        setPage={setPage}
        loading={loading}
        filteredProducts={filteredProducts}
      />
    </div>
  );
};

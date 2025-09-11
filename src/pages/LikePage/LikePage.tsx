import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";
import { ProductsItems } from "../../features/Products/ProductsItems/ProductsItems.tsx";
import { useEffect, useState } from "react";
import "./likePage.css";
import { Input } from "../../shared/Input/Input.tsx";

export const LikePage = () => {
  const ProductLikes = useSelector((state: RootState) => state.likes.products);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const filteredProducts = ProductLikes.filter((product) =>
    product.Product_Name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  return (
    <div className={"like-page-wrapper"}>
      <Input
        name="search"
        placeholder={"Найти товары"}
        setSearch={setSearch}
        search={search}
        onSelected={(term) => setSearch(term)}
      />
      <ProductsItems products={filteredProducts} />
    </div>
  );
};

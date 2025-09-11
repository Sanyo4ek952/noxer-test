import { useEffect, useState } from "react";
import { getProducts } from "../../api/products.ts";
import type {
  Category,
  PaginationType,
  Product,
  ProductsOnMAinResponseProps,
} from "../../type/type.ts";
import { Input } from "../../shared/Input/Input.tsx";
import { getPopularSearchTerms } from "../../utils/getPopularSearchTerms.ts";
import { ProductsItems } from "./ProductsItems/ProductsItems.tsx";
import SimpleSlider from "../SimpleSlider/SimpleSlider.tsx";
import "./products.css";
import { Pagination } from "../../shared/Pagination/Pagination.tsx";
import { SearchIcon } from "../../shared/icons/SearchIcon.tsx";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationType>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [popular, setPopular] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>();

  useEffect(() => {
    getProducts({ on_main: true }).then((res: ProductsOnMAinResponseProps) => {
      setAllCategories(res.categories);
    });
    getProducts().then((res: ProductsOnMAinResponseProps) => {
      setPagination(res.pagination);
    });
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
      <div className="search-bar">
        <SearchIcon className="search-icon" width={16} height={16} />
        <Input
          name="search"
          placeholder={"Найти товары"}
          setSearch={setSearch}
          search={search}
          popular={popular}
          onSelected={(term) => setSearch(term)}
        />
      </div>
      <div className="slider">
        <SimpleSlider items={allCategories || []} />
      </div>

      <ProductsItems loading={loading} products={filteredProducts} />
      {pagination && (
        <Pagination
          currentPage={page}
          totalPages={pagination.total_pages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

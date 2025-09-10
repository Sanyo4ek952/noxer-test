import "./breadcrumbs.css";
import { useEffect } from "react";
import { getPopularSearchTerms } from "../../utils/getPopularSearchTerms.ts";
import type { Product } from "../../type/type.ts";

interface Props {
  popular: string[];
  setSearch: (search: string) => void;
  setPopular: (popular: string[]) => void;
  products: Product[];
}
export const Breadcrumbs = ({
  popular,
  products,
  setSearch,
  setPopular,
}: Props) => {
  const handleClickPopular = (term: string) => {
    setSearch(term);
  };
  useEffect(() => {
    setPopular(getPopularSearchTerms(products, 5));
  }, [products, setPopular]);
  return (
    <div className="popular-search">
      <div>Часто ищут:</div>
      {popular.map((term) => (
        <button key={term} onClick={() => handleClickPopular(term)}>
          {term}
        </button>
      ))}
    </div>
  );
};

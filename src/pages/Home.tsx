import { Header } from "../features/Header/Header.tsx";
import { Products } from "../shared/Products/Products.tsx";
import "./home.css";
export const Home = () => {
  return (
    <div className="home">
      <Header />
      <Products />
    </div>
  );
};

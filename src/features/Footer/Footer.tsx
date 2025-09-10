import { Link } from "react-router-dom";
import { HomeIcon } from "../../shared/icons/HomeIcon.tsx";
import { HeartIcon } from "../../shared/icons/likeIcon.tsx";
import { GridIcon } from "../../shared/icons/GridIcon.tsx";
import { ShopIcon } from "../../shared/icons/CartIcon.tsx";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      <Link to={"/"} className={"footer-link"}>
        <HomeIcon />
      </Link>
      <Link className={"footer-link"} to={"/"}>
        <GridIcon />
      </Link>
      <Link className={"footer-link"} to={"/like"}>
        <HeartIcon />
      </Link>
      <Link className={"footer-link"} to={"/"}>
        <ShopIcon />
      </Link>
    </footer>
  );
};

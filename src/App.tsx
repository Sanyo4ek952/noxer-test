import "./App.css";
import { Home } from "./pages/Home.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./features/Footer/Footer.tsx";
import { LikePage } from "./pages/LikePage/LikePage.tsx";

export function App() {
  return (
    <div className={"app"}>
      <div className={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<LikePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

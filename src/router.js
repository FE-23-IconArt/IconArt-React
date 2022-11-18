import { Route, Routes } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import Artikel from "./pages/pageartikel/PageArtikel";
import DetailArtikel from "./pages/pageartikel/detail/DetailArtikel";
import About from "./pages/pageabout/PageAbout";
import Masuk from "./pages/pagemasuk/PageMasuk";
import Daftar from "./pages/pagedaftar/PageDaftar";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel">
        <Route path="" element={<Artikel />} />
        <Route path="detail-artikel/:id" element={<DetailArtikel />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/masuk" element={<Masuk />} />
      <Route path="/daftar" element={<Daftar />} />
    </Routes>
  );
};

export default AppRouters;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavLinkDetail from "./pages/NavLinkDetail";
import NavLinkDetailPeople from "./components/NavLinkDetailPeople";
import ProductDetails from "./pages/ProductDetails";
import CastDetail from "./pages/CastDetail";
import SearchItems from "./pages/SearchItems";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<NavLinkDetail />} />
        <Route path="/tvshows/:id" element={<NavLinkDetail />} />
        <Route path="/people" element={<NavLinkDetailPeople />} />
        <Route path="/movie/:id" element={<ProductDetails />} />
        <Route path="/person/:id/:name" element={<CastDetail />} />
        <Route path="/search/query?/:inputValue" element={<SearchItems />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

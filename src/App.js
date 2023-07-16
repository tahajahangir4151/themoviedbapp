import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavLinkDetail from "./pages/NavLinkDetail";
import { Contexts } from "./contexts/contexts";
import NavLinkDetailPeople from "./components/NavLinkDetailPeople";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [popularPeople, setPopularPeople] = useState([]);
  const [activeData, setActiveData] = useState("");

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    const storedTvShows = localStorage.getItem("tvShows");
    const storedActiveData = localStorage.getItem("activeData");
    const storedPopularPeople = localStorage.getItem("popularPeople");

    if (storedMovies) {
      try {
        setMovies(JSON.parse(storedMovies));
      } catch (error) {
        console.error("Error parsing stored movies:", error);
      }
    }

    if (storedTvShows) {
      try {
        setTvShows(JSON.parse(storedTvShows));
      } catch (error) {
        console.error("Error parsing stored TV shows:", error);
      }
    }

    if (storedActiveData) {
      setActiveData(storedActiveData);
    }

    if (storedPopularPeople) {
      try {
        setPopularPeople(JSON.parse(storedPopularPeople));
      } catch (error) {
        console.error("Error parsing stored popular people:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("tvShows", JSON.stringify(tvShows));
    localStorage.setItem("activeData", activeData);
    localStorage.setItem("popularPeople", JSON.stringify(popularPeople));
  }, [movies, tvShows, activeData, popularPeople]);

  return (
    <Router>
      <Contexts.Provider
        value={{
          movies,
          setMovies,
          tvShows,
          setTvShows,
          activeData,
          setActiveData,
          popularPeople,
          setPopularPeople,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<NavLinkDetail />} />
          <Route path="/tvshows/:id" element={<NavLinkDetail />} />
          <Route path="/people" element={<NavLinkDetailPeople />} />
        </Routes>
        <Footer />
      </Contexts.Provider>
    </Router>
  );
};

export default App;

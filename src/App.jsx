import Footer from "./Components/Layouts/Footer";
import Header from "./Components/Layouts/Header";
import Home from "./Components/Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Movie from "./Components/Pages/Movie";
import Trending from "./Components/Pages/Trending";
import Error from "./Components/Pages/Error";
import Profile from "./Components/Pages/Profile";
import WatchList from "./Components/Pages/WatchList";
import Intro from "./Components/Pages/Intro";
import { useState } from "react";

const App = () => {
  const Location = useLocation();
  const currentPath = Location.pathname;

  const [searchQuery, setSearchQuery] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    language: "",
    popularity: "",
    releaseDate: ""
  });

  const applyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  return (
    <div className="max-h-fit min-h-screen bg-black">
      {currentPath === "/" ? null : (
        <Header filters={appliedFilters} onSearch={setSearchQuery} applyFilters={applyFilters} />
      )}
      <Routes>
        <Route path="/" Component={Intro} />
        <Route path="/home" Component={Home} />
        <Route path="/movie/:id" Component={Movie} />
        <Route
          path="/new"
          element={<Trending filters={appliedFilters} searchQuery={searchQuery} />}
        />
        <Route path="/watchlist" Component={WatchList} />
        <Route path="/profile" Component={Profile} />
        <Route path="/*" Component={Error} />
      </Routes>
      {currentPath === "/" ? null : <Footer />}
    </div>
  );
};

export default App;

import react, { useContext } from "react";
import Home from "./pages/v1/homepage/home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "./pages/v1/modules/movie/movie-details/moviedetails";
import MovieDirectorDetails from "./pages/v1/modules/movie/movie-directordetails/moviedirectordetails";

// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
          <Route path="/" element={<Home />} /> 
           
            <Route path="/details" element={<MovieDetails />} />
            <Route path="/directorsdetails" element={<MovieDirectorDetails/> } />
          </Routes>
        </div>
      </BrowserRouter>
    
    </>
  );
}

export default App;

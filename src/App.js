import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchComponent from "./components/SearchComponent";
import ImageListComponent from "./components/ImageListComponent";
import ImageDetailComponent from "./components/ImageDetailComponent";
import LoadingIndicator from "./components/LoadingIndicator";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=nTtDIRxqwSKfc91RbNYIdbF4VPjMdeeFDy_hx0Z9Jeo`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (query !== "") {
      searchImages();
    }
  }, [query]);
  return (
    <div>
      <SearchComponent setQuery={setQuery} />
      {loading && <LoadingIndicator />}
      {error && (
        <div style={{ color: "red" }}>
          Error loading images. Please try again.
        </div>
      )}
      {!loading && images.length === 0 && <div>No images found.</div>}
      {!loading && images.length > 0 && <ImageListComponent images={images} />}
    </div>
  );
};

const App = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Image Search App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/image/:id" component={ImageDetailComponent} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

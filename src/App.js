import React, { useState, useEffect } from "react";
import AllSearchData from "./components/AllSearchData";
import SearchBar from "./components/SearchBar";
import { getDomains } from "./services";
import "./App.css";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();

    if(value === "") {
      alert("should not be empty")
      return;
    }

    getDomains(value)
    // getDomains()
    //   .then((data) => setData(data))
    //   .catch((error) => {
    //     setError(true);
    //     throw error;
    //   })
    //   .finally(() => setLoading(false));
    // console.log(data);
  };
  return (
    <div>
      <header className="main-header">
        <SearchBar value={value} setValue={setValue} onSearch={onSearch} />
      </header>
      <section className="main-section">
        <AllSearchData />
      </section>
    </div>
  );
};

export default App;

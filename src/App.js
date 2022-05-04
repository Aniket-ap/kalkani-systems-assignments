import React, { useState, useEffect } from "react";
import AllSearchData from "./components/AllSearchData";
import SearchBar from "./components/SearchBar";
import { getDomains } from "./services";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    console.log(value)
    getDomains()
      .then((data) => setData(data))
      .catch((error) => {
        setError(true);
        throw error;
      })
      .finally(() => setLoading(false));
    console.log(data);
  };
  return (
    <div>
      <SearchBar value={value} setValue={setValue} onSearch={onSearch} />
      <div>
        <AllSearchData/>
      </div>
    </div>
  );
};

export default App;

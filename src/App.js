import axios from "axios";
import React, { useState, useEffect } from "react";
import { getDomains } from "./services";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();

    fetch(`https://api.domainsdb.info/v1/domains/search?domain=facebook`)
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      setData(data)
    })
    .catch(err => {
      console.log(err.message)
    })

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
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default App;

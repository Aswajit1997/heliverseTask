/* eslint-disable no-unused-vars */

import { useState } from "react";
import jsonData from "./data.json";
import Pagination from "./pagination";
import "./App.css";

const convertedData = jsonData.map((item) => item);

const App = () => {
  //search functionlity
  const [query, setQuery] = useState("");
  const [data, setData] = useState(convertedData);

  const keys = ["first_name", "last_name", "email", "domain"];
  //search part
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  //filter by domain or grouping part
  const filterByDomain = (dom) => {
    if (dom === "all") {
      setData(jsonData);
    } else {
      const filteredData = convertedData.filter((item) => {
        return item.domain.toLowerCase() === dom;
      });
      setData(filteredData);
    }
  };
  return (
    <div>
      <div className="header_container">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <div className="buttons">
          <button onClick={() => filterByDomain("all")}>All</button>
          <button onClick={() => filterByDomain("sales")}>Sales</button>
          <button onClick={() => filterByDomain("ui designing")}>
            Ui Designining
          </button>
          <button onClick={() => filterByDomain("management")}>
            Management
          </button>
          <button onClick={() => filterByDomain("marketing")}>Marketing</button>
          <button onClick={() => filterByDomain("finance")}>Finance</button>
        </div>
      </div>

      <Pagination data={search(data)} itemsPerPage={20} />
    </div>
  );
};

export default App;

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]); // State to store API data
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  const getData = async () => {
    setIsLoading(true); // Set loading indicator to true
    setError(null); // Clear any previous error

    try {
      const response = await axios.get("http://localhost:5000/api/scans");
      console.log({ response });
      setData(response.data.data); // Update data state with response data
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state for handling
    } finally {
      setIsLoading(false); // Set loading indicator to false (even on errors)
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error: {error.message}</p>}
        {data.length > 0 && (
          <div>
            {/* Render data here (replace with your desired data structure) */}
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  {/* Access data properties using item.property */}
                  {item.name} - {item.tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

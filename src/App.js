import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import BrowserRouter as Router
import Routes from "./Routes"; // This should be a separate component for your routes
import { fetchCreators } from './crud/apis';

function App() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCreators = async () => {
      const fetchedCreators = await fetchCreators();
      if (fetchedCreators) {
          setCreators(fetchedCreators);
      }
      setLoading(false);
  };

  loadCreators();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header section */}
        <div className="header_bg">
          <h1>CREATORVERSE</h1>

          <div className="button-class">
            <Link to="/">
              <button>View All Creators</button>
            </Link>
            <Link to="/add-creator">
              <button>Add A Creator</button>
            </Link>
          </div>
        </div>

        {loading ? <p>Loading...</p> : <Routes creators={creators} />}
      </div>
    </Router>
  );
}

export default App;

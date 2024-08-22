import Card from "../components/Card";
import "./showCreators.css";
import React, { useState, useEffect } from "react";
import AddCreator from "./AddCreator";
import { fetchCreators } from '../crud/apis';

const ShowCreators = ({ creators }) => {
  const [allCreators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showaAll, setShowAll] = useState(true);

  useEffect(() => {
    const loadCreators = async () => {
      const fetchedCreators = await fetchCreators();
      if (fetchedCreators) {
        setCreators(fetchedCreators);
      }
      setLoading(false);
    };

    loadCreators();
  }, [showaAll]);

  return loading ? (
    <p>Loading...</p>
  ) : showaAll == true ? (
    <div className="cards-container">
      {allCreators.map((data, index) => (
        <Card
          key={index}
          name={data.name}
          description={data.description}
          url={data.url}
          imageURL={data.imageURL}
          setShowAll={setShowAll}
          id = {data.id}
        />
      ))}
    </div>
  ) : (
    <>
      <AddCreator 
        creator={showaAll} 
        setShowAll={setShowAll} 
      />
    </>
  );
};

export default ShowCreators;

import React, { useState, useEffect } from "react";
import "./ViewCreator.css";
import { useParams } from "react-router-dom";
import { fetchSingleCreator } from "../crud/apis";

const ViewCreator = () => {
  const [loading, setLoading] = useState(true);
  const [rowId, setRowId] = useState();
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadCreators = async () => {
      const fetchedCreators = await fetchSingleCreator(rowId);
      if (fetchedCreators) {
        setData(fetchedCreators[0]);
      }
      setLoading(false);
    };

    loadCreators();
    setRowId(id);
  }, [rowId]);

  return (
    data && (
      <div className="container-outer">
        <div class="ViewCreator">
          <section class="creator-image">
            <img src={data.imageURL} alt="hisname" />
          </section>

          <section class="creator-info">
            <h2>{data.name}</h2>
            <p>
              {data.description}
            </p>
          </section>

          {/* <section class="modify-creator">
            <a href="/edit/487">
              <button>Edit</button>
            </a>
            <button class="delete-button">Delete</button>
          </section> */}

        </div>
      </div>
    )
  );
};

export default ViewCreator;

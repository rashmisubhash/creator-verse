import React, { useState, useEffect } from "react";
import supabase from "../client.js";
import { useNavigate } from "react-router-dom";
import { addCreator, deleteCreator, updateCreator } from "../crud/apis";
import Modal from "react-modal";

const AddCreator = ({ creator, setShowAll }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    url: {
      link_twitter: "",
      link_youtube: "",
      link_instagram: "",
    },
    description: "",
    imageURL: "",
  });
  const [isError, setError] = useState(true);
  const [errsObj, setErrsObj] = useState({
    name: false,
    link_twitter: false,
    link_youtube: false,
    link_instagram: false,
    description: false,
  });

  const [isDel, setDel] = useState(false);

  const handleDeleteClick = () => {
    setDel(true);
  };

  const handleCloseModal = () => {
    setDel(false);
  };

  const handleConfirmDelete = () => {
    onDel(); // Call your delete function here
    setDel(false); // Close the modal after deletion
  };

  useEffect(() => {
    if (creator) {
      setData(creator);
    }
  }, [creator]);

  const onDel = async () => {
    const fetchedCreators = await deleteCreator(data.id);
    setShowAll(true);
  };

  const onSubmit = async () => {
    const hasError = Object.entries(errsObj)
    .filter(([key]) => key !== 'imageurl')
    .some(([, value]) => value === true);

    if (!hasError) {
      const fetchedCreators = await addCreator(data);
      if (fetchedCreators) {
        navigate("/");
      }
    }
  };

  const onEdit = async () => {
    const temp = {...data}
    const id = temp.id
    delete temp.id
    const hasError = Object.entries(errsObj)
    .filter(([key]) => key !== 'imageurl')
    .some(([, value]) => value === true);

    if (!hasError) {
      const fetchedCreators = await updateCreator(id, data);
      setShowAll(true);
    }
  };

  return (
    <div className="add-creator">
      {/* Input Name */}
      <label for="textInput">Name</label>
      <input
        type="text"
        name="text"
        id="textInput"
        aria-label="Text"
        // aria-invalid= {nameErr}
        defaultValue={data.name}
        value={data.name}
        onChange={(e) => {
          setData({
            ...data,
            name: e.target.value,
          });
          const trimmedValue = e.target.value.trim();
          if (trimmedValue === "") {
            setErrsObj((prevErrs) => ({ ...prevErrs, name: true }));
            setError(true);
          } else {
            setErrsObj((prevErrs) => ({ ...prevErrs, name: false }));
            setError(false);
          }
        }}
      />
      {errsObj.name ? (
        <small id="invalid-helper">Please provide a valid value</small>
      ) : (
        ""
      )}

      {/* Image URL */}
      <label for="imageInput">Image</label>
      <p className="info-text">
        Provide a link to an image of your creator. Be sure to include the
        http://
      </p>
      <input
        type="url"
        name="url"
        id="imageInput"
        placeholder="Url"
        aria-label="Url"
        value={data.imageURL}
        onChange={(e) => {
          setData({
            ...data,
            imageURL: e.target.value,
          });
        }}
      />

      {/* Description */}
      <label for="descInput">Description</label>
      <p className="info-text">
        Provide a description of the creator. Who are they? What makes them
        interesting?
      </p>
      <textarea
        id="descInput"
        name="description"
        placeholder="Write a professional short bio..."
        aria-label="Professional short bio"
        value={data.description}
        onChange={(e) => {
          setData({
            ...data,
            description: e.target.value,
          });
          const trimmedValue = e.target.value.trim();
          if (trimmedValue === "") {
            setErrsObj((prevErrs) => ({ ...prevErrs, description: true }));
            setError(true);
          } else {
            setErrsObj((prevErrs) => ({ ...prevErrs, description: false }));
            setError(false);
          }
        }}
      ></textarea>
      {errsObj.description ? (
        <small id="invalid-helper">Please provide a valid value</small>
      ) : (
        ""
      )}

      <h3>Social Media Links</h3>
      <p className="info-text">
        Provide at least one of the creator's social media links.
      </p>

      {/* Youtube */}
      <label for="Youtube">
        <img
          src="https://img.icons8.com/color/48/000000/youtube-play.png"
          alt="Youtube"
        />
        Youtube
      </label>
      <p className="info-text">The creator's YouTube handle (without the @)</p>
      <input
        type="text"
        name="text"
        id="Youtube"
        aria-label="Text"
        value={data.url.link_youtube}
        onChange={(e) => {
          setData({
            ...data,
            url: {
              ...data.url,
              link_youtube: e.target.value,
            },
          });

          const trimmedValue = e.target.value.trim();
          if (trimmedValue === "") {
            setErrsObj((prevErrs) => ({ ...prevErrs, link_youtube: true }));
            setError(true);
          } else {
            setErrsObj((prevErrs) => ({ ...prevErrs, link_youtube: false }));
            setError(false);
          }
        }}
      />
      {errsObj.link_youtube ? (
        <small id="invalid-helper">Please provide a valid value</small>
      ) : (
        ""
      )}

      {/* Twitter */}
      <label for="Twitter">
        <img
          src="https://img.icons8.com/color/48/000000/twitter--v1.png"
          alt="Twitter"
        />
        Twitter
      </label>
      <p className="info-text">The creator's Twitter handle (without the @)</p>
      <input
        type="text"
        name="text"
        id="Twitter"
        aria-label="Text"
        value={data.url.link_twitter}
        onChange={(e) => {
          setData({
            ...data,
            url: {
              ...data.url,
              link_twitter: e.target.value,
            },
          });

          const trimmedValue = e.target.value.trim();
          if (trimmedValue === "") {
            setErrsObj((prevErrs) => ({ ...prevErrs, link_twitter: true }));
            setError(true);
          } else {
            setErrsObj((prevErrs) => ({ ...prevErrs, link_twitter: false }));
            setError(false);
          }
        }}
      />
      {errsObj.link_twitter ? (
        <small id="invalid-helper">Please provide a valid value</small>
      ) : (
        ""
      )}

      {/* Insta */}
      <label for="insta">
        <img
          src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
          alt="Instagram"
        />
        Instagram
      </label>
      <p className="info-text">
        The creator's Instagram handle (without the @)
      </p>
      <input
        type="text"
        name="text"
        id="insta"
        aria-label="Text"
        value={data.url.link_instagram}
        onChange={(e) => {
          setData({
            ...data,
            url: {
              ...data.url,
              link_instagram: e.target.value,
            },
          });

          const trimmedValue = e.target.value.trim();
          if (trimmedValue === "") {
            setErrsObj((prevErrs) => ({ ...prevErrs, link_instagram: true }));
            setError(true);
          } else {
            setErrsObj((prevErrs) => ({ ...prevErrs, link_instagram: false }));
            setError(false);
          }
        }}
      />
      {errsObj.link_instagram ? (
        <small id="invalid-helper">Please provide a valid value</small>
      ) : (
        ""
      )}

      <div className="btn-sub">
        {data.id && (
          <button
            className="del-btn"
            // disabled={errsObj.name || errsObj.description || errsObj.link_instagram || errsObj.link_twitter || errsObj.link_youtube}
            onClick={() => setDel(true)}
          >
            Delete
          </button>
        )}

        <Modal
          isOpen={isDel}
          // appElement={document.getElementById('root')}
          onRequestClose={handleCloseModal}
          contentLabel="Delete Confirmation"
          className="modal-del"
        >
          <h3>⚠️ WAIT!!!! ⚠️</h3>
          <p>Are you sure you want to delete {data.name}?</p>
          <br />
          <button onClick={handleConfirmDelete}>YES! Totally sure</button>
          <button onClick={handleCloseModal}>Nah, never mind</button>
        </Modal>

        <button
          disabled={
            errsObj.name ||
            errsObj.description ||
            errsObj.link_instagram ||
            errsObj.link_twitter ||
            errsObj.link_youtube
          }
          onClick={() => creator ? onEdit() : onSubmit()}
        >
          {creator ? "Edit": "Submit"}
        </button>
        <button
          className="del-btn"
          onClick={() => {
            setShowAll && setShowAll(true);
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddCreator;

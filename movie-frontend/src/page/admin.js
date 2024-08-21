// src/components/AddMovie.js
import React, { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imgBanner, setImgBanner] = useState(null);
  const [imgAvata, setImgAvata] = useState(null);

  const defaule = ()=>{
    setTitle("");
    setYear("");
    setDescription("");
    setVideoUrl("");
    setImgAvata(null);
    setImgBanner(null);
  }

  const handleAddMovie = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("year", year);
    formData.append("description", description);
    formData.append("videoUrl", videoUrl);
    formData.append("imgBanner", imgBanner);
    formData.append("imgAvata", imgAvata);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/movies/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      defaule();
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <input
        type="file"
        placeholder="Banner URL"
        onChange={(e) => setImgBanner(e.target.files[0])}
      />
      <input
        type="file"
        placeholder="Avatar URL"
        onChange={(e) => setImgAvata(e.target.files[0])}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;

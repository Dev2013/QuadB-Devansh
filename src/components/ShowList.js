

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../services/apiService';
import '../styles/ShowList.css'; // Import the CSS file for styling

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShows();
      setShows(data);
    };
    fetchData();
  }, []);

  return (
    <div className="show-list-container">
      <h1 className="show-list-title">Show List</h1>
      <div className="show-list">
        {shows.map(show => (
          <Link to={`/show/${show.show.id}`} key={show.show.id} className="show-card">
            <img src={show.show.image ? show.show.image.medium : 'https://via.placeholder.com/150'} alt={show.show.name} className="show-image" />
            <div className="show-details">
              <h3 className="show-name">{show.show.name}</h3>
              <h3 className="show-name">{show.show.genres.join("-")}</h3>
              <h3 className="show-name">{show.show.type}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowList;

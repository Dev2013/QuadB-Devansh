

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ShowDetail.css';
import { fetchShows } from '../services/apiService';
import BookingForm from './BookingForm'; 

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      const shows = await fetchShows();
      const selectedShow = shows.find(item => item.show.id.toString() === id);
      setShow(selectedShow ? selectedShow.show : null);
    };
    fetchData();
  }, [id]);

  const handleBookNow = () => {
    setShowBookingForm(true); 
  };

  return (
    <div className="show-detail-container">
      {show ? (
        <div className="show-details">
          <h2 className="show-name">{show.name}</h2>
          <p className="show-summary">{show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'No summary available'}</p>
          <button onClick={handleBookNow} className="btn-book">Book Ticket</button>
          {showBookingForm && <BookingForm showName={show.name} />} {/* Render BookingForm if showBookingForm is true */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetail;

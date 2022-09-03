import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  let [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    console.log('useEffect active');
    fetchImages();
  },[]);

  const fetchImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryArray(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong');
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;

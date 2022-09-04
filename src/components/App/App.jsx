import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
//After refactoring list into GalleryList.jsx
//uncomment below import
import GalleryList from '../GalleryList/GalleryList';


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
        {/* Pass props related to like button inside the <GalleryList/> call */}
        <GalleryList galleryArray={galleryArray}/>
        

        
      </div>
    );
}

export default App;

import React from 'react';
import './GalleryList.css';

function GalleryList({galleryArray}) {
    return(
        <ul>
        {
          galleryArray.map(item => {
            return(
                //take <li></li> below and use it for galleryitem.jsx
              <li key={item.id}>id: {item.id} description: {item.description}
                  <img src={item.path}/>
              </li>
            )
          })

        }


      </ul>
    )
}

export default GalleryList;
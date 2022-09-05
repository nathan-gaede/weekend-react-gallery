import React from 'react';
import './GalleryList.css';


function galleryList({galleryArray}) {
    return(
        <ul>
        {
          galleryArray.map(item => {
            return(
                //take <li></li> below and use it for galleryitem.jsx
            //   
            <div>
                <GalleryItem key={item.id} item={item} />
            </div>
            )
          })

        }


      </ul>
    )
}

export default galleryList;
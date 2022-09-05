import React from 'react';
import './GalleryList.css';

//using {item} to bring in gallery data
//export out 
//import this into GalleryList.jsx return replacing the list item.

//return will have item={item} (in galleryList.jsx)
//replaces li in gallerylist.jsx
//<GalleryItem key={item.id} item={item}/>

function GalleryItem({item}) {
    return(
        
            <ul>
            {/* //take <li></li> below and use it for galleryitem.jsx */}
                  <li key={item.id}>id: {item.id} description: {item.description}
                      <img className="Image-main"src={item.path}/>
                  </li>
            </ul>
        )
    }

export default GalleryItem;
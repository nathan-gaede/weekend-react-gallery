import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({galleryArray}) {
       
    return(
        
        
        <ul>
        {
          galleryArray.map(item => {
            
            //take <li></li> below and use it for galleryitem.jsx  
            // <li key={item.id}>id: {item.id} description: {item.description}
            // <img className="Image-main"src={item.path}/></li>      
               return <GalleryItem key={item.id} item={item} />
               
          })
          
        }
        </ul>
        
        
    )
}


export default GalleryList;

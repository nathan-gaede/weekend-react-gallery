import React from 'react';
import { useState } from 'react';


//using {item} to bring in gallery data
//export out 
//import this into GalleryList.jsx return replacing the list item.

//return will have item={item} (in galleryList.jsx)
//replaces li in gallerylist.jsx
//<GalleryItem key={item.id} item={item}/>

function GalleryItem({item, updateLikes}) {
    const [toggle, setToggle] = useState( false );
    
    return(
 
            // {/* //take <li></li> below and use it for galleryitem.jsx */}
                  <li key={item.id}>
                      {/* <img className="Image-main"src={item.path}/> */}
                  <br />
                  <br />
                  <button onClick= {() => setToggle(!toggle)}>Toggle</button>
                  <button onClick= {() => updateLikes(item.id)}>Like</button>
                  number of likes: ({item.likes})
                  <br />
                  <br />
                  
                  {item.id} {toggle ? (
                    <span>{item.description}</span>
                ): (
                    <span><img className="Image-main"src={item.path}/></span>
                )}
                </li>
        );
    }
       
    

export default GalleryItem;
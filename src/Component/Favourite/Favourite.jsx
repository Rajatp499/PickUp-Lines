import React, { useEffect, useState } from "react";
import "./Favourite.css";
import { useSelector, useDispatch } from "react-redux";
import "../Category/Quote.css";

//icons
import { GoHeartFill } from "react-icons/go";
import { MdGTranslate } from "react-icons/md";
// import { FaShare } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";


//data
import data from "../Data";
// import { selectItems } from "../../store/slices/Slices";
import { disselectItems } from "../../store/slices/Slices";

const Favourite = () => {
  
  const favourites = useSelector((state) => state.selectedItems)
  const dispatch = useDispatch();


  //dislie function
  const dislike =(item) =>{

    dispatch(disselectItems(item))
  }

    //MouseMOve
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    document.addEventListener('mousemove', (event) =>{
      const x = event.clientX+window.pageXOffset;
      const y = event.clientY+window.pageYOffset;
      setCoordinates({x,y});
  
    })

  //Copy Text Button
  const copyText = (item) =>{
    navigator.clipboard.writeText(item.quote);
    console.log(coordinates)
    document.querySelector('.copied-container').style.display = 'block';
    document.querySelector('.copied-container').style.top = `${coordinates.y+26}px`;
    document.querySelector('.copied-container').style.left = `${coordinates.x-80}px`;

    setTimeout(() => {
      document.querySelector('.copied-container').style.display = 'none';
    }, 1400);

  }
  


  return (
    <div>
      <div className="copied-container">Copied!</div>
      {favourites.filter((item, index, array) => array.indexOf(item) === index).map((item) =>
        // favourites.includes(item.id) ? (
          <div className="quote-card" key={item.id}>
            {item.quote}
            <div className="quote-card-feature">
              <button className="quote-card-button" onClick={() => dislike(item)}>
                <GoHeartFill className="quote-card-icon" />
              </button>
              <button
                  className="quote-card-button">
                  <MdGTranslate className="quote-card-icon" />
                </button>
                <button className="quote-card-button" onClick={() => copyText(item)}>
                  <MdOutlineContentCopy className="quote-card-icon" />

                </button>
            </div>
          </div>
        // ) : null
      )}
    </div>
  );
};

export default Favourite;

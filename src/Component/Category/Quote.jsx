import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Quote.css";
import { useDispatch,useSelector } from "react-redux";
import { selectItems, disselectItems } from "../../store/slices/Slices";

//Quote
import data from "../Data";

//icons
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { MdGTranslate } from "react-icons/md";
// import { FaShare } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";


//Translation
import { useTranslation } from "react-i18next";
import i18n from "../../Translations/i18n";

const Quote = () => {

  const[ favourites, setFavourites ]= useState(useSelector((state) => state.selectedItems))
  // console.log(favourites)
  // const [selectedItems, setSelectedItems] = useState([...favourites ]);
  
  const [languageItem, setLanguageItem] = useState([]);

  const dispatch = useDispatch();

  //Translation
  const { t } = useTranslation();
  const changeLanguages = (id) => {
    const isSelected = languageItem.includes(id);

    //Add id if not in seleceItems and removes id if already present
    setLanguageItem((prevLanguageItem) =>
      isSelected
        ? prevLanguageItem.filter((i) => i !== id)
        : [...prevLanguageItem, id]
    );
    // console.log(languageItem);
    i18n.changeLanguage("np");
  };



  //Like function
  const like = (item) => {
    

    setFavourites((prevfavourites) =>{
      const isSelected = prevfavourites.includes(item);

      if (isSelected) {
        // If item is already in favourites, remove it
        dispatch(disselectItems(item))
    return prevfavourites.filter((i) => i !== item);
  } else {
    // If item is not in favourites, add it and dispatch the action
    dispatch(selectItems(item));
    return [...prevfavourites, item];
  }
    });
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





  const location = useLocation();
  const category = location.state.p;
  const color = location.state.c;

  return (
    <div>
            <div className="copied-container">Copied!</div>
      <div className="category" style={{ backgroundColor: color }}>
        {category}
      </div>
      {data.map((q) => {
        if (q.category == category)
          return (
            <div className="quote-card" key={q.id}>
              " {languageItem.includes(q.id) ? t(q.quote) : q.quote} "
              {/* <div className="quote-card-author">~{q.author}</div> */}
              <div className="quote-card-feature">
                <button
                  className="quote-card-button"
                  onClick={() => like(q)}
                >
                  {/* To Change the like icon based on wheteher id is present in selectedItems or not */}
                  {favourites.includes(q) ? (
                    <GoHeartFill className="quote-card-icon" />
                  ) : (
                    <GoHeart className="quote-card-icon" />
                  )}
                </button>
                <button
                  className="quote-card-button"
                  onClick={() => changeLanguages(q.id)}
                >
                  <MdGTranslate className="quote-card-icon" />
                </button>
                <button className="quote-card-button" onClick={() => copyText(q)}>
                  <MdOutlineContentCopy className="quote-card-icon" />
                </button>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Quote;
// export {selectedItems, setSelectedItems, like}

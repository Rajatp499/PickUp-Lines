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
import { FaShare } from "react-icons/fa6";

//Translation
import { useTranslation } from "react-i18next";
import i18n from "../../Translations/i18n";

const Quote = () => {

  const[ favourites, setFavourites ]= useState(useSelector((state) => state.selectedItems))
  console.log(favourites)
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





  const location = useLocation();
  const category = location.state.p;
  const color = location.state.c;

  return (
    <div>
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
                <button className="quote-card-button">
                  <FaShare className="quote-card-icon" />
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

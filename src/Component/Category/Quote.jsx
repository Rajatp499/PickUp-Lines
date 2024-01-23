import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Quote.css";
import { useDispatch,useSelector } from "react-redux";
import { setAllSelectedItems } from "../../store/slices/Slices";

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
  const [selectedItems, setSelectedItems] = useState([]);
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

  // const [favourites, setFavourites] = useState(useSelector((state) =>  state.selectedItems));
  // const favourites = useSelector((state) => state.selectedItems);

  //Like function
  const like = (id) => {
    
    //Add id if not in seleceItems and removes id if already present
    setSelectedItems((prevSelectedItems) =>{
      const isSelected = prevSelectedItems.includes(id);
      
      return isSelected
      ? prevSelectedItems.filter((i) => i !== id)
      : [...prevSelectedItems, id]
      
      
    });
    dispatch(setAllSelectedItems(selectedItems))
  };
  console.log(selectedItems);

  // useEffect(() => {
  //   dispatch(setAllSelectedItems(selectedItems))
  //   // console.log(selectedItems);
  // }, [ selectedItems])



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
                  onClick={() => like(q.id)}
                >
                  {/* To Change the like icon based on wheteher id is present in selectedItems or not */}
                  {selectedItems.includes(q.id) ? (
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

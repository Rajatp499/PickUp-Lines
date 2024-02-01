import React, { useEffect, useState } from "react";
import "./Favourite.css";
import { useSelector, useDispatch } from "react-redux";
import "../Category/Quote.css";

//icons
import { GoHeartFill } from "react-icons/go";
import { MdGTranslate } from "react-icons/md";
import { FaShare } from "react-icons/fa6";

//data
import data from "../Data";
// import { selectItems } from "../../store/slices/Slices";
import { disselectItems } from "../../store/slices/Slices";

const Favourite = () => {
  
  const favourites = useSelector((state) => state.selectedItems)
  const dispatch = useDispatch();
  // console.log(favourites)
  // const [uniqueIds, setUniqueIds] = useState(favourites.filter((item, index, array) => array.indexOf(item) === index));
  // console.log(uniqueIds);

  //dislie function
  const dislike =(item) =>{
    // console.log(id);
    // setUniqueIds(uniqueIds.filter(item => item !== id));

    dispatch(disselectItems(item))
  }
  // console.log("unique ids =  ", uniqueIds)


  return (
    <div>
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
                <button className="quote-card-button">
                  <FaShare className="quote-card-icon" />
                </button>
            </div>
          </div>
        // ) : null
      )}
    </div>
  );
};

export default Favourite;

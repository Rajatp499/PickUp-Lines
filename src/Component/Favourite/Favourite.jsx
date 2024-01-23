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
import { setAllSelectedItems } from "../../store/slices/Slices";

const Favourite = () => {
  // const [favourites, setFavourites] = useState(useSelector((state) => {
  //   return state.selectedItems;
  // }));

  const favourites = useSelector((state) => state.selectedItems);
  // console.log(favourites);

  const [uniqueIds, setUniqueIds] = useState(favourites.filter((id, index, array) => array.indexOf(id) === index));
  // Use filter and indexOf to select IDs that occur only once
  const dispatch = useDispatch();
  
  //dislike function
  const dislike =(id) =>{
  
    const newArray = uniqueIds.filter((i) => i !== id);
    setUniqueIds(newArray)
  }
  console.log(uniqueIds);
  
  useEffect(()=>{
    dispatch(setAllSelectedItems(uniqueIds))

  },[uniqueIds])


  return (
    <div>
      {data.map((item) =>
        uniqueIds.includes(item.id) ? (
          <div className="quote-card" key={item.id}>
            {item.quote}
            <div className="quote-card-feature">
              <button className="quote-card-button" onClick={() => dislike(item.id)}>
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
        ) : null
      )}
    </div>
  );
};

export default Favourite;

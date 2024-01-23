import React from "react";
import "./Home.css";
//Data
import data from "../Data";
import { category } from "../Data";
// icons
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

//click

const Home = () => {




  return (
    <div className="Home">
      <div className="body-section">
        {category.map((cat) => (
          <NavLink key={cat.id} to="quote" state={{ p: cat.category, c: cat.color }}>
            <div className="card" style={{ backgroundColor: cat.color }}>
              <div className="categories">{cat.category}</div>
              <div className="categories-icon">{cat.icon}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useState,useEffect } from 'react'
import "./Random.css";
import data from "../Data";

import quote from "../Category/Quote";




const Random = (props) => {


    //generate 10 random number between 0 to 30
    const [randomObjects, setRandomObjects] = useState([]);

    useEffect(() => {
        generateRandomObjects();
      }, []);

      const generateRandomObjects = () => {
        // Shuffle the array
        const shuffledArray = shuffleArray(data);
    
        // Take the first 10 elements
        const selectedObjects = shuffledArray.slice(0, 10);
    
        setRandomObjects(selectedObjects);
      };

      const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };

    //   console.log(randomObjects);


    
    
  return (
    <>
        
        <div className='random'>
            <div className='category' style={{backgroundColor:'#92C7CF'}}>
                Random Quotes
            </div>{
               randomObjects.map((q) =>
               <div className='quote-card' key={q.id}>
                "{q.quote}"
                <div className="quote-card-feature">
                
              </div>
               </div>
               )

         }


        </div>
    {
    }
    </>
  )
}

export default Random
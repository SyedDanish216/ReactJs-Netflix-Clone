import React from "react";
import "./Featured.css"

const Featured = ({type}) => {
  return (
    <div className="featured w-100">
    {type && (
      <div className="category">
      <span>{type==="movie"?"Movies":"Series"}</span>
      <select name="genre" id="genre">
      <option>Genre</option>
      <option value="adventure">Adventure</option>
      <option>Horror</option>
      <option>SkyFy</option>
      <option>Popular</option>
      <option>Trending</option>
      <option>Romantic</option>
    
      </select>
      </div>
    )}
      <img
        src="https://wallpaperaccess.com/full/5954.jpg"
       alt=""
      />
      <div className="info" >

      <span className="desc">
      Avengers Infinity Wars:Infinity War held its world premiere on April 23, 2018, in Los Angeles, and was released in the United States on April 27. Brolin's performance was praised, as was the emotional weight of the story, the visual effects, and action sequences, but the film was criticized for relying on previous MCU films for its story.
      </span>
      <div style={{flexDirection:"row",padding:"10px",justifyContent:"center",alignItems:"center"}}>
      <button type="button" className="btn btn-light" style={{width:"80px"}}>Play</button>
      <button type="button" className="btn btn-light mx-sm-2" style={{marginLeft:"5px",width:"80px"}}>Info</button>
      </div>
      </div>
    
    </div>
  );
};

export default Featured;

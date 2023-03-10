import React from "react";
import Images from "./Images";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
        <Images imgsrc={props.imgsrc}/>
          {/* <img src={props.imgsrc} alt="mypic" className="card_img" /> */}
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

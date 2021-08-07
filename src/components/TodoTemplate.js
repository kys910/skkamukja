import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <div className="componentTextFieldsMobileText"></div>
        <input className="placeholder" placeholder="검색" />
        <img
          className="record"
          src="https://static.overlay-tech.com/assets/e3df4fcc-942b-4dfa-aa7d-5883c2ed91ba.svg"
        />
      </div>
      <div className="content">{children}</div>
      <div className="searchBtn">
        <img
          className="sBtn"
          src={
            "https://static.overlay-tech.com/assets/260b16ce-2f47-4d8b-9cb2-79ea3dc58b75.svg"
          }
        />
      </div>
      <div className="home">
        <img
          className="homeImg"
          src={
            "https://static.overlay-tech.com/assets/9a06893e-7bb7-4566-86bc-91698ec89e4b.svg"
          }
        />
      </div>
    </div>
  );
};

export default TodoTemplate;

/*
<div className="content">{children}</div>
*/

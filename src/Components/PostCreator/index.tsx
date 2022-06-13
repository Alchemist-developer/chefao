import React from "react";
import "./style.css";
import Icon from "/src/assets/icon.png";

const PostCreator: React.FC = () => {
  return (
    <div className="containerProfile">
      <div className="userContent">
        <img src={Icon} alt="" />
        <form>
          <textarea name="" id=""></textarea>
          <button>publicar</button>
        </form>
      </div>
    </div>
  );
};

export default PostCreator;

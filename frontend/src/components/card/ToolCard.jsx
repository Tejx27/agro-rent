import React from "react";
import "./ToolCard.css";

const ToolCard = ({ tool, index }) => {
  return (
    <div
      className="card-content"
      key={tool._id}
      style={{ marginLeft: index % 2 !== 0 ? "1rem" : "0" }}
    >
      <div className="card-header">
        <img
          src={`https://fmexim.com/images/asset-agri-tools-sickle.jpg`}
          alt="img"
        />
        <div className="name-heading">
          <span className="heading">{tool.toolName}</span>
          <span className="category">Category: {tool.toolCategory}</span>
        </div>
        <span className="pricing">{tool.toolPrice}/day</span>
      </div>
      <div className="discription">
        <span className="discription-header">Description</span>
        <p>{tool.toolDesc}</p>
      </div>
    </div>
  );
};

export default ToolCard;

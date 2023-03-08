import React, { useState, useEffect } from "react";
import { Header, Sidebar } from "../../components";
import axios from "axios";
import "./landingpage.css";

const LandingPage = () => {
  const [tools, setTools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5500/showallproducts/allproducts")
      .then((response) => {
        setTools(response.data);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="landing-page">
      <Header onSearch={handleSearch} />
      <Sidebar />
      <div className="landing-page-content">
        {tools
          .filter((tool) =>
            tool.toolName.toLowerCase().includes(searchTerm.toLowerCase()) || tool.toolCategory.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((tool, index) => (
            <div
              className="landing-page-content-card"
              key={tool._id}
              style={{ marginLeft: index % 2 !== 0 ? "1rem" : "0" }}
            >
              <div className="landing-page-content-card-header">
                <img
                  src={`https://fmexim.com/images/asset-agri-tools-sickle.jpg`}
                  alt="img"
                />
                <div className="name-heading">
                  <span className="heading">{tool.toolName}</span>
                  <span className="category">
                    Category: {tool.toolCategory}
                  </span>
                </div>
                <span className="pricing">{tool.toolPrice}/day</span>
              </div>
              <div className="discription">
                <span className="discription-header">Description</span>
                <p>{tool.toolDesc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;

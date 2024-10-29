import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import campusImage from "../images/campus.png";
import searchImage from "../images/search.png";
import loginImage from "../images/login-signup.png";

function Blog() {
  return (
    <Container className="blog">
      <div className="navbar">
        <div>
          <img src={campusImage} alt="Campus" />
        </div>
        <div className="nav-options">
          <img src={searchImage} alt="Search" />
          <Link to="#home">Home</Link>
          <Link to="#Explore">Explore</Link>
          <Link to="#recommendations">Recommendations</Link>
          <Link to="#community">Community</Link>
          <img src={loginImage} alt="login" height="39px" width="125px" />
        </div>
      </div>
    </Container>
  );
}

export default Blog;




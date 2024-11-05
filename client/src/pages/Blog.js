import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, } from "react-bootstrap";
import campusImage from "../images/campus.png";
import searchImage from "../images/search.png";
import loginImage from "../images/login-signup.png";
import img1 from "../images/herosection/img1.png";
import img2 from "../images/herosection/img2.png";
import img3 from "../images/herosection/img3.png";
import img4 from "../images/herosection/img4.png";
import img5 from "../images/herosection/img5.png";
import img6 from "../images/herosection/img6.png";

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
      <div className="hero-section">
        <div className="hero-heading p-3">
          <p>Welcome to our Blog</p>
          <span>
            Explore insights, tips, and stories about studying abroad.
          </span>
        </div>
        <Container>
      <div className="hero-cards">
        <Row className="justify-content-center align-items-center">
          
          {/* Column 1 with Single Large Image */}
          <Col sm={6} md={4} lg={3} className="d-flex justify-content-center align-items-center">
            <img
              src={img1}
              alt="img"
              style={{
                width: "100%",
                maxHeight: "620px",
                aspectRatio: "1 / 1.4",
                objectFit: "contain",
                marginBottom: "10px"
              }}
            />
          </Col>
          
          {/* Column 2 with 4 Smaller Images in a 2x2 Grid */}
          <Col sm={6} md={4} lg={3}>
            <Row>
              <Col xs={5} className="d-flex justify-content-center align-items-center">
                <img
                  src={img2}
                  alt="img"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1.2",
                    objectFit: "contain",
                    padding: "5px"
                  }}
                />
              </Col>
              <Col xs={7} className="d-flex justify-content-center align-items-center">
                <img
                  src={img3}
                  alt="img"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1.2",
                    objectFit: "contain",
                    padding: "5px"
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={7} className="d-flex justify-content-center align-items-center">
                <img
                  src={img4}
                  alt="img"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1.2",
                    objectFit: "contain",
                    padding: "5px"
                  }}
                />
              </Col>
              <Col xs={5} className="d-flex justify-content-center align-items-center">
                <img
                  src={img5}
                  alt="img"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1.2",
                    objectFit: "contain",
                    padding: "5px"
                  }}
                />
              </Col>
            </Row>
          </Col>
          
          {/* Column 3 with Single Large Image */}
          <Col sm={6} md={4} lg={3} className="d-flex justify-content-center align-items-center">
            <img
              src={img6}
              alt="img"
              style={{
                width: "100%",
                maxHeight: "620px",
                aspectRatio: "1 / 1.4",
                objectFit: "contain",
                marginBottom: "10px"
              }}
            />
          </Col>
        </Row>
      </div>
    </Container>
      </div>
      <div className="moving-cards p-4" >
        <h5>Most viewed <span>Blogs</span></h5>


      </div>
    </Container>
  );
}

export default Blog;

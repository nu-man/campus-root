import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import campusImage from "../images/campus.png";
import searchImage from "../images/search.png";
import loginImage from "../images/login-signup.png";
import img1 from "../images/herosection/img1.png";
import img2 from "../images/herosection/img2.png";
import img3 from "../images/herosection/img3.png";
import img4 from "../images/herosection/img4.png";
import img5 from "../images/herosection/img5.png";
import img6 from "../images/herosection/img6.png";
import pic1 from "../images/mainContent/pic1.png";
import pic2 from "../images/mainContent/pic2.png";
import pic3 from "../images/mainContent/pic3.png";
import pic4 from "../images/mainContent/pic4.png";
import pic5 from "../images/mainContent/pic5.png";
import mvpic1 from "../images/movingCards/mvpic1.png";
import mvpic2 from "../images/movingCards/mvpic2.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

function Blog() {
  const cardData = [
    {
      title: "5 Top academic success strategies to study abroad",
      description:
        "Studying abroad offers more than just academic knowledge; it's a pathway to developing crucial life skills.",
      tags: [
        "Making time management a priority",
        "Embrace cultural integration",
      ],
    },
    {
      title: "How to crack GRE and GMAT",
      description:
        "The full form of (GRE) is Graduate record examinations. It is a standard test that is taken for admissions.",
      tags: ["GRE slot booking", "Types of GRE exam", "GRE exam fees"],
    },
    {
      title: "Tips to manage studies and social life",
      description:
        "Every student must learn the balance between academics and personal life for overall success.",
      tags: ["Balancing academics", "Building social network"],
    },
    // Add more cards as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
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
                <Col
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src={img1}
                    alt="img"
                    style={{
                      width: "100%",
                      maxHeight: "620px",
                      aspectRatio: "1 / 1.4",
                      objectFit: "contain",
                      marginBottom: "10px",
                    }}
                  />
                </Col>

                {/* Column 2 with 4 Smaller Images in a 2x2 Grid */}
                <Col sm={6} md={4} lg={3}>
                  <Row>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={img2}
                        alt="img"
                        style={{
                          width: "100%",
                          aspectRatio: "1 / 1.2",
                          objectFit: "contain",
                          padding: "5px",
                        }}
                      />
                    </Col>
                    <Col
                      xs={7}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={img3}
                        alt="img"
                        style={{
                          width: "100%",
                          aspectRatio: "1 / 1.2",
                          objectFit: "contain",
                          padding: "5px",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={7}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={img4}
                        alt="img"
                        style={{
                          width: "100%",
                          aspectRatio: "1 / 1.2",
                          objectFit: "contain",
                          padding: "5px",
                        }}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={img5}
                        alt="img"
                        style={{
                          width: "100%",
                          aspectRatio: "1 / 1.2",
                          objectFit: "contain",
                          padding: "5px",
                        }}
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Column 3 with Single Large Image */}
                <Col
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src={img6}
                    alt="img"
                    style={{
                      width: "100%",
                      maxHeight: "620px",
                      aspectRatio: "1 / 1.4",
                      objectFit: "contain",
                      marginBottom: "10px",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className=" moving-cards">
          <h5>
            Most viewed <span>Blogs</span>
          </h5>
          <div className="d-flex justify-content-center align-items-center">
            <img src={mvpic1} alt="Image 1" style={{ marginRight: "20px" }} />
            <img src={mvpic1} alt="Image 2" />
          </div>
        </div>
        <div className="main-content">
          <h5>
            What new <span>today</span>
          </h5>
          <Row className="justify-content-center align-items-center">
            {/* Column 1 with Single Large Image */}
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3} // Full width on extra-small screens
              className="d-flex justify-content-center align-items-center mb-3"
            >
              <img
                src={pic1}
                alt="img"
                style={{
                  width: "100%",
                  maxHeight: "660px",
                  aspectRatio: "1 / 1.4",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
            </Col>

            {/* Column 2 with 3 rows */}
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Row>
                <img
                  src={pic2}
                  alt="pic"
                  style={{
                    width: "100%",
                    maxHeight: "120px",
                    aspectRatio: "1 / 1.4",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
              </Row>
              <Row>
                <img
                  src={pic3}
                  alt="pic"
                  style={{
                    width: "100%",
                    maxHeight: "120px",
                    aspectRatio: "1 / 1.4",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
              </Row>
              <Row>
                <img
                  src={pic4}
                  alt="pic"
                  style={{
                    width: "100%",
                    maxHeight: "120px",
                    aspectRatio: "1 / 1.4",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
              </Row>
            </Col>

            {/* Column 3 with Single Large Image */}
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3} // Full width on extra-small screens
              className="d-flex justify-content-center align-items-center mb-3"
            >
              <img
                src={pic5}
                alt="img"
                style={{
                  width: "100%",
                  maxHeight: "660px",
                  aspectRatio: "1 / 1.4",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="all-blogs">
          <h5>
            All <span>Blogs</span>
          </h5>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Card
                className="blog-card"
                style={{ background: "rgba(255, 244, 227, 1)" }}
              >
                <h3>Is studying abroad in UK worth it for Indian students.</h3>
                <p>
                  Studying abroad offers more than just academic knowledge; it’s
                  a pathway to developing crucial life skills and intercultural
                  understanding.
                </p>
                <h6>View details</h6>
              </Card>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Card
                className="blog-card"
                style={{ background: "rgba(238, 236, 255, 1)" }}
              >
                <h3>Studying Luxury Brand Management</h3>
                <p>
                  Studying abroad offers more than just academic knowledge; it’s
                  a pathway to developing crucial life skills and intercultural
                  understanding.
                </p>
                <h6>View details</h6>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Card
                className="blog-card"
                style={{ background: "rgba(238, 255, 254, 1)" }}
              >
                <h3>Common Myths of studying Abroad !</h3>
                <p>
                  Studying abroad offers more than just academic knowledge; it’s
                  a pathway to developing crucial life skills and intercultural
                  understanding.
                </p>
                <h6>View details</h6>
              </Card>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Card
                className="blog-card"
                style={{ background: "rgba(255, 241, 240, 1)" }}
              >
                <h3>9 + cheapest countries to study abroad.</h3>
                <p>
                  Studying abroad offers more than just academic knowledge; it’s
                  a pathway to developing crucial life skills and intercultural
                  understanding.
                </p>
                <h6>View details</h6>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Card
                className="blog-card"
                style={{ background: "rgba(255, 244, 227, 1)" }}
              >
                <h3>Top 5 academic success strategies for study abroad</h3>
                <p>
                  Studying abroad offers more than just academic knowledge; it’s
                  a pathway to developing crucial life skills and intercultural
                  understanding.
                </p>
                <h6>View details</h6>
              </Card>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Card
                className="blog-card"
                style={{ background: "rgba(238, 236, 255, 1)" }}
              >
                <h3>How to prepare for your English Proficiency Test</h3>
                <p>
                  Studying abroad offers more than just academic knowledge; it’s
                  a pathway to developing crucial life skills and intercultural
                  understanding.
                </p>
                <h6>View details</h6>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="footer">
        <Row>
          <Col md={2}>
            <h5>Popular countries</h5>
            <ul className="list-unstyled">
              <li>Australia</li>
              <li>Canada</li>
              <li>Ireland</li>
              <li>New Zealand</li>
              <li>UK</li>
              <li>US</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Popular Courses</h5>
            <ul className="list-unstyled">
              <li>Management</li>
              <li>Computers</li>
              <li>Engineering</li>
              <li>Science</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Terms and Policies</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Disclaimer</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Contact us</h5>
            <ul className="list-unstyled">
              <li>Email</li>
              <li>Phone no</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Install App</h5>
            <div>
              <AiFillApple size={30} className="mr-2" />
              <AiFillAndroid size={30} />
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col md={6} className="text-center text-md-left">
            <p>© Copyright 2023, All rights reserved</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <FaFacebook size={20} className="mx-2" />
            <FaTwitter size={20} className="mx-2" />
            <FaInstagram size={20} className="mx-2" />
            <FaLinkedin size={20} className="mx-2" />
            <FaYoutube size={20} className="mx-2" />
          </Col>
        </Row>
        </div>
      </Container>
    </>
  );
}

export default Blog;

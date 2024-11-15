import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import google from "../images/google.png";
import apple from "../images/istore.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Blog() {
  const scrollRef = useRef();
  // Function to handle scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Adjust the scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Container className="blog">
        <div className="navbar">
          <div className="nav-options">
            <img src={campusImage} alt="Campus" />
            <Link to="#home">Home</Link>
            <Link to="#Explore">Explore</Link>
            <Link to="#recommendations">AI Course finder</Link>
            <img src={searchImage} alt="Search" />
          </div>
          <div className="login">
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
                  className="d-flex justify-content-center align-items-center hero-card"
                >
                  <div className="image-container">
                    <img src={img1} alt="img" className="hero-image" />
                    <div
                      className="hover-text"
                      style={{ background: "rgba(254, 204, 197, 1)" }}
                    >
                      Being able to communicate in English is essential in
                      today’s globalized society. English is used worldwide in
                      academic discourse, business, and communication.
                    </div>
                  </div>
                </Col>

                {/* Column 2 with 4 Smaller Images in a 2x2 Grid */}
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
                  className="d-flex justify-content-center align-items-center hero-card"
                >
                  <div className="image-container">
                    <img src={img6} alt="img" className="hero-image" />
                    <div
                      className="hover-text"
                      style={{ background: "rgba(222, 224, 253, 1)" }}
                    >
                      Studying abroad offers more than just academic knowledge;
                      it’s a pathway to developing crucial life skills and
                      intercultural understanding. {" "}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className=" moving-cards">
          <h5>
            Most viewed <span>Blogs</span>
          </h5>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Left Icon */}
            <button
              onClick={() => scroll("left")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "2rem",
                color: "#333",
              }}
            >
              <MdChevronLeft />
            </button>

            {/* Scrollable Container */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                overflowX: "scroll",
                flexWrap: "nowrap",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              ref={scrollRef}
            >
              <img src={mvpic1} alt="Image1" />
              <img src={mvpic2} alt="Image2" />
              <img src={mvpic1} alt="Image3" />
            </div>

            {/* Right Icon */}
            <button
              onClick={() => scroll("right")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "2rem",
                color: "#333",
              }}
            >
              <MdChevronRight />
            </button>
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
              lg={4} // Full width on extra-small screens
              className="d-flex justify-content-center align-items-center "
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
            <Col xs={12} sm={4} md={4} lg={4} className="mb-3">
              <Row>
                <img
                  src={pic2}
                  alt="pic"
                  style={{
                    width: "100%",
                    maxHeight: "150px",
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
                    maxHeight: "150px",
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
                    maxHeight: "150px",
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
              lg={4} // Full width on extra-small screens
              className="d-flex justify-content-center align-items-center"
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
          <Row className="last-row">
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
      </Container>
      <div className="footer">
        <Row>
          <Col md={3}>
            <h2>one window</h2>
            <p>
              <BsTelephone />
              <span className="m-2"> 09154898944</span>
            </p>
            <p>
              <BsEnvelope />
              <span className="m-2"> info@onewindow.co</span>
            </p>
            <h5 className="mt-5"> Download our App</h5>
            <div>
              <img
                src={google}
                alt="Google Play"
                style={{ width: "130px", marginRight: "10px" }}
              />
              <img
                src={apple}
                alt="App Store"
                style={{ width: "100px", marginRight: "10px" }}
              />
            </div>
          </Col>
          <Col md={9}>
            <Row className="justify-content-end">
              <Col md={2}>
                <h5>Hand Book</h5>
                <ul className="list-unstyled">
                  <li>Masters Hand Book</li>
                  <li>Bachelors Hand Book</li>
                  <li>Visa Cheat Sheet</li>
                </ul>
              </Col>

              <Col md={2}>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>Blogs</li>
                  <li>Courses</li>
                  <li>Countries</li>
                  <li>Test Prep</li>
                  <li>IELTS</li>
                  <li>Scholarship</li>
                  <li>Events</li>
                  <li>Resources</li>
                  <li>Alumni Connect</li>
                  <li>SOP Rivew</li>
                </ul>
              </Col>

              <Col md={2}>
                <h5>Study Abroad</h5>
                <ul className="list-unstyled">
                  <li>Study in USA</li>
                  <li>Study in Canada</li>
                  <li>Study in UK</li>
                  <li>Study in Australia</li>
                  <li>Study in New Zealand</li>
                  <li>Study in France</li>
                  <li>Study in Netherlands</li>
                  <li>Study in Itlay</li>
                  <li>Study in Singapore</li>
                  <li>Study in Dubai</li>
                  <li>Study in Europe</li>
                </ul>
              </Col>

              <Col md={2}>
                <h5>Support</h5>
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Services</li>
                  <li>Careers</li>
                  <li>Financial Award Policy</li>
                  <li>Refund Policy</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Col className="text-center text-md-right ">
          <span className="follow-us">Follow us on:</span>
          <FaYoutube size={20} className="mx-2" />
          <FaInstagram size={20} className="mx-2" />
          <FaLinkedin size={20} className="mx-2" />
          <FaTwitter size={20} className="mx-2" />
          <FaFacebook size={20} className="mx-2" />
        </Col>
      </div>
      <div className="copyright">
        <p>Copyright One Window Education Pvt.Ltd2024. All Right Reserved.</p>
      </div>
    </>
  );
}

export default Blog;

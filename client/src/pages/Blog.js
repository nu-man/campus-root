import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../App.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // For Moving Cards Navigation

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.post(
          "https://campusroot.com/api/v1/public/listings/blogs"
        );
        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchArticles();
  }, []);

  // Show 3 articles at a time for moving cards
  const visibleArticles = articles.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < articles.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {/* Hero Section */}
        <Box className="hero-section" sx={{ marginBottom: "40px" }}>
          <h4>Welcome to our Blog</h4>
          <p>Explore insights, tips, and stories about studying abroad.</p>
          <Grid container spacing={2}>
            {articles.length > 0 && (
              <Grid item lg={12} md={4} sm={6} xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <img
                      src={articles[0].coverImageSrc}
                      alt={articles[0].title}
                      style={{
                        width: "437px",
                        height: "620px",
                        gap: "0px",
                        borderRadius: "20px",
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12} spacing={2}>
                    <img
                      src={articles[0].coverImageSrc}
                      alt={articles[0].title}
                      style={{
                        width: "437px",
                        height: "310px",
                        gap: "0px",
                        borderRadius: "20px",
                      }}
                    />
                    <img
                      src={articles[0].coverImageSrc}
                      alt={articles[0].title}
                      style={{
                        width: "437px",
                        height: "310px",
                        gap: "0px",
                        borderRadius: "20px",
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <img
                      src={articles[0].coverImageSrc}
                      alt={articles[0].title}
                      style={{
                        width: "437px",
                        height: "620px",
                        gap: "0px",
                        borderRadius: "20px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>

        {/* Moving Cards Section */}
        <Box
          className="moving-cards"
          sx={{ position: "relative", overflow: "hidden", padding: "0 32px" }}
        >
          <h4>
            Most viewed <span>Blogs</span>
          </h4>
          <Grid container alignItems="center" sx={{ position: "relative" }}>
            {/* Left Arrow */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: "-24px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              disabled={currentIndex === 0}
            >
              <ArrowBackIosIcon />
            </IconButton>

            {/* Articles */}
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                overflow: "hidden",
                width: "100%",
                transition: "transform 0.5s ease",
              }}
            >
              {visibleArticles.map((article, index) => (
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  key={index}
                  className="card"
                  sx={{ width: "100%" }}
                >
                  <Grid container spacing={2} alignItems="center">
                    {/* Image Item */}
                    <Grid item>
                      <img
                        src={article.coverImageSrc}
                        alt={article.title}
                        className="image-container"
                      />
                    </Grid>

                    {/* Title and Summary Item */}
                    <Grid item xs>
                      <h3>{article.title}</h3>
                      <p>{article.summary.slice(0, 70)}...</p>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            {/* Right Arrow */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: "-24px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              disabled={currentIndex + 3 >= articles.length}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Box>



        

        {/* All Blogs Section */}
        <Box className="all-blogs" sx={{ marginTop: "40px" }}>
          <h4>
            All <span>Blogs</span>
          </h4>
          <Grid container spacing={3}>
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box
                  sx={{
                    backgroundColor:
                      index % 2 === 0
                        ? "rgba(255, 244, 227, 1)"
                        : "rgba(238, 236, 255, 1)",
                    padding: "20px", // Add padding for better spacing
                    borderRadius: "10px", // Optional: Add border radius for a smoother look
                  }}
                >
                  <h4>{article.title}</h4>
                  <p>{article.summary.slice(0, 100)}...</p>
                  <h6 >
                    View details
                  </h6>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Blog;

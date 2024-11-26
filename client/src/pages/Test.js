import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Test() {
  const [articles, setArticles] = useState([]);

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

  return (
    <Grid container spacing={2}>
      {articles.slice(0, 3).map((article, index) => (
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          key={index}
          className="card "
          sx={{ width: "100" }}
        >
          <Grid container spacing={2} alignItems="center">
            {/* Image Item */}
            <Grid item>
              <img
                src={article.coverImageSrc}
                alt={`Article ${index}`}
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
  );
}

export default Test;

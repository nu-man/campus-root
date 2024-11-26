import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/material";
import '../App.css'; // Make sure to import the CSS file for styling

const ViewBlog = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://campusroot.com/api/v1/public/blog/${id}`
        );
        setBlog(response.data.data); // Store blog details
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading blog...</p>;
  }

  return (
  <Container>
      <div className="blog-details-container">
      <div className="blog-header">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="author-info">
          <img
            className="author-avatar"
            src={blog.author.displayPicSrc}
            alt="Author"
          />
          <div className="author-name">
            <span>{blog.author.firstName}</span> <span>{blog.author.lastName}</span>
          </div>
        </div>
      </div>
      <img className="cover-image" src={blog.coverImageSrc} alt={blog.title} />
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  </Container>
  );
};

export default ViewBlog;

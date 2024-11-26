import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog.js";
import BlogDetails from "./pages/ViewBlog.js";
import Test from "./pages/Test.js";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/test" element={<Test/>}></Route>
       </Routes>
    </Router>
  );
}

export default App;

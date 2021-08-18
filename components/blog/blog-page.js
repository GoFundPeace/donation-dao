import React from "react";
import { Container } from "react-bootstrap";

import PostPaginations from "../post-paginations";
import BlogCard from "./blog-card";

import { blogData } from '../../data/blog-data';

const BlogPage = () => {
  return (
    <section className="news-page pt-120 pb-120">
      <Container>
        <div className="news-3-col">
          {blogData.map(
            (
              { image, title, text, link, author },
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                text={text}
                link={link}
                author={author}
              />
            )
          )}
        </div>
        {/* <PostPaginations /> */}
      </Container>
    </section>
  );
};

export default BlogPage;

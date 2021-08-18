import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogContent from "./blog-content";
import BlogSidebar from "./blog-sidebar";

const BlogDetails = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <BlogContent />
          </Col>
          <Col md={12} lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;

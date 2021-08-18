import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/header/header";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import {blogData, blogs} from "../../data/blog-data";

export async function getStaticPaths() {
  return {
    paths: blogData.map((blog) => {
      return {
        params: {
          id: `${blog.id}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = blogs[params.id]
  return {
    props: { blog }
  }
}

const Blog = ({ blog }) => {

  const info = {
    'title': blog.title,
    'crumb': blog.crumb
  }
  const pageTitle = "GoFundPeace | " + blog.title
  return (
    <Layout pageTitle={pageTitle}>
      <Header />
      <StickyHeader />
      <PageHeader info={info} />
      <BlogDetails />
      <Footer />
    </Layout>
  );
};

export default Blog;

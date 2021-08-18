import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogPage from "../components/blog/blog-page";
import Footer from "../components/footer";

const News = () => {
  const info = {
    // 'image': org.header,
    'title': "GoFundPeace Blogs",
    'crumb': "Blogs"
  }
  return (
    <Layout pageTitle="GoFundPeace | Blog Posts">
      <Header />
      <StickyHeader />
      <PageHeader info={info} />
      <BlogPage />
      <Footer />
    </Layout>
  );
};

export default News;

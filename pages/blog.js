import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogDetails from "../components/blog-details";
import Footer from "../components/footer";
import {useRouter} from 'next/router';
import {blogs} from "../data/blog-data";

const Blog = () => {
  const router = useRouter();
  const routerBlog = router.query.blog;
  const blog = blogs[routerBlog]
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

// This tricks Next.js into not optimizing this page and removing the query on reload
export async function getServerSideProps(context) {
  return {
    props: {}, 
  };
}

export default Blog;

import React, { useState } from "react";
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

  const [header, setHeader] = useState("")
  const [title, setTitle] = useState("")
  const [crumb, setCrumb] = useState("")

  if (blog !== undefined) {
    setHeader(blog.header)
    setTitle(blog.title)
    setCrumb(blog.crumb)
  }

  const info = {
    'title': title,
    'crumb': crumb
  }
  const pageTitle = "GoFundPeace | " + title
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
// export async function getServerSideProps(context) {
//   return {
//     props: {}, 
//   };
// }

export default Blog;

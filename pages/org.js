import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CauseContent from "../components/causes/cause-content";
import Footer from "../components/footer";
import { useRouter } from 'next/router';

import { orgs } from "../data/org-data"

const Cause = () => {
  const router = useRouter();
  const routerOrg = router.query.org;
  const org = orgs[routerOrg]
  const info = {
    'image': org.header,
    'title': org.title,
    'crumb': org.crumb
  }
  const pageTitle = "GoFundPeace | " + org.title
  
  return (
    <Layout pageTitle={pageTitle}>
      <HeaderOne />
      <StickyHeader />
      <PageHeader info={info} />
      <CauseContent />
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


export default Cause;

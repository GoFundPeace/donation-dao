import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import CauseContent from "../../components/causes/cause-content";
import Footer from "../../components/footer";

import { orgsHome, orgs } from "../../data/org-data"

export async function getStaticPaths() {
  return {
    paths: orgsHome.map((org) => {
      return {
        params: {
          id: `${org.id}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const org = orgs[params.id]
  return {
    props: { org }
  }
}

const Cause = ({ org }) => {
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
      <CauseContent org={org}/>
      <Footer />
    </Layout>
  );
};

export default Cause;

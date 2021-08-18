import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import CausesPage from "../components/causes/causes-page";
import Footer from "../components/footer";

const Causes = () => {
  const info = {
    // 'image': org.header,
    'title': "GoFundPeace Orgs",
    'crumb': "Orgs"
  }
  return (
    <Layout pageTitle="GoFundPeace | Orgs">
      <Header />
      <StickyHeader />
      <PageHeader info={info} />
      <CausesPage />
      <Footer />
    </Layout>
  );
};

export default Causes;

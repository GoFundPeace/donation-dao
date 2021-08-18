import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EventPage from "../components/event/event-page";
import Footer from "../components/footer";

const Events = () => {
  const info = {
    // 'image': org.header,
    'title': "GoFundPeace Events",
    'crumb': "Events"
  }
  return (
    <Layout pageTitle="GoFundPeace | Events">
      <Header />
      <StickyHeader />
      <PageHeader info={info} />
      <EventPage />
      <Footer />
    </Layout>
  );
};

export default Events;

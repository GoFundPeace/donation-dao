import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Layout from "../components/layout";
import Header from "../components/header/header";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import {useRouter} from 'next/router';
import {events} from "../data/event-data";

const EventDetails = () => {
  const router = useRouter();
  const routerEvent = router.query.event;
  const event = events[routerEvent]
  const info = {
    'title': event.title,
    'crumb': event.crumb
  }
  const pageTitle = "GoFundPeace | " + event.title
  const mailto = 'mailto:' + event.organizer.email 
  return (
    <Layout pageTitle={pageTitle} >
      <Header />
      <StickyHeader />
      <PageHeader info={info} />
      <>
        <section className="event-details pt-120">
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <h3>{event.heading}</h3>
                {event.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Col>
              <Col md={12} lg={6}>
                <img src={event.image} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
        <div className="event-infos pt-20 pb-90">
          <Container>
            <Row>
              <Col md={12} lg={6} className="mb-30">
                <div className="event-infos__single background-secondary">
                  <h3>{event.venue.title}</h3>
                  <p>
                    {event.venue.text}
                  </p>
                  <ul className="list-unstyled event-infos__list">
                    <li>{event.venue.date}</li>
                    <li>{event.venue.time}</li>
                  </ul>
                  <div className="event-infos__social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={6} className="mb-30">
                <div className="event-infos__single background-special">
                  <h3>Organizer</h3>
                  <p> {event.organizer.name} </p>
                  <p> {event.organizer.organization} </p>
                  <p> {event.organizer.about}</p>
                  <ul className="list-unstyled event-infos__list event-infos__list-has-icons">
                    <li>
                      <i className="gfp-icon-email"></i>
                      <a href={mailto}>{event.organizer.email}</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
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


export default EventDetails;

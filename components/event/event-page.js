import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./event-card";
import bgImage from "../../assets/images/shapes/event-map-1-2.png";
import { eventHome } from "../../data/event-data";

const EventPage = () => {
  return (
    <section
      className="event-home-two pb-120"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={7}>
            <div className="block-title">
              <h3>
                Checkout our upcoming <br /> full event list.
              </h3>
            </div>
          </Col>
        </Row>
        <div className="event-grid">
          {eventHome.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventPage;

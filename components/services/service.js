import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import {blogData} from "../../data/blog-data";

const Service = () => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <h3>
            We believe that we can drive <br /> sustainable peace in Colombia <br /> by democratizing donations
          </h3>
        </div>
        <Row>
          {blogData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={4} key={`service-one-key-${index}`}>
                <a href={link} target='_blank'>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className="service-one__icon-inner">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
                </a>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Service;

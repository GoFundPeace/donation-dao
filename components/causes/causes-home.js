import React from "react";
import Link from "next/link";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import { orgsHome } from "../../data/org-data";

SwiperCore.use([ Pagination ]);

const CausesHome = () => {
  const swiperParams = {
    pagination: {       
      clickable: true,
      type: "bullets"
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="causes-page causes-home pt-120 pb-120">
      <Container>
        <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={7}>
            <div className="block-title">
              {/* <p>
                Organizations
              </p> */}
              <h3>
                Organizations
              </h3>
            </div>
          </Col>
          <Col lg={5} className=" d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">
                These are the different organizations that are looking for more funding. Find out what they do to see which ones you want to vote for{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...swiperParams}>
          {orgsHome.map(
            (
              { logo, title, text, link },
              index
            ) => (
              <SwiperSlide key={`cause-card-key-${index}`}>
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src={logo} alt="" />
                    </div>
                    <div className="cause-card__content">
                      <h3>
                        <Link href={link}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <p>{text}</p>
                      <div className="cause-card__bottom">
                        <Link href={link}>
                          <a className="thm-btn ">Learn more!</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default CausesHome;

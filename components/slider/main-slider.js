import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
import { orgsHome } from '../../data/org-data';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#main-slider-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className='main-slider'>
      <Swiper {...mainSlideOptions}>
      {orgsHome.map(
            (
              { image, shortenedTitle, link },
              index
            ) => (
              <SwiperSlide key={`main-slider-key-${index}`}>
                <div
                  className='image-layer'
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <Container>
                  <Row className='row justify-content-end'>
                    <Col xl={7} lg={12} className='text-right'>
                      <p>Help sustain peace in Colombia</p>
                      <p>by supporting {shortenedTitle}</p>
                      <h2>
                        GoFundPeace
                      </h2>
                      <a
                        href={link}
                        data-target='.donate-options'
                        className='scroll-to-target thm-btn'
                      >
                        Learn More
                      </a>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            )
      )}
        <div className='swiper-pagination' id='main-slider-pagination'></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;

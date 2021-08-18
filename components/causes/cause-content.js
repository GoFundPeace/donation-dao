import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryPage from '../../components/gallery/gallery-page';
import Video from '../../components/videos/video-card';
import Testimonials from '../../components/testimonials/testimonials';
import { useRouter } from 'next/router';
import { orgs } from "../../data/org-data"

const CauseContent = () => {
  const router = useRouter();
  const routerOrg = router.query.org;
  const org = orgs[routerOrg];

  return (
    <section className='cause-details blog-details  pt-120 pb-40'>
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className='cause-details__content'>
              <div className='cause-card'>
                <div className='cause-card__inner'>
                  <div className='cause-card__image'>
                    <img src={org.image} alt='' />
                  </div>
                </div>
              </div>
              <h3>{org.title}</h3>
              {org.about.map((paragraph, index) => (
                <p key={index} >{paragraph}</p>
              ))}
              <h3>{org.heading}</h3>
              {org.need.map((paragraph, index) => (
                <p key={index} >{paragraph}</p>
              ))}
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className='cause-details__sidebar'>
              <Video info={org.videoInfo} />
              <Testimonials testimonials={org.testimonials}/>
            </div>
          </Col>
        </Row>
        <Row>
          <GalleryPage images={org.images}/>
        </Row>
      </Container>
    </section>
  );
};

export default CauseContent;

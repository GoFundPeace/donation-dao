import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";

const VideoTestimonial = (info) => {
  const [isOpen, setOpen] = useState(false);
  if (typeof info.code !== 'undefined') {
    return (
      <section className="testimonial-video-card">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={info.code}
          onClose={() => setOpen(false)}
        />
  
        <div
          className="testimonial-video-card__bg"
          style={{ backgroundImage: `url(${info.image})` }}
        ></div>
  
        <Container className="text-center pt-120 pb-120">
            <span
              onClick={() => setOpen(true)}
              className="video-popup testimonial-video-card__btn"
            >
              <i className="fa fa-play"></i>
            </span>
        </Container>
      </section>
    );
  } else {
    return (
      <section className="testimonial-video-card">  
        <div
          className="testimonial-video-card__bg"
          style={{ backgroundImage: `url(${info.image})` }}
        ></div>

        <Container className="text-center pt-120 pb-120">
            <span
              className="video-popup"
            >
            </span>
        </Container>
      </section>
    );
  }
  
};

export default VideoTestimonial;

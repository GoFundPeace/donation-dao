import React, { useState, useEffect } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";

const VideoCard = (info) => {
  const [isOpen, setOpen] = useState(false);
  const [channel, setChannel] = useState('youtube')

  useEffect(() => {
    if (typeof info.info.channel !== 'undefined') {
      setChannel(info.info.channel);
    } else {
      setChannel('youtube');
    }
  })

  return (
    <section className="video-card">
      <ModalVideo
        channel={channel}
        autoplay
        isOpen={isOpen}
        videoId={info.info.code}
        onClose={() => setOpen(false)}
      />
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${info.info.bgImage})` }}
      ></div>

      <Container className=" text-center pt-120 pb-120">
        <h3>
          Play video <br />
          to learn <br />
          more
        </h3>
        <div className="video-card__btn-block">
          <span
            onClick={() => setOpen(true)}
            className="video-popup video-card__btn"
          >
            <i className="fa fa-play"></i>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;

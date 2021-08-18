import { Container } from 'react-bootstrap';
import VideoTestimonial from '../videos/video-testimonial';

const Testimonials = (testimonials) => {
  if (testimonials.testimonials) {
    return (
      <Container>
        <h3 >Testimonials</h3>
        {testimonials.testimonials.map(
          (
            { name, text, code, image },
            index
          ) => (
            <div className='comment-one' key={`testimonials-key-${index}`}>
              <div >
                <h3 className='testimonial-title'>{name}</h3>
                <VideoTestimonial code={code} image={image} />
                <p className='testimonial-text'>{text}</p>
              </div>
            </div>
          )
        )}
        
      </Container>
    )
  } else {
    return null;
  }

}

export default Testimonials;
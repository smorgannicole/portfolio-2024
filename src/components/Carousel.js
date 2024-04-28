import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import arrow from "../images/arrow.svg"
import { CarouselWrapper } from "../styles/styles.js"

class MyCarousel extends React.Component {
  render() {
    const { currentProj } = this.props
    const { carouselRef } = this.props

    const totalSlides = currentProj.images ? currentProj.images.length : 0

    return (
      <CarouselWrapper>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={totalSlides}
          infinite={true}
        >
          <div ref={carouselRef}>
            <Slider>
              {currentProj.images &&
                currentProj.images.map((image, index) => (
                  <Slide key={index} index={index}>
                    <img
                      className="modal-image"
                      src={image}
                      alt={`Browser screenshot of ${currentProj.title}`}
                    />
                  </Slide>
                ))}
            </Slider>
          </div>
          <div className="controls">
            <ButtonBack className="btn-arrow reverse-arrow">
              <img src={arrow} alt="arrow" className="transition hover" />
            </ButtonBack>
            <DotGroup className="dot-group" />
            <ButtonNext className="btn-arrow reg-arrow">
              <img src={arrow} alt="arrow" className="transition hover" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </CarouselWrapper>
    )
  }
}

export default MyCarousel

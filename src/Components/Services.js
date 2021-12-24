import React from 'react'
import LOGO01 from '../LOGO01.svg' // eslint-disable-next-line
import Cuarto from '../Images/Cuarto.jpg' // eslint-disable-next-line
import {Button, Icon} from 'semantic-ui-react' // eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react'; // eslint-disable-next-line
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'semantic-ui-css/semantic.min.css'
import '../styles/Services.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Services() {
  
  return (
    <div className="wrapper-services">
      <div className="section-1">
        <h1 className="services-headline">HEADLINE (Slogan)</h1>
        <h2 className="subheadline">subheadline</h2>
        <div className="subsection-1">
          <div className="sub-item-1">
            <img src={LOGO01} className='image' alt='Fizzel Furniture 360 (FF360)'/>
          </div>
          <div className="sub-item-2">
            <p className="services-paragraph-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim,
            massa sit amet hendrerit tempus, diam nunc fringilla turpis, eget vehicula metus
            massa non ex. Morbi porta, velit a bibendum dapibus, metus quam porta felis,
            ut dignissim odio magna varius mauris. Nam tincidunt quam a urna laoreet rhoncus.
            Vivamus tortor metus, tempor sit amet blandit eget, rhoncus at augue.
            Cras ac felis mauris. Nulla gravida eros condimentum risus vulputate,
            et aliquet diam tincidunt.
            </p>
            {/* <Button size="massive" className="getQuote">Get a Quote Today!</Button> */}
          </div>
        </div>
      </div>
      {/* <div className="section-2">
        <Button>
          <h1 className="accordion">
            AWARDS / CERTS (CTA) (Credibility)<Icon name="triangle down"></Icon>
          </h1>
        </Button>
      </div> */}
      {/* <div className="section-3">
        <div className="sec-item-1">
          <p className="services-paragraph-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim,
            massa sit amet hendrerit tempus, diam nunc fringilla turpis, eget vehicula metus
            massa non ex. Morbi porta, velit a bibendum dapibus, metus quam porta felis,
            ut dignissim odio magna varius mauris. Nam tincidunt quam a urna laoreet rhoncus.
            Vivamus tortor metus, tempor sit amet blandit eget, rhoncus at augue.
            Cras ac felis mauris. Nulla gravida eros condimentum risus vulputate,
            et aliquet diam tincidunt.
          </p>
        </div>
        <div className="sec-item-2">
          <img src={LOGO01} className='image' alt='Fizzel Furniture 360 (FF360)'/>
        </div>
      </div> */}
      {/* <div className="subsection-1">
          <div className="sub-item-1">
            <img src={LOGO01} className='image' alt='Fizzel Furniture 360 (FF360)'/>
          </div>
          <div className="sub-item-2">
            <p className="services-paragraph-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim,
            massa sit amet hendrerit tempus, diam nunc fringilla turpis, eget vehicula metus
            massa non ex. Morbi porta, velit a bibendum dapibus, metus quam porta felis,
            ut dignissim odio magna varius mauris. Nam tincidunt quam a urna laoreet rhoncus.
            Vivamus tortor metus, tempor sit amet blandit eget, rhoncus at augue.
            Cras ac felis mauris. Nulla gravida eros condimentum risus vulputate,
            et aliquet diam tincidunt.
            </p>
            <Button size="massive" className="getQuote">Get a Quote Today!</Button>
          </div>
      </div> */}
      <div className="section-4">
        <h1 className="work-Headline">QUE NUESTRO TRABAJO HABLE POR SI SOLO:</h1>
        <div className="sub-section-4">
          <a href='https://www.facebook.com/fizzelfurniture360/' target="_blank" rel="noopener noreferrer"><i class="massive facebook icon"></i></a>
          <a href='https://www.instagram.com/fizzelfurniture360/' target="_blank" rel="noopener noreferrer"><i class="massive instagram icon"></i></a>
          <a href='https://api.whatsapp.com/send?phone=17875853623&amp;app=facebook&amp;entry_point=page_cta'><i class="massive whatsapp icon"></i></a>
        </div>
        {/* <Swiper className="photo-gallery"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="slide">
            <img src={Cuarto} className="photo" alt='Cuarto en madera'/> 
          </SwiperSlide>
          <SwiperSlide className="slide">Slide 2</SwiperSlide>
          <SwiperSlide className="slide">Slide 3</SwiperSlide>
        </Swiper> */}
      </div>
      {/* <div className="section-5">
        <h1 className="testimonials-Headline">TESTIMONIOS</h1>
        <div className="testimonials">
          <div className="subsection-5-item-1">
            item 1
          </div>
          <div className="subsection-5-item-2">
            item 2
          </div>
        </div>
      </div> */}
      {/* <div className="section-6">
        
      </div> */}
    </div>
  );
}
export default Services;
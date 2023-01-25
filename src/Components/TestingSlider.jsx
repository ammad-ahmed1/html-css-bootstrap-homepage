import React, { Component } from "react";
import Slider from "react-slick";
import './TestingSlide.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaBlackTie } from "react-icons/fa";

const style = {
  backgroundColor : 'red'
}
const card = [{
    img: [
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},
{
    img: [
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_bc70b428-ba01-434a-87f7-7fc276929722_360x.jpg?v=1615532041',
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_cee0c1fa-ae0b-45b1-b6eb-60e62213af27_360x.jpg?v=1615532041'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},
{
    img: [
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/5_225b97d3-5005-45cf-b46e-3d7d6ea50d47_360x.jpg?v=1614070940',
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/7_3c5add6f-e961-4fc2-be0e-15fd9d1c349f_360x.jpg?v=1614070940'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},
{
    img: ['https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_8624266d-ffc8-44db-b030-5f62c62138d5_360x.jpg?v=1614070026',
          'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_e64bc63a-735c-4c2c-9542-81681cff4891_360x.jpg?v=1614070027'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},
{
    img: [
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_c0df3076-19c1-4535-a664-270cf6e05ab5_360x.jpg?v=1615019404',
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_b71f02c8-1b6d-4f14-9686-cbd05ae3ab5c_360x.jpg?v=1615019404'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},
{
    img: [
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_a5f6af0e-b13e-47bb-883f-bd586149cbad_360x.jpg?v=1614069709',
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_a5bab086-9d68-4fcb-ba82-6c23e6f2d456_360x.jpg?v=1614069709'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},
{
    img: [
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794'
    ],
    caption: 'Oversized jacket with designe layout',
    price: '333$'
},

]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{style}}
        onClick={onClick}
        
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{}}
        onClick={onClick}
      />
    );
  }
  
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const TestingSlider = () => {
  return (
    <div className="slider-parent m-auto">
        
        
          <Slider {...settings}>
              {card.map((item, key) =>

                  <div className='col-lg-2 col-md-2 prod-card-slider position-relative' key={key}>
                      <div className='multi-img-slider-div'>
                          <img 
                          src={item.img[0]} 
                          className = 'img-1 w-100'
                          onMouseOver={e => (e.currentTarget.src = item.img[1])}
                          onMouseOut = {e => (e.currentTarget.src = item.img[0])}
                          />
                      </div>
                      <div className=''>
                          <p className="prod-card-text">Oversized jacket with designe layout</p>
                          <div className=''>
                              <p className="prod-card-text">333$</p>
                          </div>
                      </div>
                  </div>
                
             )}
          {/* </div>
          <div className='row'>
                    
                        {card.map((index, key) => 
                        <div className='col-lg-2 col-md-2 m-auto prod-card-slider'>
                        <div className='slick-slide-img'>
                            <img src='https://cdn.shopify.com/s/files/1/0256/4594/0810/products/5_225b97d3-5005-45cf-b46e-3d7d6ea50d47_360x.jpg?v=1614070940' className='w-100' />
                        </div>
                        <div className='slick-slide-caption w-100'>
                            <p>Oversized jacket with designe layout</p>
                            <div className=''>
                                <p>333$</p>
                            </div>
                        </div>
                    </div>)}
                
                </div>

          </div>
           */}

               

            

           
           
           
          

            

        </Slider>
    </div>
  )
}

export default TestingSlider
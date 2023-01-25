import React from 'react'
//import { Carousel } from 'bootstrap';
import { Carousel } from 'react-bootstrap';
import './SliderStyle.css'
const MainSlider = () => {
  return (
    <div className='mainDiv'>
        <Carousel fade>
        {/* <button type="button" data-bs-target="" aria-label="Slide 1" aria-current="false"></button>
        <button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button>
        <button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"></button> */}
            <Carousel.Item className='slider-section-img'> 
            <img
                className="d-block w-100 slider-img"
                src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/slideshow-1_f9506a0f-cd22-46e1-89e6-dfb216eda48b_1920x950.jpg?v=1617703696'
            />
            <div className='slider-caption'>
             <Carousel.Caption>
                <span className='slider-cap-1'>NEW ARRIVAL</span>
                <h3 className='slider-cap-2'>FINDYOUR</h3>
                <h1 className='slider-cap-3'>PERFECT</h1>
                <button href="#" className="hbtn hb-fill-right" ><h3 className='btn-name'>Shop now </h3></button>
            </Carousel.Caption>
            </div>
           
            </Carousel.Item>
             <Carousel.Item className='slider-section-img'>
            <img
                className="d-block w-100 slider-img"
                id = 'second-img'
                src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/slideshow-3_8d153831-1053-4b01-9846-85b389bc650a_1920x950.jpg?v=1617703716'
            />
            <div className='slider-caption'>
            <Carousel.Caption>
                <h5 className='slider-cap-1'>FASHION TRENDS</h5>
                <h3 className='slider-cap-2'>THE HOT LIST OF</h3>
                <h1 className='slider-cap-3'>SUMMERS</h1>
                <button href="#" className="hbtn hb-fill-right" ><h3 className='btn-name'>Shop now </h3></button>
            </Carousel.Caption>
            </div>
            
            </Carousel.Item>
            <Carousel.Item className='slider-section-img'>
            <img
                className="d-block w-100 slider-img"
                src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/slideshow-2_776428d6-b3e7-4a7f-9fe5-d18ba9b28a8f_1920x950.jpg?v=1617703707'
            />
            <Carousel.Caption>
                <p className='slider-cap-1' id='s-3-c-1'>NEW COLLECTION</p>
                <h3 className='slider-cap-2' id='s-3-c-2'>FASHION</h3>
                <h1 className='slider-cap-3' id='s-3-c-3'>GLASSES</h1>
                <button href="#" className="hbtn hb-fill-right" ><h3 className='btn-name'>Shop now </h3></button>
            </Carousel.Caption>
            </Carousel.Item>
           
        </Carousel>
        <div className='section-2-bottom-text'>
           <div className='section-2-main-heading'>
            <h2 className = 'section-2-heading-1'>DENIM COLLETION</h2>
           </div>
           <div className='section-2-details'>
            <p className='section-2-detail'>Explore the best trends for girls and women at SaleHub! Clothes, shoes and cool accessories for a<br/> new season are available now at SaleHub online.</p>
           </div>
        </div>

        {/*----------------------------------Simple Bootstrap Slider------------------------------------- */}
        {/* <div id='carouselExampleSlide' className='carousel slide' data-ride = "carousel">
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                      <img
                          className="d-block w-100"
                          src='https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-6/310141814_419070050339651_8460627044958429326_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=veVHKdTILtwAX_CT0dy&_nc_ht=scontent.flhe7-2.fna&oh=00_AfBAaNyNlTiZ_zfjP1a_OSDL4b7oK5noN3VQIK1MaNYI2w&oe=63CD6D1C'
                      />
                </div>

            </div>
            <div className='carousel-inner'>
                <div className='carousel-item'>
                    <img
                    className='d-block w-100'
                    src='https://lovehairstyles.com/wp-content/uploads/2020/11/tp-short-bob-hairstyles-bangs.jpg' 
                    
                    />
                </div>
            </div>
            <div className='carousel-inner'>
                <div className='carousel-item'>
                    <img
                    className='d-block w-100'
                    src='https://i0.wp.com/www.livestrong.family/wp-content/uploads/2018/09/image-24-e1424695122801-850x400.jpg?resize=850%2C400&ssl=1'                     
                    />
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default MainSlider
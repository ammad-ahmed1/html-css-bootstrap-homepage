import React from 'react'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './FeaturedProductStyle.css'
const FeaturedProductsSection = () => {
    const [imgIndex, setImgIndex] = useState(0)
    const imgArr = [
        'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_c0df3076-19c1-4535-a664-270cf6e05ab5_1200x.jpg?v=1615019404',
        'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/6_bcd1a33d-2c02-407b-a5a5-6c1b3e43199b_1200x.jpg?v=1615019404',
        'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/7_7d379fe4-a861-4ff4-a474-15b70e999b6a_1200x.jpg?v=1615019404',
        'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/8_b8d90671-8d80-42b4-88d0-fc9a87bf5ef9_1200x.jpg?v=1615019404',
        'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/5_f62fb2aa-d8ef-418a-8dad-74136f239794_1200x.jpg?v=1615019404'
    ]
    const changeImage = (e) => {
        console.log(e)
        setImgIndex(e);
    }
  return (
    <div className='featured-product-section'>
        <div className='featured-product-heading text-center'>
            <h1>Featured Product</h1>
        </div>
        <div className='row featured-product-items'>
            {/* <Carousel>
                <Carousel.Item interval={10000000}>
                    <div className='col-6 featured-product-img'>
                        <img 
                        src={imgArr[imgIndex]}
                        className='w-100'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={10000000}>
                    <div className='col-6 featured-product-img'>
                        <img 
                        src={imgArr[imgIndex + 1]}
                        className='w-100'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={10000000}>
                    <div className='col-6 featured-product-img'>
                        <img 
                        src={imgArr[imgIndex + 2]}
                        className='w-100'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={10000000}>
                    <div className='col-6 featured-product-img'>
                        <img 
                        src={imgArr[imgIndex + 3]}
                        className='w-100'
                        />
                    </div>
                </Carousel.Item>
            </Carousel> */}
            <div className='col-6 featured-product-img'>
                <img 
                src={imgArr[imgIndex]}
                className='w-100'
                />
            </div>
            <div className='col-6 featured-product-detail'>
                <div className='fp-heading fp-text'>
                    <h2>Levi's essential western denim shirt</h2>
                </div>
                <div className='fp-price fp-text'>
                    <h5>$121.00</h5>
                </div>
                <div className='fp-color fp-text'>
                    <h6>COLOR: DARKOLIVEGREEN</h6>
                </div>
                <div className='fp-color-btns d-flex'>
                    <div className='fp-btn-1'>
                        <button className='btn-1' onClick={(e) => changeImage(0)}>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    <div className='fp-btn-2' >
                        <button className='btn-2' id = 'btn-two' onClick={e => changeImage(1)}>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    <div className='fp-btn-3'>
                        <button className='btn-3' id = 'btn-three' onClick={e => changeImage(2)}>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    <div className='fp-btn-4'>
                        <button className='btn-4' id = 'btn-four' onClick={e => changeImage(4)}>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                </div>
                <div className='fp-size-btns d-flex'>
                    <div className='fp-size-btn-1'>
                        <button className='size-btn-1'>
                            <p id='xs' className='text-align-center'>XS</p>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    <div className='fp-size-btn-2'>
                        <button className='size-btn-2' id = 'btn-two'>
                            <p id='s' className='text-align-center'>S</p>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    <div className='fp-size-btn-3'>
                        <button className='size-btn-3' id = 'btn-three'>
                            <p id='m' className='text-align-center'>M</p>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    <div className='fp-size-btn-4'>
                        <button className='size-btn-4' id = 'btn-four'>
                            <p id='l' className='text-align-center'>L</p>
                            {/* <div className='btn-1-clr'></div> */}
                        </button>
                    </div>
                    {/* <div className='fp-size-btn-5'>
                        <button className='size-btn-5' id = 'btn-four'>
                            <p id='xl' className='text-align-center'>XL</p>
                        </button>
                    </div> */}
                   
                </div>
                <div className='bottom-btns'>
                    <button className='cart-btn'>
                        Add to cart
                    </button>
                    <br />
                    <button className='buy-btn'>
                        Buy now
                    </button>
                </div>
                <div className='fp-detail-text'>
                        <p className='fp-detail-text'>Steele's Lena Dress features a smocked bust, off the shoulder sleeves with eyelet design, and mini cut skirt with raw hem.</p>
                        <ul className='big-bullets featured-product-list'>
                            <li className='featured-product-list'>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
                            <li className='featured-product-list'>DO NOT BLEACH</li>
                            <li className='featured-product-list'>DO NOT TUMBLE DRY</li>
                            <li className='featured-product-list'>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
                            <li className='featured-product-list'>DO NOT DRY CLEAN</li>
                        </ul>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProductsSection
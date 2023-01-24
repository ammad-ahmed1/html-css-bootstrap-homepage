import React from 'react'
import './SectionThreeStyle.css'
import Slider from "react-slick";
const card = [{},{},{},{},{}]
const SectionThree = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {card.map((item, key) => (
                        <div className='col-lg-2 col-md-2 m-auto prod-card-slider' key={key}>
                            <div className=''>
                                <img src='https://cdn.shopify.com/s/files/1/0256/4594/0810/products/5_225b97d3-5005-45cf-b46e-3d7d6ea50d47_360x.jpg?v=1614070940' className='w-100' />
                            </div>
                            <div className=''>
                                <p>Oversized jacket with designe layout</p>
                                <div className=''>
                                    <p>333$</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default SectionThree
import React from 'react'
import './SecondSectionStyle.css'
import  {FaHeart} from 'react-icons/fa';
const SecondSection = () => {
  return (
    <div>
        <div className='h-75 container_90 second-section'>
            <div className='row child-container'>
            <div className='col-lg-8 col-md-8 col-xs-1 left-side position-relative hover-zoom overflow-hidden'>
                <img 
                src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/banner_1_1296x.png?v=1615515282'
                className='s-2-img'
                />
                      <div className='pic-1-text position-absolute'>
                          <h1 className='pic-1-heading'>DENIM-JACKET</h1>
                          <p className='pic-1-para '>14 Denim-Jacket Outfits to Live in Now That It Is Fall</p>
                      </div>
            </div>
            
            <div className='col-lg-4 col-md-4 col-xs-1 right-side overflow-hidden'>
                <div className='row up-side position-relative hover-zoom overflow-hidden'>
                    <img 
                    src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/bn-2_676a7adf-ea7b-4fa1-8848-8517abdc2793_540x.jpg?v=1616643656'

                    className='s-2-img'
                    />
                    <div className='pic-2-text position-absolute'>
                          <h1 className='pic-2-heading'>DENIM MINI SKIRT</h1>
                    </div>
                </div>
                <div className='row down-side position-relative hover-zoom overflow-hidden'>
                    <img 
                    src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/banner_3_540x.png?v=1615515309'
                    className='s-2-img'
                    />
                    <div className='pic-2-text position-absolute'>
                          <h1 className='pic-2-heading'>HOODED DENIM</h1>
                    </div>
                </div>
            </div>
            </div>
         
        </div>
          <div className='second-section-text-part'>
              <div className='second-section-heading '>
                  <h1 className='text-align-center'>WE LOVE <FaHeart /></h1>
              </div>
          </div>
    </div>
  )
}

export default SecondSection
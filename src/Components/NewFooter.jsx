import React from 'react'
import './NewFooterStyle.css'
import  {FaFacebook, FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa';
const NewFooter = () => {
  return (
    <div>
        <div className='row footer-container'>
            <div className='col-3 colOne'>
                <img src='https://cdn.shopify.com/s/files/1/0256/4594/0810/files/logo_footer_134x27.png?v=1614760353' />
                <div className='paragraph'>
                We’re available by phone +123-456-789
                info@example.com
                Monday till Friday 10 to 6 EST
                </div>
            </div>
            <div className='col-2 colTwo'>
                <ul>
                    <li className='list'>
                        <h5>About Us</h5>
                    </li>
                    
                    <li className='list'>
                        About Us
                    </li>
                    <li className='list'>
                        Contact us
                    </li>
                    <li className='list'>
                        Factories
                    </li>
                    <li className='list'>
                        Careers
                    </li>
                    <li className='list'>
                        Help And Advice
                    </li>
                    <li className='list'>
                        Shipping and return
                    </li>

                </ul>
            </div>
            <div className='col-2 colTwo'>
                <ul>
                    <li className='list'>
                        <h5>Our shop</h5>
                    </li>
                    
                    <li className='list'>
                        New Arrivals
                    </li>
                    <li className='list'>
                        Trending
                    </li>
                    <li className='list'>
                        Automn collections
                    </li>
                    <li className='list'>
                        Back in stock
                    </li>
                    <li className='list'>
                        Denim
                    </li>
                    <li className='list'>
                        Jackets
                    </li>

                </ul>
            </div>


            <div className='col-2 colOne'>
                <h5>Newsletter</h5>
                <div className='paragraph'>
                Receive our weekly newsletter.
                For dietary content, fashion insider and the best offers
                </div>
                <div className='social-icons d-flex'>
                    <div  className='icon'>
                    <FaFacebook/>
                    </div>
                    <div  className='icon'>
                    <FaTwitter/>
                    </div>
                    <div  className='icon'>
                    <FaPinterest/>
                    </div>
                    <div  className='icon'>
                    <FaInstagram/>
                    </div>
                    
                    
                    
                    
                </div>
            </div>


        </div>
    </div>
  )
}

export default NewFooter
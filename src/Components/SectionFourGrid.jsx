import React from 'react'
import './SectionFourGridStyle.css'
const SectionFourGrid = () => {
  const s4gimgArr = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-1_88ecbdcc-c1c6-47af-9cb5-1f21ebae7c4c_360x.png?v=1617705755'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-2_1e482937-4f64-4d3d-9e9f-feb36a836c0c_360x.png?v=1617705770'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-3_243a2a47-8869-47c2-a1b7-ea9163d96e52_360x.png?v=1617705787'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-4_d1d516ae-775a-453a-a97b-84c9e80f69cd_360x.png?v=1617705798'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-5_fbd8fa3f-d8a8-4ef1-a023-c348c802ad38_360x.png?v=1617705810',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-6_a88c6dc9-2f7b-4020-96b1-f01cd6593323_360x.png?v=1617705822',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-7_177acd91-0dbb-4e63-8fe7-2311d1c193e8_360x.png?v=1617705832',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/files/lb-8_561008c8-c850-49d3-904c-f30189a60d38_360x.png?v=1617705843'
    } 
  ]
  return (
    <div>
      {/* <div className='section-4-grid container_90 position-relative overflow-hidden'>
        <div className='row s4g-heading position-absolute px-5'>
          <h1 className='text-align-center'>SHOP THE LOOKS</h1>
          <p>Our latest endeavour features designs from around the world with materials so</p>
          <p>comfortable you won't want to wear anything else every again.</p>
          </div>
          <div className='s4-g row position-absolute justify-content-between'>
            {s4gimgArr.length > 0 && s4gimgArr.map((item, key) =>
            
            <div className='col-md-3 col-lg-3 s4-grid' key={key}>
              <div className='grid-img '>
                <img src={item.img} className='grid-img mr-2 ' />{console.log(item.img)}
              
              </div>
              <div className='grid-btns position-absolute'>
                  <button className='grid-btn'>Shop now </button>
              </div>
          </div>  
        
        )}
       
          </div>
          
        <div className='s4g-gallery'>

        </div>
      </div> */}
      <div className='section-4-grid container_100 overflow-hidden w-100'>
        <div className='section-4-grid-heading-1'>
          <h1 className='text-align-center section-4-grid-heading'>SHOP THE LOOKS</h1>
          <p className='text-align-center section-4-grid-para'>Our latest endeavour features designs from around the world with materials so</p>
          <p className='text-align-center section-4-grid-para'>comfortable you won't want to wear anything else every again.</p>
        </div>
        <div className='s4-g row justify-content-between'>
          {s4gimgArr.length > 0 && s4gimgArr.map((item, key) =>

            <div className='col-md-3 col-lg-3 s4-grid' key={key}>
              <div className='grid-imgs position-relative'>
                <img src={item.img} className='grid-img' />{console.log(item.img)}
                <div className='grid-btns position-absolute'>
                  <button className='grid-btn'>Shop now </button>
                </div>
              </div>
              
            </div>
          )}
        </div>
    </div>


    </div>
  )
}

export default SectionFourGrid
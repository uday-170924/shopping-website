import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>An e-commerce website is an online platform that faceilities buying and selling odf product or services over the internet
            servers as a virtual marketplace where busnesses and individ showcase their product , interact with customers and conduct
            trabctions thiout the need for a physical presence . E-commercwe  website have gained immense popularity due to their conveni accessility, 
            accessibility, and the global reach they offter. </p>
            <p>E-commerce website typically display product or sevices alog with detailed descriptions images prices and any available variations (e.g. size colore)
                Each product usually has own dedicated page with relevant information.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
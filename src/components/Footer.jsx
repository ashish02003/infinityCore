import React from 'react'
import {
    FaFacebookSquare,
    FaYoutubeSquare,
    FaInstagramSquare,

  } from "react-icons/fa";
 
const Footer = () => {
  return (
    <>
     <div className="footer">
       
        <div className='footercontent'>
          <h1>Copyright ©right 2023.Infinity Core Technology pvt ltd. All rights reserved</h1>
        </div>

        <div className="media">
          <ul className="">
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutubeSquare  className="youtube"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare  className="instagram"/>
              </a>
            </li>
          </ul>
         
        </div>
      </div>
    </>
  )
}

export default Footer
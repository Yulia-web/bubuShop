import React from 'react'

import Facebook from '../../images/icons/social-media/facebook.svg';
import Instagram from '../../images/icons/social-media/instagram.svg';
import Youtoobe from '../../images/icons/social-media/youtube.svg';

export const Media = () => {
  return (
    <div className="contact-info">
        <div className="social-networks items">
        <a href="#" className="item social-link">
            <img src={Instagram} alt="social network" />
        </a>
        <a href="#" className="item social-link">
            <img src={Youtoobe} alt="social network" />
        </a>
        <a href="#" className="item social-link">
            <img src={Facebook} alt="social network" />
        </a>
        </div>
    </div>
  )
}

export default Media;

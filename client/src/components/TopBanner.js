import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const TopBanner = () => {
  return (
    <div className='banner w-100 py-1'>
      <div className='container'>
        <div className='row '>
          <div className='col col-md-4 text-center'>
            <FontAwesomeIcon icon={faLocationDot} className='pe-2' size='1x' />Bucuresti
          </div>
          <div className='col col-md-4 text-center'>
            <FontAwesomeIcon icon={faEnvelope} className='pe-2' size='1x' />av_alinamarin@yahoo.com
          </div>
          <div className='col col-md-4 text-center'>
            <FontAwesomeIcon icon={faPhone} className='phone-icon pe-2' size='1x' /> +40769 935 716
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

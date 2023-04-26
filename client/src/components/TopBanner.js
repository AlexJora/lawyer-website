import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const TopBanner = () => {
  return (
    <div className='banner w-100 py-1'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <FontAwesomeIcon icon={faLocationDot} className='pe-2' size='1x' /><p className='d-none d-md-block'> Bucuresti</p>
          </div>
          <div className='col text-center'>
            <FontAwesomeIcon icon={faEnvelope} className='pe-2' size='1x' /><p className='d-none d-md-block'> av_alinamarin@yahoo.com</p>
          </div>
          <div className='col text-center'>
            <FontAwesomeIcon icon={faPhone} className='phone-icon pe-2' size='1x' /><p className="phone d-none d-md-block" > +40769 935 716</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

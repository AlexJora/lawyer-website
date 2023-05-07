import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const TopBanner = () => {
  return (
    <div className='banner w-100 py-1'>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          {/* First column */}
          <div className='col-5 col-md-4'>
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faLocationDot} className='pe-2' size='1x' />Bucuresti
            </div>
          </div>

          {/* Second column */}
          <div className='col-7 col-md-4'>
            <div className="d-flex flex-row align-items-center ">
              <FontAwesomeIcon icon={faEnvelope} className='pe-2' size='1x' />av_alinamarin@yahoo.com
            </div>
          </div>

          {/* Third column (shown only on medium and large screens) */}
          <div className='col-md-4 d-none d-md-block'>
            <div className="d-flex flex-row align-items-center justify-content-end">
              <FontAwesomeIcon icon={faPhone} className='phone-icon pe-2' size='1x' /> +40769 935 716
            </div>
          </div>

          {/* Third column (shown only on small screens) */}
          <div className='col-12 d-md-none text-center'>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <FontAwesomeIcon icon={faPhone} className='phone-icon pe-2' size='1x' /> +40769 935 716
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default TopBanner;

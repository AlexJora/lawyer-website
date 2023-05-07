import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const TopBanner = () => {
  return (

    <div class='banner w-100 py-1'>
      <div class='container'>
        <div class='row'>
          {/* First two columns */}
          <div class='col-12 col-md-4 text-center'>
            <FontAwesomeIcon icon={faLocationDot} className='pe-2' size='1x' />Bucuresti
          </div>
          <div class='col-12 col-md-4 text-center'>
            <FontAwesomeIcon icon={faEnvelope} className='pe-2' size='1x' />av_alinamarin@yahoo.com
          </div>

          {/*Third column (hidden on small screens) */}
          <div class='col-md-4 d-none d-md-block text-center'>
            <FontAwesomeIcon icon={faPhone} className='phone-icon pe-2' size='1x' /> +40769 935 716
          </div>

          {/* Third column (shown only on small screens)  */}
          <div class='col-12 d-md-none text-center'>
            <FontAwesomeIcon icon={faPhone} className='phone-icon pe-2' size='1x' /> +40769 935 716
          </div>
        </div>
      </div>
    </div>




  );
};

export default TopBanner;

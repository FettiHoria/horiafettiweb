import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className='page-wrapper'>
      <div className='content'>

      </div>
      <MDBFooter bgColor='light' className='footer'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
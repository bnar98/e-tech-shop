/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Account Details</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Contact Us</h3>
            </div>
            <div className='block-content'>
              <ul>
                <li>+964 750 123 22 55</li>
                <li>etouch@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className='footer-block footer-end'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Sell With Us</h3>
            </div>
            <div className='block-content'>
              <ul><li>Fill Request Form</li></ul>
            </div>
          </div>

        </div>


      </Container>
    </footer>
  );
};

export default Footer;

/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <h3>Trends</h3>
        <Row className='flex-row'>
          <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <img src='/images/banners/banner-9.png' className='' />

            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-8.png' className='' />
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-10.png' className='' />
            </div>
          </Col>
        </Row>

        <h3 className='h3NewArrival'>New Arrivals</h3>

        <Row className='flex-row homeArrivalProductList'>
          <Col xs='12' lg='2' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <img src='/images/arrivals/arrival-1.png' className='' />
            </div>
          </Col>
          <Col xs='12' lg='2' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/arrivals/arrival-2.png' className='' />
            </div>
          </Col>
          <Col xs='12' lg='2' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/arrivals/arrival-3.png' className='' />
            </div>
          </Col>
          <Col xs='12' lg='2' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/arrivals/arrival-4.png' className='' />
            </div>
          </Col>
          <Col xs='12' lg='2' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/arrivals/arrival-5.png' className='' />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);

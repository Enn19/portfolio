import React, { Component } from 'react'
import bet from '../src/imges/poert1.png'
import cake from"../src/imges/port2.png"
import cravan from '../src/imges/port3.png'

export default class Portofolio extends Component {
  render() {
    return <>
    <div className="my-4">
     <div className="text-center pt-4 porto">
      <h2 className="text-uppercase mb-3 fs-1 fw-border">
      PORTFOLIO COMPONENT
      </h2>
      <div className=' d-flex mb-3 align-items-center justify-content-center '>
            <div className="line me-3 bg-bla"></div>
            <i  class="fa-solid fa-star porto"></i>
            <div className="line ms-3 bg-bla"></div>
          </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={bet} className='rounded-3 w-100'></img>
              <div  className="layer  position-absolute  start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i  class="text-white  fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={cake} className='rounded-3 w-100'></img>
              <div  className="layer  position-absolute  start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i  class="text-white  fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={cravan} className='rounded-3 w-100'></img>
              <div  className="layer  position-absolute  start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i  class="text-white  fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={bet} className='rounded-3 w-100'></img>
              <div  className="layer  position-absolute  start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i  class="text-white  fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={cake} className='rounded-3 w-100'></img>
              <div  className="layer  position-absolute  start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i  class="text-white  fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={cravan} className='rounded-3 w-100'></img>
              <div  className="layer  position-absolute  start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i  class="text-white  fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
       </div>
      </>
  }
}

import React, { Component } from 'react'
import photo from '../src/imges/avataaars.svg'
export default class Home extends Component {
  render() {
    return <>
    <div className='home'>
      <div className=" d-flex justify-content-center align-items-center text-white">
        <div className="text-center">
          <img src={photo} className='my-5'></img>
          <div className="text-center pt-4 text-white">
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>
            START FRAMEWORK
            </h2>
            <div className=' d-flex mb-3 align-items-center justify-content-center '>
            <div className="line me-3 bg-white"></div>
            <i  class="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <div >Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </div>
    </>
  }
}
